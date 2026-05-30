const heroTitle = document.querySelector(".hero h3");
const text = "Aspiring AI&ML Engineer";
let index = 0;

function typeText() {
  heroTitle.textContent = text.slice(0, index);

  index++;

  if (index > text.length) {
    setTimeout(() => {
      index = 0;
      typeText();
    }, 1800);
    return;
  }

  setTimeout(typeText, 90);
}

typeText();

document.addEventListener("mousemove", (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;

  document.querySelector(".page").style.transform =
    `translate(${(x - 0.5) * 8}px, ${(y - 0.5) * 8}px)`;
});