const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => {
  currentActive++;
  currentActive > circles.length ? (currentActive = circles.length) : null;
  currentActive > 1
    ? prev.removeAttribute("disabled")
    : prev.setAttribute("disabled", "");
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  currentActive < 1 ? (currentActive = 1) : null;
  currentActive === 1
    ? prev.setAttribute("disabled", "")
    : prev.removeAttribute("disabled");
  update();
});

const update = () => {
  circles.forEach((e, index) => {
    index < currentActive
      ? e.classList.add("active")
      : e.classList.remove("active");
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  currentActive === 1
    ? prev.setAttribute("disabled", "")
    : prev.removeAttribute("disabled");

  currentActive === circles.length
    ? next.setAttribute("disabled", "")
    : next.removeAttribute("disabled");
};
