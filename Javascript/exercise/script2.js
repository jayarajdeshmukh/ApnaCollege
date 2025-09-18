let score = prompt("Enter a score");
if (score >= 90 && score <= 100) {
    console.log(score, "A");
}
  else if (score >= 70 && score <= 89) {
    console.log(score, "B");
}
  else if (score >= 60 && score <= 69) {
    console.log(score, "C");
}
  else if (score >= 50 && score <= 59) {
    console.log(score, "D");
}
  else if (score >= 0 && score <= 49) {
    console.log(score, "Fail");
}
 else {
    console.log("Invalid score");
 }
