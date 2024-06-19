handleSubmit = () => {
  let num = document.getElementById("num").value;
  let col = document.getElementById("col").value;

  document.body.style.background = col;

  console.log(num, col);
  for (let i = 1; i < num; i++) {
    let a = document.createElement("h1");
    document.body.appendChild(a);
  }

  window.print();
};
