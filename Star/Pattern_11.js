// **********
// ****  ****
// ***    ***
// **      **
// *        *
// **      **
// ***    ***
// ****  ****
// **********


// we have divided the triangle in two parts----one upper triangle and one lower triangle
// those 2 triangles are further divided into variable ascending and descending triangles

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
for (let m = 2 ; m <= 5; m++){  // one row has to be reduced to started with 2

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
