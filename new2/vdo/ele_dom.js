// Write your code below:
const subheading = document.createElement('h3')
const subTxt = document.createTextNode("Buy high quality organic fruits online")
subheading.appendChild(subTxt)
subheading.style.fontStyle = 'italic'

const divqs = document.getElementsByTagName('div')
const firstDiv = divqs[0];
firstDiv.appendChild(subheading)



const para = document.createElement('p')
const paraTxt = document.createTextNode("Total fruits: 4")
para.appendChild(paraTxt)

const divs = document.getElementsByTagName('div')
const secondDiv = divs[1];
secondDiv.appendChild(para)
para.id = "fruits-total"