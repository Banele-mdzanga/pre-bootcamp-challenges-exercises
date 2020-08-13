//Task 3
function task3(num1,num2){
  var k = num1 + num2;
  if((num1==65)||( num2 ==65)|| ( k==65)) {
    return "True";
  }
  else {
    return "False";
  }
}
// Check if function is working
console.log(task3(34,65));
console.log(task3(65,1));
console.log(task3(21,44));
console.log(task3(1,2));
