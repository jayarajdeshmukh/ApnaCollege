document.getElementById("heading");
console.log(heading);

let headings = document.getElementsByClassName("heading-class");
console.log(headings);

let paras = document.getElementsByTagName("p")
console.log(paras);

let elements = document.querySelector("p"); // 1st element
console.log(elements);

let element = document.querySelectorAll("p"); // all element
console.log(element);

let div = document.querySelector("div")
console.log(div);

let newtxt = document.querySelector("h2")
console.log(newtxt)

let h3 = document.querySelector("h3")
console.log(h3.innerText)
h3.innerText=h3.innerText + " Welcome to world"


let box = document.querySelectorAll(".box")
box[0].innerText="new unique value 1";
box[1].innerText="new unique value 2";
box[2].innerText="new unique value 3";

let idx = 1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}