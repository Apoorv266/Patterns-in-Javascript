// **********
// ****  ****
// ***    ***
// **      **
// *        *
// **      **
// ***    ***
// ****  ****
// **********

// upper triangle
for (let i = 1; i <= 5 ; i++){

    for(let j = i; j <= 5; j++){
        document.write("*")
    }

    for (let s = 1; s < i  ; s++ ){
        document.write("&nbsp;&nbsp;")
    }

    for (let s = 1; s < i  ; s++ ){
        document.write("&nbsp;&nbsp;")
    }

    for(let j = i; j <= 5; j++){
        document.write("*")
    }
    document.write("<br>")
}
// lower triangle
for (let m = 1 ; m <= 5; m++){

    for(let p = 1; p <= m ; p++){
        document.write("*")
    }

    for (let b = m; b < 5 ; b++){
        document.write("&nbsp;&nbsp;")
    }

    for (let b = m; b < 5 ; b++){
        document.write("&nbsp;&nbsp;")
    }

    for(let p = 1; p <= m ; p++){
        document.write("*")
    }

    document.write("<br>")

}
