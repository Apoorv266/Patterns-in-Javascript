//      *        
//     * *      
//    *   *    
//   *     *  
//  *       *
//   *     *  
//    *   *    
//     * *      
//      *


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
        document.write("&nbsp;&nbsp;")
    }

    for (let n = 2; n <= 5; n++) {
        if (n === i) {
            document.write("*")
        }

        else {
            document.write("&nbsp;&nbsp;")
        }
    }


    document.write("<br>")
}

// bottom triangle
for (let r = 1; r <= 5; r++) {

    for (let c = 1; c <= r; c++) {
        if (c === r) {
            document.write("*")
        }

        else {
            document.write("&nbsp;&nbsp;")
        }
    }

    for(let k = r; k < 5; k ++){
        document.write("&nbsp;&nbsp;")
    }

    for (let j = r ; j < 5; j++){
          
        if(j === 4){
            document.write("*")  
        }
        else{
            document.write("&nbsp;&nbsp;")
        }
    }

    document.write("<br>")
}