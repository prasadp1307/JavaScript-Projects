// //callbacks & promises

// // function waitforthreesecond(){
// //     let ms = 3000 + new Date().getTime();
// //     while(new Date() < ms ){}
// // }



// function register(callback) {
//     setTimeout(() => {
//         console.log('Register end')
//         callback()
//     }, 3000)

// }

// function sendEmail(callback) {
//     setTimeout(() => {
//         console.log('Email end')
//         callback();
//     }, 2000)

// }

// function login(callback) {
//     setTimeout(() => {
//         console.log("login end")
//         callback();
//     }, 3000)

// }

// function getUserData(callback) {
//     setTimeout(() => {
//         console.log('Get user data')
//         callback()
//     }, 3000)

// }

// function displayUserData() {
//     console.log("User data Display")
// }


// //callback hell
// register(function () {
//     sendEmail(function () {

//         login(function () {

//             getUserData(function () {

//                 displayUserData()
//             })
//         })
//     })
// })


// console.log('other application work')