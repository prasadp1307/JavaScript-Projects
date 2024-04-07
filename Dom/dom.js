// // Get Element by ID
// const heading = document.getElementById("heading")
// console.log(heading)

// // Get element by TAGName
// const heading1 = document.getElementsByTagName("h1")
// console.log(heading1)

// // Get element by className
// const heading2 = document.getElementsByClassName("heading")
// console.log(heading2)

// // QuerySelector
// const head = document.querySelector(".heading")
// console.log(head)

// // QuerySelectorAll
// const h1 = document.querySelectorAll(".heading")
// console.log(h1)

// // traverse DOM
// // Parent NODE
// const h3 = document.querySelector(".heading");
// const parent = h3.parentNode;
// console.log(parent);

// // ChildNOde
// const parent1 = document.querySelector('.heading')
// console.log(parent1.childNodes)


// // // NxtElement Sibling
// const sib = document.querySelector('.heading');
// console.log(sib.nextElementSibling);

// // previous Element sibling
// const sib1 = document.querySelector('h3');
// console.log(sib1.previousElementSibling);

// // manipulation 
// const h4 = document.querySelector(".heading")
// h4.innerHTML = "Web dev is awesome"
// h4.style.color = "red"
// h4.style.fontSize = "100px"
// h4.classList.add('tittle')
// h4.classList.remove('heading')

// // create elements
// const mainHead = document.createElement("h1");
// mainHead.innerHTML = "javascript is awesome";
// const pa = document.querySelector(".parent")
// pa.appendChild(mainHead)
// console.log(mainHead)

// const subHeading = document.createElement('h3')
// subHeading.innerHTML = "web is dev is awesome!"
// h4.insertAdjacentElement("beforebegin",subHeading)


// DOM EVENTS
const button = document.querySelector("#btn")
const heading = document.querySelector("#heading")

button.addEventListener('click',function (event){
    heading.style.color = 'purple'
    heading.style.fontSize = "75px";
    console.log("Button clicked",event)
})

