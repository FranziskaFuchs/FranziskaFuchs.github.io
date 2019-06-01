console.log("Dokument wird geladen"); /*Konsolenausgabe nach Start */

// mehrere Funktionen
window.onload = function() { //Funktion nach Laden des Fensters
    console.log("Dokument ist geladen");

    // Event-Listener, der bei click Inhalt ändert
    document.getElementById("Ramona").addEventListener("click", changethings);
    document.getElementById("time").addEventListener("click",init);
}

function changethings(){ 
    document.getElementById("Ramona").className = "changed"; //Klasse ändern

    let str1: string="time"; // Variable von Typ string
    let str2: string= "eleven";
    let number1: number=1; // Variable von Typ number
    let number2: number=2;
   
    number1= 2; // neuer Wert für bereits deklarierte Variable
    
    //Rechnung zwischen (number + number)
    number1= number1+number2; 
    console.log(number1);

    // Rechnung zwischen (string + string)
    str1=str1+str2;
    console.log(str1);

    // Rechnung zwischen (string + number)
    console.log(number1+str1);

    addElement(); //Erstellen neuer HTML-ELemente, siehe Funktion unten
}

function init() {
    document.getElementById("time").innerHTML += " Stuff"; 
}

function addElement(){
    let element = document.getElementById("Jennis");
    let paragraph = document.createElement("p");
    let text = document.createTextNode("neues HTML Element per Typescript");
    paragraph.appendChild(text);
    element.appendChild(paragraph);
}

console.log(addElement);