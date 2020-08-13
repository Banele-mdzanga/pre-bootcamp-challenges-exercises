//Task 6
function largestNum(a,b,c){
                 //largest number
  if((a>b) && (a>c)){
    return a;
  }else{
    if((b > a) && (b > c)){
     return b;
    }else{
      if((c > a) && (c > b)){
      return c;
      }
    }
  }
}
console.log(largestNum(12,4,65));
