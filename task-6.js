//Task 6
function largestNum(a,b,c){
                 //largest number
  if((a>b) && (a>c)){
    console.log(a);
  }else{
    if((b > a) && (b > c)){
     console.log(b);
    }else{
      if((c > a) && (c > b)){
      console.log(c);
      }
    }
  }
}
largestNum(12,4,65);
