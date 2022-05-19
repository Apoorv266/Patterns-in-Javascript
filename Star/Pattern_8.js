// *       *
//  *     *  
//   *   *    
//    * *      
//     * 

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