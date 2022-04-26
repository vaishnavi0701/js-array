var s = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]

var i=0
var evena=0
var odda=0
while(i<s.length){
    if(s[i]%2==0){
        evena=evena+s[i]
    }
    else{
        odda=odda+s[i]
    }
    i=i+1
}
console.log((evena+odda)/2)


elements = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43]
var sum_odd_numbers=0;
var sum_even_numbers=0;
for(var i of elements){
   if(i%2 ===0){
       sum_even_numbers+=i
   }
   else{
       sum_odd_numbers+=i
   }
}
console.log((sum_even_numbers+sum_odd_numbers)/2);