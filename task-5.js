//Task 5
function areaOfTri(a,b,c){
  var s = (a + b + c)/2 ;
  var x = s*(s-a)*(s-b)*(s-c);
  var area=Math.sqrt(x);
  console.log(area);
}
areaOfTri(2,2,2);
