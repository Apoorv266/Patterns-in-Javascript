//     *        
//    * *      
//   *   *    
//  *     *  
// *       *
 

// for(let r = 1; r <= 5; r++){
//     for (j = 5; j > r; j--)
//     document.write("&nbsp;&nbsp;");
//     for(let c = 1; c < r*2 ; c++){
//     // if(c === 3){
//     // }
//     document.write("*")
// }
//     document.write("<br>")
// }


// var i, j, k;
// for(i=1; i<=5; i++)
// {
//  for(j=5; j>=1; j--)
//  console.log("let j :" ,j ,"let i :",i)
//  {
//   if(i == j)
//    document.write("*");
  
//   else
//    document.write("&nbsp;&nbsp;");
//  } 
//  for(k=2; k<=5; k++)
//  {
//   if(i == k)
//    document.write("*");
//   else
//    document.write("&nbsp;&nbsp;");
//  }
//  document.write("<br>");
//  console.log("------------")
// }

for(let i = 5; i >= 1; i--){
for(let r = 1; r <= i; r++){
    if (r === i){
        document.write("*")
    }

    else{
        document.write("&")
    }
}

// for (let k = 2; k <= i ; k++){
//     if(k === i ){
//         document.write("*")
//     }
//     else{
//         document.write("&")
//     }
// }

document.write("<br>")
}