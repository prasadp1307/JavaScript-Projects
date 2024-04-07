// 1. Create a function called "buyBike" which prints "Bought Royal Enfield Himalayan" after 2 seconds.

// 2. Create a function called "planTrip" which prints "Trip to Ladakh planned" after 1 seconds.

// 3. Make sure that "Bought Royal Enfield Himalayan" is printed before "Trip to Ladakh planned" because there is no point in planning the trip if you do not have this bike.

// function buyBike(callback) {
//     console.log("Bought Royal Enfield Himalayan")
//     setTimeout(function () {
//         callback();
//     }, 2000)
// }


// function planTrip(callback) {
//     setTimeout(function () {
//         console.log("Trip to Ladakh planned")
//         callback();
//     }, 1000)
// }

// function getJOB(callback) {
//     console.log("Get the job ASAP")
//     setTimeout(function () {
//         callback();
//     }, 3000)
// }



// getJOB(function (){
//     buyBike(function (){
//         planTrip(function (){
//             console.log("All tasks completed")
//         })
//     })
// // })


// getJOB()
//     .then(buyBike)
//     .then(planTrip)



function buyBike(callback1, callback2, callback3) {

    setTimeout(function () {
   
     console.log("Bought Royal Enfield Himalayan");
   
     callback1(callback2, callback3);
   
    }, 2000);
   
   }
   
   
   
   function planTrip(callback1, callback2) {
   
    setTimeout(function () {
   
     console.log("Trip to Ladakh planned");
   
     callback1(callback2);
   
    }, 1000);
   
   }
   
   
   
   function reachLadakh(callback) {
   
    setTimeout(function () {
   
     console.log("Reached Ladakh");
   
     callback();
   
    }, 1000);
   
   }
   
   
   
   function visitPangongLake() {
   
    setTimeout(function () {
   
     console.log("Visited Pangong Lake");
   
    }, 500);
   
   }
   
   
   
   buyBike(planTrip, reachLadakh, visitPangongLake);






// setTimeout(function(buyBike){
//     console.log("Bought Royal Himalayan")
// },2000)

// setTimeout(function(planTrip){
//     console.log("Trip to Ladakh planned")
// },1000)

// planTrip()
//     .then(buyBike)


