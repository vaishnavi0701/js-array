var marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
 ];

 var sum=0;
 for(var i of marks){
    for(var j of i){
        sum+=j
    }
 }
 console.log(sum);

// marks = [
//    [78, 76, 94, 86, 88],
//    [91, 71, 98, 65, 76],
//    [95, 45, 78, 52, 49]
// ]
// i=0
// count=0
// sum=0
// while i<len(marks):
//    a=0
//    while a<len(marks[i]):
//        sum=sum+marks[i][a]
//        a=a+1
//    i=i+1
//    count=count+1
// print(sum)


// var marks = [
//     [78, 76, 94, 86, 88],
//     [91, 71, 98, 65, 76],
//     [95, 45, 78, 52, 49]
//  ]
//  var count=0
//  var sum=0
//  var i=0
//  while(i<marks.length){
//    a=0
//    while (i<marks[i].length){
//       sum=sum+marks[i][a]
//       a=a+1
//    i=i+1
//    count=count+1
//    }
//    console.log(sum)
//  }
 

