// 100000
// 10000
// 100
// 10
// 1
// 10
// 100
// 1000
// 100000

let no = 100000
// console.log(no / 10)

console.log(no)
for (let i = 1; i <= 5 ; i++ ){
    let no2 = no / 10
    no = no2
    console.log(no2)
}

for (let i = 1; i <= 5 ; i++ ){
    let no2 = no * 10
    no = no2
    console.log(no2)
}



