let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString('en-IN'));

console.log((typeof myDate));

// let newDate = new Date(2023, 0, 23)
let newDate = new Date("2023-01-14")
let nd1 = new Date("01-14-2025")
console.log((newDate.toDateString()));

let mtTimeStamp = Date.now()
console.log(nd1.getTime());


console.log(Math.floor(((Date.now()/1000)/60))/60);

let nd2 = new Date()
console.log(nd2.getMonth() + 1);
console.log(nd2.getDay());
console.log(nd2.getDate());










