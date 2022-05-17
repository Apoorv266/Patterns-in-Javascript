//     * 
//    **
//   ***
//  ****
// *****

var i, j, k;
for (i = 1; i <= 5; i++) {
    for (j = 5; j > i; j--)
        document.write("&nbsp;&nbsp;");
    for (k = 1; k <= i; k++)
        document.write("*");
    document.write("<br>");
}
