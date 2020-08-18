//Task 9

function multiLess(num){
var threeSum=0;
var fiveSum=0;
var fifteenSum=0;
for(var i =0;i<num;i+=3){
  threeSum =threeSum + i;
}
for(var i =0;i<num;i+=5){
  fiveSum =fiveSum + i;
}
for(var i =0;i<num;i+=15){
  fifteenSum =fifteenSum + i;
}
tot=threeSum + fiveSum -fifteenSum;
console.log(tot);
}
//testing 
multiLess(20);
multiLess(10);
multiLess(1000);
