//Task 4
function task4(num1,num2){
   k = num1 + num2;
 stringK= k.toString();                 
  var kcheck = stringK.indexOf('3');     
  if((num1==3)&&( kcheck > -1)||( num2 ==3) &&( kcheck > -1)) {
    return true;
  }
  else {
    return false;
  }
}
// Check if function is working
console.log(task4(3,10));
console.log(task4(3,1));
console.log(task4(9,4));
console.log(task4(3,3));
