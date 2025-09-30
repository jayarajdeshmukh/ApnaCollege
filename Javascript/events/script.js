let btn1 = document.querySelector(".btn1")

btn1.onclick = () =>{
     console.log("btn1 was clicked")
      let a = 25;
      a++;
      console.log(a);  // 26
}

let btn2 = document.querySelector(".btn2")
btn2.addEventListener("click", () => {
      console.log("button2 was clicked");
})