// // // singleton

// // // object literals
// // // Object.create() constructor method -> singlton

// // const mysym = Symbol("key1")

// // const user = {
// //     name:"Kunal",
// //     "full Name" : "Kunal Dagar",
// //     //mysym : "myKey1",// treating as string
// //     [mysym] : "mykey1",
// //     age:20,
// //     location:"Delhi",
// //     isLoggenIn :false,
// //     lastLoginDays : ["Monday"],
    
// // }

// // console.log(user.name)
// // console.log(user["full Name"])
// // console.log(typeof user.mysym);

// // console.log(user[mysym]);

// // user.location = "New Delhi"
// // //Object.freeze(user)

// // user.location = "Nai Delhi"
// // console.log(user.location);

// // //functions are treated as variables

// // user.greeting = function(){
// //     console.log("Greeting");
// // }

// // user.greeting2 = function(){
// //     console.log(`Greeting ${this.name}`);
// // }

// // console.log(user.greeting2());



// // const tinderUser = new Object() -> singleton

// const tinderUser = {}
// tinderUser.id = "12345"
// tinderUser.name = "Tony"
// tinderUser.isLoggenin = false

// const regularUser = {
//     email : "somemail@.com",
//     fullName :{
//         userFullName : {
//             firstName : "Kunal",
//             lastName : "Dagar"
//         }
//     }
// }

// const ob1 = {1:"a", 2:"b"}
// const ob2 = {3:"a",4:"b"}

// const ob3 = Object.assign({},ob1,ob2);

// const ob4 = {...ob1, ...ob2};


// const user2 = [
//    {
//     id : 1,
//     name : "b"
//    },

//    {
//     id : 2,
//     name : "c"
//    }
// ]


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('name'));



// console.log(regularUser.fullName.userFullName.firstName)
// console.log(ob4);

const course = {
    courseName : "JS Course",
    price : "0",
    courseInstructor : "KD"
}

const {courseInstructor : ins} = course //destructure object
console.log(ins);

// API

// {
//     "name" : "KD",
//     "courseName" : "js in hindi",
//     "price" : "free"                 //JSON FORMAT
// }






