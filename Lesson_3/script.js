let arr = [1,2,3]
let mas = arr;

mas[0] = 0;

alert(arr) // 0,2,3

for(i in mas){
    console.log(i) //0,2,3
}

mas.forEach((item,index,array)=>{
    console.log(`${index} = ${item}`)
    console.log(array)
})