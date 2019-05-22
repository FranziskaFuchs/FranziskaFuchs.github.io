console.log("Dokument wird geladen");

window.onload=function() {
console.log("Dokument ist geladen");
document.getElementById("Ramona").addEventListener("click", changeName);
}

function changeName()
{
    let str1: string="time";
    let str2: string= "eleven";
    let number1: number=1;
    let number2: number=2;

    number1= number1+number2;
    console.log(number1);

    str1=str1+str2;
    console.log(str1);

    console.log(number1+str1);


    document.getElementById(id).innerHTML += " things";
    document.getElementById(id).className = "tight";





}

