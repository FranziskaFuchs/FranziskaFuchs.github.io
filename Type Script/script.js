console.log("Dokument wird geladen");
window.onload = function () {
    console.log("Dokument ist geladen");
    document.getElementById("Ramona").addEventListener("click", changeName);
};
function changeName() {
    let str1 = "time";
    let str2 = "eleven";
    let number1 = 1;
    let number2 = 2;
    number1 = number1 + number2;
    console.log(number1);
    str1 = str1 + str2;
    console.log(str1);
    console.log(number1 + str1);
    document.getElementById("time").innerHTML += " things";
    document.getElementById("time");
    className = "tight";
}
//# sourceMappingURL=script.js.map