console.log("Dokument wird geladen"); /*Konsolenausgabe nach Start */
window.onload = function () {
    console.log("Dokument ist geladen");
    document.getElementById("Ramona").addEventListener("click", changeName);
    document.getElementById("Jennis").addEventListener("click", addElement);
    document.getElementById("button").addEventListener("click", init);
};
function init() {
    document.getElementById("button").addEventListener("click", init);
}
function changethings() {
    let str1 = "time";
    let str2 = "eleven";
    let number1 = 1;
    let number2 = 2;
    number1 = 2;
    number1 = number1 + number2;
    console.log(number1);
    str1 = str1 + str2;
    console.log(str1);
    console.log(number1 + str1);
    document.getElementById("time").innerHTML += " things";
    document.getElementById("time").className = "tight";
    document.getElementById("time").innerHTML += " Stuff";
    document.getElementById("time").className = "centered";
}
function addElement() {
    let element = document.getElementById("Jennis");
    let paragraph = document.createElement("p");
    let text = document.createTextNode("neues HTML Element per Typescript");
    paragraph.appendChild(text);
    element.appendChild(paragraph);
}
function changeName() {
    let element = document.getElementById("Ramona");
    let paragraph = document.createElement("p");
    let text = document.createTextNode("Verändere den Namen");
    paragraph.appendChild(text);
    element.appendChild(paragraph);
}
//# sourceMappingURL=script.js.map