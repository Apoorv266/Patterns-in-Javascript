//     *
//    ***
//   *****
//  *******
// *********

for (let r = 1; r <= 5; r++) {
    for (j = 5; j > r; j--) {
        document.write("&nbsp;&nbsp;");
    }

    for (let k = 1; k <= r; k++) {
        document.write("*");
    }

    for (let p = 2; p <= r; p++) {
        document.write("*");
    }

    document.write("<br>");
}

