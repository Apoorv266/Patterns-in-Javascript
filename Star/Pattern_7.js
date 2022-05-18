//     *        
//    * *      
//   *   *    
//  *     *  
// *       *


for(let r = 1; r <= 5; r++){
    for (j = 5; j > r; j--)                       // first decending space pattern
    document.write("&nbsp;&nbsp;");
    for(let c = 1; c < r*2 ; c++){                // then ascending star pattern
    document.write("*")
}
    document.write("<br>")
}


//..................................................................................


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





// WE DID THIS QUESTION IN THREE PARTS BY DIVIDING IT INTO 3 TRIANGLES 


// fIRST DECENDING TRIANGLE 
// MIDDLE ASSENDING TRIANGLE OF SPACES
// END DECENDING TRIANGLE

