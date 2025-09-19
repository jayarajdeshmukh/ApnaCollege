 /*  Loops  = repeat code again and again */

  for(let i=1; i<=5; i++){
    console.log("Hello World");
  }

  // calculate sum 1 to 5 numbers

  let sum = 0;
  for(let i=0; i<=5; i++){
       sum =sum + i;
  }
  console.log("sum =",sum);
  
  
  // calculate sum 1 to 50 numbers
let sum3=0;
for(x=0; x<=50; x++){
  sum3 = sum3 + x;
}
console.log(sum3);

   let sum1= 0;
   n=100;
  for(let i=0; i<=n; i++){
       sum1 =sum1 + i;
  }
  console.log("sum1 =",sum1);


  /* While loop
       while(condition){
           // do some work
       }
  */

       let i = 1;
       while(i<5){
         console.log(i);
         i++;
       }


/*  do while loop
  do{
      // do some work
    }
*/
     let a=20;
     do {
      console.log("hello");
      a++;
     } while(a<=10);


     //for-of loop
     // calculate string size
     let str = "JavaScript";
     let size= 0;
     for(let i of str){
      console.log(i);
      size++;
     }
     console.log("string size =", size);

     // for in loop (return keys)
     let student = {
      name: "Jay Deshmukh",
      age:24,
      cgpa:8.25,
      isPass:true,
    }
    for(let key in student){
      console.log("key=", key);
    }