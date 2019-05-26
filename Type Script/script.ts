console.log("Dokument wird geladen"); /*Konsolenausgabe nach Start */

window.onload=function() 
 {console.log("Dokument ist geladen");
document.getElementById("Ramona").addEventListener("click", changeName);
 }
function init() {
    document.getElementById('button').addEventListener('click',init);
  }

function 
    { 
    let str1: string="time";
    let str2: string= "eleven";
    let number1: number=1;
    let number2: number=2;
   

    number1= 2;
    number1= number1+number2; 
    console.log(number1);

    str1=str1+str2;
    console.log(str1);

    console.log(number1+str1);


    document.getElementById("time").innerHTML += " things";
    document.getElementById("time").className = "tight"; 

    
      document.getElementById("time").innerHTML += " Stuff"; 
      document.getElementById("time").className = "centered";
  }
  function addElement(){
      let element = document.getElementById("Jennis");
      let paragraph = document.createElement("p");
      let text = document.createTextNode("neues HTML Element per Typescript");
      paragraph.appendChild(text);
      element.appendChild(paragraph);
  }

  function changeName(){
      let element = document.getElementById("Jennis");
      let paragraph = document.createElement("p");
      let text = document.createTextNode("Verändere den Namen");
      paragraph.appendChild(text);
      element.appendChild(paragraph);
      
  }
  
}

