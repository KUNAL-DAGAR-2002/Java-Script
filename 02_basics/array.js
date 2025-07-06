// // const myArr = [0,1,2,3,4,true,"KD"]

// const myArr = [0,1,2,3,4,5]

// // Array resizeable, can store multiple elements
// // 0 based index
// // Make shallow copy, -> SAME reference point (Heap memory)

// const newArr = new Array(1,2,3,4)

// console.log(myArr[0]);

// myArr.push(6)
// console.log(myArr);

// myArr.pop() // last ele

// myArr.unshift(9)
// console.log(myArr);

// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));


// const newArr1 = myArr.join()
// console.log(newArr1);
// console.log(typeof newArr1);


// console.log(`A ${myArr}`)
// console.log(`res ${myArr.slice(0,4)}`);
// console.log(`B ${myArr}`);
// console.log(`res1 ${myArr.splice(0,4)}`);
// console.log(`C ${myArr}`);


let alpha = ['a','b','c','d','e']
let beta = ['f','g','h']

// alpha.push(beta)

console.log(alpha);

delta = alpha.concat(beta) //return new array
console.log(delta)

let all_ele = [...alpha, ...beta] //spread operator
console.log(all_ele);

let new_ele = [1,[2,3,[4,5,6]]].flat(Infinity)
console.log(new_ele);


console.log(Array.isArray("KD"))
console.log(Array.from("KD"));

console.log(Array.from({name:"KD"})); //from keys or val return empty as of now

let one = 100
let two = 200
let three = 300
console.log(Array.of(one, two, three));




