//  || - ИЛИ
//  && - И

// alert(true || true)     //true
// alert(false || true)    //true
// alert(true || false)    //true
// alert(false || false)   //false

// if (null || 0){ //false
//     alert("ДА")
// }


// let hour = 11;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend){
//     alert("Офис закрыт")
// }
// //Офис открыт

// let value1 = 10;
// let value2 = 1;
// let value3 = 2;

// let result = value1 || value2 || value3;

// alert(1 || 0) //1
// alert(true || "какая-то дичь") //true
// alert(null || 1) //1
// alert(null || 0 ) //0
// alert(null || 0 || 1) //1
// alert(null || 0 || undefined || " ") // " "

// let isCheckAmin = true
// !isCheckAmin || alert("Привет админ") 

// let username = "";
// let createUserName = "User";

// username ||= createUserName;

// && - И

// alert(true && true)     //true
// alert(false && true)    //false
// alert(true && false)    //false
// alert(false && false)   //false

if (1 && 0){ //false
    alert("Выводится?")
}


// let value1 = 10;
// let value2 = 1;
// let value3 = 2;

// let result = 10;
// result = value1 && value2 && value3;
// alert(result) //2

// let value1 = 10;
// let value2 = 1;
// let value3 = 0;
// let value4 = 2;
// let value5 = -1;
// let result;
// result = value1 && value2 || value3 && value4 || value5;
// alert(result)


// let value1 = null;
// let value2 = 1;
// let value3 = 0;
// let value4 = 2;
// let value5 = -1;
// let result;
// result = value1 && value2 || value3 && value4 || value5;
// alert(result)

// let username = "Levi";
// let createUserName = "User";

// username &&= createUserName;
// alert(username)

// alert(1 && 0) //0
// alert(1 && 5) //5
// alert(11 && undefined && 1) //undefined

// alert(null && 5) //null
// alert(undefined && "Привет") //undefined
// alert(0 && 1000 && "Привет") //0
