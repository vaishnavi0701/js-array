


// var num=[50, 40, 23, 70, 56, 12, 5, 10, 7]
// var array=[]
// i=num.length-1
// while(i>0){
//     array.push(num[i])
//     i=i-1
// }
// console.log(array)





var list1 = [1,2,3,4,5,6]
var list2 = [2,3,1,0,6,7]
elements=[]
for(var i of list1){
   if (!list2.includes(i)){
       elements.push(i)
   }
}
console.log(elements);



// var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
 
// var odd_numbers=0;
// var even_numbers=0;
// for(var i of elements){
//    if(i%2 ===0){
//        even_numbers+=1
//    }
//    else{
//        odd_numbers+=1
//    }
// }
// console.log(odd_numbers);
// console.log(even_numbers);




// elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
 
// var sum_odd_numbers=0
// var sum_even_numbers=0
// for(var i of elements){
//    if(i%2 ===0){
//        sum_even_numbers+=i
//    }
//    else{
//        sum_odd_numbers+=i
//    }
// }
// console.log(sum_odd_numbers);
// console.log(sum_even_numbers);



