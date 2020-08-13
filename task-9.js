//Task 9

var threeSum=0;
var fiveSum=0;
var fifteenSum=0;
for(var i =0;i<1000;i+=3){
  threeSum =threeSum + i;
}
for(var i =0;i<1000;i+=5){
  fiveSum =fiveSum + i;
}
for(var i =0;i<1000;i+=15){
  fifteenSum =fifteenSum + i;
}
tot=threeSum + fiveSum -fifteenSum;
console.log(tot)
