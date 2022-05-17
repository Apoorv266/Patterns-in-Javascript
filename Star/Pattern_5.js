//     *
//    ***
//   *****
//  *******
// *********


for(let r = 1; r <= 5; r++){
    for (j = 5; j > r; j--)
        document.write("&nbsp;&nbsp;");
    for(let c = 1; c < r*2; c++){
        document.write("*")
    }
    document.write("<br>")
}