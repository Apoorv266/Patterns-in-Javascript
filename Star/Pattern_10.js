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

    for (let j = 1; j < i; j++) {
        document.write("*")
    }
    document.write("<br>")
}

//lower triangle
for (let p = 1; p <= 4; p++) {
    for (let m = 1; m <= p; m++) {
        document.write("&nbsp;&nbsp;")
    }

    for (let t = p ; t <= 4; t++){
        document.write("*")
    }

    for (let z = p ; z <= 3; z++){
        document.write("*")
    }

    for (let m = 1; m <= p; m++) {
        document.write("&nbsp;&nbsp;")
    }
    document.write("<br>")
}


