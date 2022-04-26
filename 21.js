var a= ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
// var i=0
// var b=[]
// while(i<a.length){
//     if(!b.includes(a[i])){
//         b.push(a[i])
//     }
//     i=i+1
// }
// console.log(b)

// var j=0
// while(j<b.length){
//     var c=0
//     var k=0
//     while(c<a.length){
//         if(b[j] == a[i]){
//             c+=1
//     }
//     j=j+1
// }
// }
// console.log(j,c,"times")

var c=[]
var i=0
while (i<a.length){
    var j=0
    var count=0
    while(j<a.length){
        if (a[i]==a[j]){
            count+=1
            c.push(a[i])
        }
        c.push(count)
    }
}
console.log(c)
 

// char_list = ["a", "n", "t", "a", "a", "t", "n", "n", "a", "x", "u", "g", "a", "x", "a"]
 
// uniques=[]
// for(var i of char_list){
//    if(!uniques.includes(i)){
//        uniques.push(i)
//    }
// }
// console.log(uniques);
 
// for(var j of uniques){
//    count=0
//    for(var k of char_list){
//        if (j === k){
//            count+=1
//        }
//    }
//    console.log(j,count," times");
// }