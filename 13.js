
// var list1 = [1,2,3,4,5,6]
// var list2 = [2,3,1,0,6,7]
// elements=[]
// for(var i of list1){
//    if (!list2.includes(i)){
//        elements.push(i)
//    }
// }
// console.log(elements);




var a = [1,2,3,4,5,6]
var b = [2,3,1,0,6,7]
var c=[]
var i=0
while(i<a.length){
    if(!b.includes(a[i])){
        c.push(a[i])
    }
    i=i+1
}
console.log(c)