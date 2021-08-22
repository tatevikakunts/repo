/*
document -Object.
document.documentElement - <html>
document.head - <head>
document.body - <body>




                         parentNode
                             ^
                             |
previousElementSibling <-- <DIV> ---> nextElementSibling
        firstChild<-- childNodes--> lastChild




*/
const h2 = document.getElementsByTagName("h2"); //array-like
const mainHeader = document.getElementById("main-header");
const docHeader = document.getElementsByClassName("doc-header");

const newHeader = document.querySelector("h2"); //First element
const newHeadersArray = document.querySelectorAll("h2"); // Array
const newClassHeaders = document.querySelectorAll(".doc-header");

newHeader.innerText = "Privet Mir";
newHeader.style.color = "red";
newHeader.style.fontSize = "48px";
newHeader.style.backgroundColor = "yellow";
// newHeader.classList.add("centered");
// newHeader.classList.remove("centered");
newHeader.classList.toggle("centered"); //works like a switch on/off

newClassesHeaders[1].remove(); //deletes the element

////
const body = document.querySelector("body");
const div = document.createElement("div");
div.classList.add("header-title");
const h3 = document.createElement("h3");
h3.innerText = "Document Title";
div.appendChild(h3);
const pDetail = document.createElement("p");
pDetail.innerText = "Lorem";
pDetail.classList.add("header-detail");
div.appendChild(pDetail);
body.appendChild(div);

console.log(div);
console.log(div.parentNode);
console.log(div.previousElementSibling);
console.log(div.nextElementSibling);
console.log(div.firstChild);
console.log(div.lastChild);
console.log(div.childNodes);

div.previousElementSibling.style.color = "red";

for (let node of div.childNodes) {
  node.classList.add("color-blue");
}



const pars = document.querySelectorAll("p");

for (par of pars){
    if (par.matches(".doc-header")){
        par.innerText = "This is a text"
    }
}



