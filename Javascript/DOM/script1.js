let div = document.querySelector("div");
console.log(div);


// how to get attribute value id, class , 
let id = div.getAttribute("id");
console.log(id);

let name = div.getAttribute("name");
console.log(name);

// how to set attribute value see output in element
let para = document.querySelector("p");
console.log(para.setAttribute("class", "newclass"))

// styles using javascript
div.style.backgroundColor="red";
div.style.fontSize="20px";
div.innerText="Hello!";   

// btn inside div after ul
let newBtn = document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);

let box1 = document.querySelector("#box1 ul")
box1.append(newBtn)

// btn inside div before ul
let newBtn1 = document.createElement("button")
newBtn1.innerText="click me";
console.log(newBtn1)

let box2 = document.querySelector("#box2 ")
box2.prepend(newBtn1)

// btn before div or outside node
let btn = document.createElement("button")
btn.innerText="click me"
console.log(btn)

let box3 = document.querySelector("#box3")
box3.before(btn)

// btn after div or outside node
let btn1 = document.createElement("button")
btn1.innerText="click me"
console.log(btn1)

let box4 = document.querySelector("#box4")
box4.after(btn1)

// new heading without touch html file
let newHeading = document.createElement("h1");
newHeading.innerText=" Hi, I am new!";

document.querySelector("body").prepend(newHeading)

// remove element or delete
let para1 = document.querySelector(".para1")
para1.remove(); 
