function sayHello(){
    console.log("Hello");
    
}

// sayHello()


// function addNum(num1, num2){
//     console.log(num1 + num2)
// }

function addNum(num1, num2){
    let result = num1 + num2
    return result
}

const res = addNum(1,2)
console.log(res);


// function loginUserMessage(username) {
//     if(username === undefined){
//         console.log("please enter username")
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "Test") { //now if is never checked, since username has default value
    if(!username){
        console.log("please enter username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("Kunal"));
console.log(loginUserMessage());



function calculateCartPrice(...num1){
    return num1
} //here ... is rest instead of spred

console.log(calculateCartPrice(200,400,500,2000));

function calculateCartPrice1(val1,val2,...num1){
    return num1
} 

console.log(calculateCartPrice1(200,400,500,2000));


user = {
    username : "KD",
    price : 2000
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

handleObject(user)

const newArr = [200,400,500]

function returnSecond(getArray){
    return getArray[1]
}
console.log(returnSecond(newArr));

