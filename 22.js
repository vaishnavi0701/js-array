

// var number_list = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
// uniques=[]
// duplicates=[]
// for(var i of number_list){
//   if(!uniques.includes(i)){
//       uniques.push(i)
//   }
// }
// console.log(uniques)
 
// for(var j of uniques){
//   count=0
//   for(var k of number_list){
//       if (j === k){
//           count+=1
//       }
//   }
//  if(count >1){
//    duplicates.push(j);
//  };
// }
 
// console.log(duplicates);

var z= [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11]
var i=0
var a=[]
// var b=[]
while(i<z.length){
    j=z[i]
    if(!a.includes(z[i])){
        a.push(z[i])
    }
    i=i+1
}
console.log(a)
// var j=0
// while(j<a.length){
//     var count=0
//     var k=0
//     while(k<z.length){
//         if(j==k){
//             count=count+1
//         }
//     j=j+1
//     }
// i=i+1
// }
// if(count>1){
//     b.push(a[j])
// }
// console.log(b)


      