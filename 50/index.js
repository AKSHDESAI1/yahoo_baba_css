// const h1Element = document.getElementById("h1");

// h1Element.style.setProperty("--h1", "red");

let changeColor = document.querySelector(".changeColor");
let changeColor1 = document.querySelector(".changeColor1");

changeColor.addEventListener("click", () => {
  document.body.style.setProperty("--h--1", "pink");
});

changeColor1.addEventListener("click", () => {
  document.body.style.setProperty("--h--1", "green");
});
