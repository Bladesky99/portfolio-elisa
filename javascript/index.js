const left = document.querySelector(".homepage-link-left");
const right = document.querySelector(".homepage-link-right");
const container = document.querySelector(".content");
left.addEventListener("mouseenter", () => {
  container.classList.add("hover-left");
});
left.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left");
});
right.addEventListener("mouseenter", () => {
  container.classList.add("hover-right");
});
right.addEventListener("mouseleave", () => {
  container.classList.remove("hover-right");
});
