//  ######CHAPTER 17-20 

//  Question 01

//  var arr = []; []; [];
//  console.log(arr);

//  Question 02

//  var arr = [[0, 1, 2, 3 + '<br>'], [1, 0, 1, 2 + '<br>'], [2, 1, 0, 1]];
//  document.write(arr.join(""));

//  Question 03

//  for (let i = 1; i <= 10; i++) {
//      document.write(i+'<br>');
//  }

//  Question 04

//  var tablenum = parseInt(prompt("Enter a Number to Show its Multiplication Table:", "5"));
//  var tableLenth = parseInt(prompt("Enter Length of Multiplication Table:"));
//  for (let i = 1; i <=tableLenth; i++) {
//      document.write(tablenum + " x " + i + " = " + tablenum * i + "<br>");
//  }

//  Question 05

//  var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
//  for (let i = 0; i < fruits.length; i++) {
//      document.write("Elements at index "+i+" is "+ fruits[i]+"<br>");
    
//  }

//  Question 06

//  for (let index = 0; index <= 15; index++) {
//      document.write (index+" ");  
//  }

//  for (let index = 20; index >=1; index--) {
//      document.write (index +" ");  
//  }

//  for (let index = 0; index <=20; index+=2) {
//      document.write(index+" ")
    
//  }

//  for (let index = 1; index <=20; index+=2) {
//          document.write(index+" ")
    
//      }
    
//      for (let index = 2; index <=20; index+=2) {
//              document.write(index+" k ")
        
//          }
        
//         Questiom 07
        
//          var input = prompt("Which Food you Foumd");
//          var food = ["cake","apple pie","cookie","chips","patties"];
//          var flag=false;
//          for (let index = 0; index < food.length; index++) {
//              if (food[index]==input) {
//                  flag =true;
//                  break;
//              } 
//          }
//          if (flag){
//          alert("This is availabe at our store:");
//          }else{
//              alert("This is not availabe at our store:");
//         }



//  Question 08

//  const A = [24, 53, 78, 91, 12];
//  document.write("Array Items: " +A + "<br>");
//  let largest = A[0];

//  for (let i = 1; i < A.length; i++) {
//    if (A[i] > largest) {
//          largest = A[i]

//      }
//  }

// document.write("The largest number in the array is: " + largest);

//  Question 09

//  const B = [24, 53, 78, 91, 12];
//  document.write("Array Items: " + B + "<br>")
//  let L = B[0];
//  for (let i = 1; i < B.length; i++) {
//      if (B[i] < L) {
//          L = B[i]
//      }
//  }
//  document.write("The Smallest number in the array is: " + L);

//  Question 10

//  for (let index = 1; index <=20; index++) {
//      document.write(index*5 +"<br>")
// }