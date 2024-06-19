let start = document.getElementById("start");

start.addEventListener("click", () => {
  let dict = {
    header: "lightsalmon",
    nav: "palegreen",
    left: "lightcoral",
    right: "lightpink",
    footer: "saddlebrown",
  };

  let arr = ["header", "nav", "left", "right", "footer"];

  setInterval(() => {
    let ran = parseInt(Math.random() * 5);
    let ans = arr[ran];
    document.getElementById(ans).style.backgroundColor = dict[ans] || "";

    setTimeout(() => {
      document.getElementById(ans).style.backgroundColor = "paleturquoise";
      console.log(ans);
    }, 2000);
  }, 2000);

  //   setTimeout(() => {
  //     location.reload();
  //   }, 5000);
});
