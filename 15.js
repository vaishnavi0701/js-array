var n = [10, 11, 12, 13, 14, 17, 18, 19]
var number =30;
a=[]
for(var i of n){
   for(var j of n){
       if (i+j === number){
           a.push([i,j])
       }
  }
}
console.log(a)