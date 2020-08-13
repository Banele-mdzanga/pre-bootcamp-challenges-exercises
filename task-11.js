//task 11
function findChar(str1,str2){
    var strArray1=Array.from(new Set([...str1]));
    var strArray2=Array.from(new Set([...str2]));

    var comArr=strArray1.filter(function(d,ix){
        return strArray2.indexOf(d)!=-1;
    });
console.log(comArr);
}
findChar('lnknyufsbfbdivobwiuvblKDBVBUIHBVBJKB','klnhbj,hybvlbvsjklbvDHIYGBYISFBUI')
