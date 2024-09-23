const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-classic.png") {
        myImage.setAttribute("src", "images/firefox-modern.png");
    } else {
        myImage.setAttribute("src", "images/firefox-classic.png");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {    
    const myName = prompt("Please enter your name.");
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozzila greets you, ${myName}`;
    }
}   
  
if(!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozzila greets you, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
}