// Print pattern 

// *
// **
// ***
// ****
// *****

// upward traingle is printed

for (r = 1; r <= 5; r++) {
    console.log("r :" , r)
    for (c = 1; c <= r; c++) {
        console.log("c :" , c)
        document.write("*")
    }
    document.write("<br>");
    console.log("------")
}
