let name = "Kunal"
let repCount = 100

console.log(`Hey I am ${name}, repCount is ${repCount}`);

let newName = new String("Kunal-kd-one")

console.log(newName[0])

console.log(newName.__proto__)

console.log(newName.toUpperCase());

console.log(newName.charAt(2));

console.log(newName.indexOf('K'));


const newStr = newName.substring(0,5)
console.log(newStr);

const anotherStr = newName.slice(-6,4)
console.log(anotherStr);

let newStingOne ="    kunal    "
console.log(newStingOne.trim());

let url = "https://kd.com/kd%20kd"

console.log(url.replace("%20","-"))

console.log(url.includes('kd'));

console.log(newName.split('-'))
