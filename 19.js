

var e = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var i=0
var evenc=0
var oddc=0
var  evens=0
var odds=0
while(i<e.length){
    if(e[i]%2==0){
        evenc=evenc+1
        evens=evens+e[i]
    }
    else{
        oddc=oddc+1
        odds=odds+e[i]
    }
    i=i+1
}
console.log(evenc,"count of even")
console.log(oddc,"count of odd")
console.log(evens,"sum of even")
console.log(odds,"sum of odd")
console.log((evens+odds)/2,"average of both")


var elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var count_odd_numbers=0;
var sum_odd_numbers=0;
var sum_even_numbers=0;
var count_even_numbers=0;
for(var i of elements){
   if(i%2 ===0){
       sum_even_numbers+=i;
       count_even_numbers+=1;
   }
   else{
       sum_odd_numbers+=i;
       count_odd_numbers+=1;
   }
}
console.log((sum_even_numbers+sum_odd_numbers)/2);
console.log(count_odd_numbers);
console.log(count_even_numbers);
console.log(sum_odd_numbers);
console.log(sum_even_numbers);