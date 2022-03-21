let bi = document.getElementById("bi");
let dec = document.getElementById("dec");
let btn = document.getElementById("btn");
let sum = 0;
let test = true;
abs = true;



btn.addEventListener("click", function(eo) {
    eo.preventDefault();
    sign();


    // convert a binary number to reversed array
    arrOfBi = Array.from(bi.value).reverse();




    // covert binary to decimal [main operation]

    // convert if int
    if (bi.value == parseInt(bi.value)) {
        for (let i = 0; i < arrOfBi.length; i++) {
            sum += arrOfBi[i] * 2 ** i;
        }
    } //else {

    //     console.log(bi.value * 2)
    //     console.log(parseInt(bi.value * 2))
    // }

    // convert if float
    // show the output
    if (abs == true) {
        dec.innerHTML = sum;
    } else {
        dec.innerHTML = -sum;
        // return number negative
        bi.value = -bi.value;
    }
    resetBtn()

})

// reset button
function resetBtn() {
    document.getElementById("btn2").style.opacity = "1";
    document.getElementById("btn2").style.pointerEvents = "auto";
    document.getElementById("bi").style.opacity = "0.4";
    document.getElementById("bi").style.pointerEvents = "none";
    document.getElementById("btn2").onclick = function() {
        location.reload();
    }

}
// covert negative to positive
function sign() {

    if (document.getElementById("bi").value < "0" && document.getElementById("bi").value != '') {
        document.getElementById("bi").value = -document.getElementById("bi").value;
        abs = false;
    }
}