// const accountId = 123456
// let accountEmail = pdp@gmail.com
// var accountPassword = "123"
// accountCity = "Jaipur"

// console.log(accountId);

// // Conversion Operation
// let score = 33;
// console.log(typeof(score))


const myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("demo").innerHTML = "Happy Birthday!"
}

function myStopFunction() {
  clearTimeout(myTimeout);
}