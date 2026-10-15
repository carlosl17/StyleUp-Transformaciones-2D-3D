// Tarjeta 2D: los botones cambian la propiedad CSS transform.
const product = document.getElementById("product");
const current = document.getElementById("activeTransform");
document.querySelectorAll("[data-transform]").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll("[data-transform]")
      .forEach((b) => b.classList.remove("selected"));
    button.classList.add("selected");
    const transform = button.dataset.transform;
    product.style.transform = transform;
    current.textContent = transform;
  });
});
let back = false;
document.getElementById("flipJacket").addEventListener("click", () => {
  back = !back;
  const img = document.getElementById("jacketImg");
  img.src = back
    ? "imagenes/chaqueta-espalda.jpg"
    : "imagenes/chaqueta-frente.jpg";
  img.alt = back
    ? "Chaqueta azul y blanca vista posterior"
    : "Chaqueta azul y blanca vista frontal";
});

// Carrusel 3D: seis caras separadas 60 grados (360 / 6).
const carousel = document.getElementById("carousel");
const angleLabel = document.getElementById("angle");
let index = 0;
function rotateTo(delta) {
  index += delta;
  const degrees = -index * 60;
  carousel.style.transform = `rotateY(${degrees}deg)`;
  angleLabel.textContent = `${degrees}°`;
}
document.getElementById("prev").addEventListener("click", () => rotateTo(-1));
document.getElementById("next").addEventListener("click", () => rotateTo(1));
let timer = null;
const play = document.getElementById("play");
play.addEventListener("click", () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
    play.textContent = "▶ Automático";
    play.setAttribute("aria-pressed", "false");
  } else {
    timer = setInterval(() => rotateTo(1), 2200);
    play.textContent = "Ⅱ Pausar";
    play.setAttribute("aria-pressed", "true");
  }
});
