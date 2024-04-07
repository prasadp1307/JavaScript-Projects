const projectorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const Projector = Math.random > 0.5
        if(Projector){
            resolve("Projector rented successfully")
        }
        else{
            reject("Error: Projector out of stock")
            }
        
    },1000)
});

const pizzasPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const Pizza = Math.random > 0.5
        if(Pizza){
            resolve("Pizzas delivered at time")
        }
        else{
            reject("Error: Pizzas not delivered on time")
        }
    },2000)
});

const friendsPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const Friend = Math.random > 0.5
        if(Friend){
            resolve("Both friends availble")
        }else{
            reject("Error: Both friends not availble")
        }
    },3000)
});

Promise.all([projectorPromise,pizzasPromise,friendsPromise])
    .then((result) => console.log(result))
    .catch((err) => console.log(err))








































// function checkWeather() {
//     return new Promise((resolve,reject) => {
//       setTimeout(function (){
//         const weather = Math.random() > 0.5;
//         if(weather){
//           resolve("Let us go for picnic")
//         }else{
//           reject("Error: It is cloudy")
//         }
//       },3000)
//     })
//   }

// function checkCar(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(function (){
//             const carCheck = Math.random() > 0.5;
//             if(carCheck){
//                 resolve("Car is ready")
//             }else{
//                 reject("Error: Car needs maintenance")
//             }
//         },2000)
//     })
// }
 

// function packForPicnic(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(function (){
//             const picnic = Math.random() > 0.5;
//             if(picnic){
//                 resolve("Packed everything for picnic")
//             }else{
//                 reject("Error: Not have some essentials")
//             }
//         },1000)
//     })
// }

// checkCar()
//     .then((carMSG) => {
//         console.log(carMSG);
//         return packForPicnic();
//     })
//     .then((picnicMSG) => {
//         console.log(picnicMSG)
//         console.log("Go for picnic")
//     })
//     .catch((err) =>{
//         console.log(err)
//         console.log("Picnic cancelled")
//     })



// function orderFood(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let foodDelivered = false;
//             if(foodDelivered){
//                 resolve("Food delivered")
//             }else{
//                 reject("Food not delivered")
//             }
//         },2000)
//     })
// }

// function orderDesert(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             let desertDelivered = false;
//             if(desertDelivered){
//                 resolve("Desert delivered")
//             }else{
//                 reject("Desert not delivered")
//             }
//         },2000)
//     })
// }

// orderFood()
// .then((foodMsg) => {
//     console.log(foodMsg)
//     return orderDesert()
//         })
// .then((desertMsg)=>{
//     console.log(desertMsg)
//     console.log("Dream Meal fulfilled")
// })        
// .catch((err) => {
//     console.log(err)
//     console.log("Dream Meal Failure")
// })
























// function boilWater(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Water boiled")
//         },2000)
//     })
// }

// function addCoffeePowder(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Added coffee powder")
//         },500)
//     })
// }

// function brewCoffee(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Brewed coffee")
//         },1000)
//     })
// }

// function haveCoffee(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Enjoying my coffee")
//         },3000)
//     })
// }

// boilWater()
//     .then(function (result){
//         console.log(result);
//         return addCoffeePowder()
//     })
//     .then(function (result){
//         console.log(result);
//         return brewCoffee()
//     })
//     .then(function (result){
//         console.log(result);
//         return haveCoffee()
//     })
//     .then(function (result){
//         console.log(result)
//     })
//     .catch(function (error){
//         console.log(error)
//     })

