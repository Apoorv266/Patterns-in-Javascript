// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2 
// 1

for (r = 5; r >= 1 ; r--){           // prints a row a number of times
    for(c = 1; c <= r; c++){         // prints columns in a row a number of times
        document.write(c)
    }
    document.write("<br>")
}