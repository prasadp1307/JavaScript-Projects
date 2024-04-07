//callbacks & promises

// function waitforthreesecond(){
//     let ms = 3000 + new Date().getTime();
//     while(new Date() < ms ){}
// }



function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Register end');
            resolve('Success');
        }, 2000);
    });

}

function sendEmail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // return reject("Error while sendingEmail")
            console.log('Email end')
            resolve()
        }, 2000)
    })


}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login end")
            resolve()
        }, 3000)
    })
}

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Get user data')
            resolve()
        }, 3000)
    })

}

function displayUserData() {
    console.log("User data Display")
}


//callback hell
// register(function () {
//     sendEmail(function () {

//         login(function () {

//             getUserData(function () {

//                 displayUserData()
//             })
//         })
//     })
// })


// register()
//     .then(sendEmail)
//     .then(login)
//     .then(getUserData)
//     .then(displayUserData)
//     .catch((err) => {
//         console.log('Error',err)
//     })


//Async await
async function authenticate() {
    try {
        const msg = await register();
        await sendEmail();
        await login();
        await getUserData();
        await displayUserData();
        console.log(msg)
    } 
    catch (err) {
        console.log(err)
    } 
}

authenticate()

console.log('other application work')


// // Promise
// function concertPassPromise() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const passReceived = Math.random() > 0.5;
//         if (passReceived) {
//           resolve("Pass received");
//         } else {
//           reject("Pass not received");
//         }
//       }, 3000);
//     });
//   }
  
//   concertPassPromise()
//     .then((result) => {
//       console.log(result); // Use the resolved message here
//     })
//     .catch((error) => {
//       console.log(error); // Use the rejected message here
//     });
  