//Task 4
function task4(num1,num2){
   k = num1 + num2;
 stringK= k.toString();                 //convert k to string
  var kcheck = stringK.indexOf('3');     //check if k contains a 3
  if((num1==3)&&( kcheck > -1)||( num2 ==3) &&( kcheck > -1)) {
    console.log("True");
  }
  else {
    console.log("False");
  }
}
// Check if function is working
task4(3,10);
task4(3,1);
task4(9,4);
task4(3,3);
