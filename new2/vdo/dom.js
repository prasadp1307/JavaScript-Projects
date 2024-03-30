//DOM by getElementById

const header = document.getElementById('header');
header.style.backgroundColor = "Green"
header.style.borderBottom = "3px solid orange"

const mainheading = document.getElementById('main-heading')
mainheading.textContent = "Fruit World"

const mainheadingclr = document.getElementById('main-heading')
mainheadingclr.style.color = "orange"

const basketheading = document.getElementById('basket-heading')
basketheading.style.color = "green"

const thanks = document.getElementById("thanks")
thanks.innerHTML = '<p>Please visit us again</p>'

// DOM by getElementsByClassName
const fruit = document.getElementsByClassName('fruit')
fruit[2].style.backgroundColor = "yellow"

for(let i=0;i<fruit.length;i++)
{
    fruit[i].style.fontWeight = "bold"
}


// DOM by getElementsByTagName
const items = document.getElementsByTagName('li')
items[3].style.color = "blue"

for(let i=0;i<items.length;i++)
{
    items[i].style.fontStyle = "italic"
}

// QuerySelector is used to grab only single element
const mainheading = document.querySelector('#basket-heading')
mainheading.style.color = "brown";

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.borderRadius = '5px'
fruits.style.width = '50%'
fruits.style.margin = '30px'
fruits.style.listStyleType ='none'

const basketheading = document.querySelector('h2')
basketheading.style.marginLeft = '30px'

const fruitItems = document.querySelector('.fruit:nth-ChannelSplitterNode(3)')
fruitItems.style.backgroundColor = "white"

// QuerySelector is used to grab all the element with same class/tag 
const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'grey';
fruits.style.padding = '30px';
fruits.style.borderRadius = '5px'
fruits.style.width = '50%'
fruits.style.margin = '30px'
fruits.style.listStyleType ='none'

const evenFruitItems = document.querySelectorAll('.fruit:nth-child(even)')
for(var i=0;i<evenFruitItems.length;i++)
{
    evenFruitItems[i].style.backgroundColor = 'red'
}


//Create element 
const para = document.createElement('p')

// Create textNode
const paraText = document.createTextNode('Total Fruits: 4')

// Create appendChild
para.appendChild(paraText);
const divs = document.getElementsByTagName('div')
const secondDiv = divs[1]
secondDiv.appendChild(para)


// insertBefore
const fruits = document.querySelector('.fruits')
const basketheading = document.getElementById("basket-heading")

secondDiv.insertBefore(para,basketheading)
// setattribute,id,classname
para.className = 'fruitCount'
para.id = 'fruitsTotal';
para.setAttribute('tittle','fruitsTotal')



const ul = document.querySelector('.fruits');
ul.style.backgroundColor = 'pink';


const subHeading = document.createElement('h3')
const subHeadingTxt = document.createTextNode('"Buy high quality organic fruits online"')
subHeadingTxt.appendChild(subHeadingTxt)