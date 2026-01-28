// Synchronous
console.log("one")
console.log("two")
console.log("three")

// Asynchronous
console.log("one")
console.log("two")

function hello(){
    console.log("three")
}
setTimeout(hello,2000);  // three will print after 2secs

console.log("four")

// OR 
setTimeout(() => {
   console.log("hello")
},4000);


//Callbacks
function sum(a,b){
    console.log(a+b);
}

function calculator(a,b, sumCallback){
    sumCallback(a,b);
}
calculator(1,2,sum)