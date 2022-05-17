// *********
//  *******
//   *****
//    ***
//     *


for(let r = 5; r >= 1; r--){
    for (let s = 5; s > r ; s-- )
    document.write("&nbsp;&nbsp;")
    for(let c = 1; c < r * 2; c++){
        document.write("*")
    }
    document.write("<br>")
}