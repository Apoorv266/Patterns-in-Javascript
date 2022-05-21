//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *


// top triangle
for (let i = 1; i <= 5; i++) {
    for (let r = i; r <= 5; r++) {
        if (r === 5) {
            document.write("*")
        }                                                     
        else {
            document.write("&nbsp;&nbsp;")
        }
    }

    for (let k = 2; k <= i; k++) {
        document.write("*")
    }

   for (let j = 1; j < i ; j++){
    document.write("*")
   }
    document.write("<br>")
}