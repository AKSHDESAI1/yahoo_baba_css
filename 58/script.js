
let base = document.getElementById("base");


function fun(id) {
    let first = id.split("_")[0];
    let second = id.split("_")[1];
    console.log(first, second);

    base.style.perspectiveOrigin = `${first} ${second}` ;  
}