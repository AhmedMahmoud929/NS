let bi = document.getElementById("bi");
let dec = document.getElementById("dec");
let btn = document.getElementById("btn");
let arr = [];
let abs = true;


btn.addEventListener("click", function(eo) {
    eo.preventDefault();
    if (dec.value == parseInt(dec.value)) {
        if (dec.value > 0) {
            dec = dec.value;
        } else {
            dec = -dec.value;
            abs = false;
        }

        for (let i = 0; dec > 0; i++) {
            arr[i] = parseInt(dec % 2);
            dec = parseInt(dec /= 2);
        }

        if (abs == true) {

            bi.innerHTML = arr.reverse().join("");
        } else {

            bi.innerHTML = -arr.reverse().join("");
        }
        resetBtn()
    }


})


// reset button
function resetBtn() {
    document.getElementById("btn2").style.opacity = "1";
    document.getElementById("btn2").style.pointerEvents = "auto";
    document.getElementById("dec").style.opacity = "0.4";
    document.getElementById("dec").style.pointerEvents = "none";
    document.getElementById("btn2").onclick = function() {
        location.reload();
    }

}