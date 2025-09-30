let btn = document.createElement("button")
btn.innerText="Click me!"

btn.style.cssText = "background-color:red; padding:10px; margin:10px; color:white;";
//    OR 
//  btn.style.backgroundColor="red" 
//  btn.style.color="white"

document.querySelector("body").prepend(btn);

// Q2
let para = document.querySelector("p")
