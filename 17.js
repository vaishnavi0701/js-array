var e = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i=0
var sume=0
var sumo=0
while(i<e.length){
    if(e[i]%2===0){
        sume=sume+e[i]
    }
    else{
        sumo=sumo+e[i]
    }
    i=i+1
}
console.log(sume)
console.log(sumo)

elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
 
var sum_odd_numbers=0
var sum_even_numbers=0
for(var i of elements){
   if(i%2 ===0){
       sum_even_numbers+=i
   }
   else{
       sum_odd_numbers+=i
   }
}
console.log(sum_odd_numbers);
console.log(sum_even_numbers);