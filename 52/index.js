let imgUrl = prompt("Enter the url of image");

let img = document.querySelector("img");
img.setAttribute("src", imgUrl);

let topElement = document.getElementById("top");
let rightElement = document.getElementById("right");
let bottomElement = document.getElementById("bottom");
let leftElement = document.getElementById("left");

topElement.value = 0;
rightElement.value = 0;
bottomElement.value = 0;
leftElement.value = 0;

function Function() {
  img.setAttribute(
    "style",
    `clip-path: inset(${topElement.value}px ${rightElement.value}px ${bottomElement.value}px ${leftElement.value}px);`
  );

  // img.style.boxShadow = "0px 0px 100px 0px cyan";

  let topValue = document.getElementById("topValue");
  topValue.innerText = topElement.value + " px";

  let rightValue = document.getElementById("rightValue");
  rightValue.innerText = rightElement.value + " px";

  let bottomValue = document.getElementById("bottomValue");
  bottomValue.innerText = bottomElement.value + " px";

  let leftValue = document.getElementById("leftValue");
  leftValue.innerText = leftElement.value + " px";
}
