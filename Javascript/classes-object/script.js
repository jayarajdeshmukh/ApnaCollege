const student = {
    name: "Jay",
    age: 24,
    marks: 86,
    printMarks: function () {
        console.log("marks= ", this.marks);
    }
}

// prototype  example
const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary: 50000,
};

karanArjun.__proto__ = employee;

// class
class ToyotaCar{
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop")
    }
}

let fortuner = new ToyotaCar();
let lexus = new ToyotaCar();


// inheritance
class Person {
    constructor() {
        this.species = "homo sapiens"
    }
    eat(){
        console.log("eat")
    }
    sleep(){
        console.log("sleep")
    }
    work(){
        console.log("do nothing")  // If child & Parent have same method, childs method will be used [Method Overriding]
    }
}

class Engineer extends Person{
    work(){
        console.log("solve problems, build something");
    }
}

class Doctor extends Person{
    work(){
        console.log("Treat Patient");
    }
}

let jayObj = new Engineer();