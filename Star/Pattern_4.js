// *****
//  ****
//   ***
//    **
//     *

// for (i = 1; i <= 5; i++) {
//     for (j = 1; j < i; j++)
//         document.write("&nbsp;");
//     for (k = 5; k >= i; k--)
//         document.write("*");
//     document.write("<br>");
// }


for (let i = 1; i <= 5; i++){
    for(let j = 1; j < i; j++)
    document.write("&nbsp;&nbsp;");
    for(let k = 5; k >= i ; k--){
        document.write("*");
    }
    document.write("<br>");
}