//task 10

function countVowels(str) {
  var len = str.length;
  var counter = 0;  
  for (var i = 1; i< len; i++){
    if( /[aeiouAEIOU]/.test(str[i]) ){ 
        console.log(str[i]);
    } 
  } 
}
countVowels('hsbdajjkweiuodacbhkrHBSUYBIEVBHJBghfgjhqwggkUIUOKM ASD')
