for (var i = 0; i < Infinity; i++) {

var num1 = parseInt(prompt("Please key in a Number:"))
var num2 = parseInt(prompt("Please key in another Number:"))
/*key in first number 
  key in second number
*/

var option= prompt("What do you want to do with these numbers? 1)If addition, put 1 2)If subtraction, put 2 3)If multiplication, put 3 4)If division, put 4")
//key in equation option

if (option==1) {
console.log("Answer:")
console.log(num1 + num2)
  //if option=1 do addition
} 
else if (option==2) {
console.log("Answer:")
console.log(num1 - num2)
    //if option=2 do subtraction
} 
else if(option==3){
console.log("Answer:")
console.log(num1 * num2)
    //if option=3 do multiplication
}
else if(option==4){
console.log("Answer:")
console.log(num1 / num2)
    //if option=4 division
}
else{
console.log("invalid equation")
  //wrong option
}
}




