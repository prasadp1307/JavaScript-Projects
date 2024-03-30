// const discriptionToAddInput = document.createElement('input')
// discriptionToAddInput.setAttribute('type','text')
// descriptionToAddInput.setAttribute('id', 'description-to-add');
// descriptionToAddInput.setAttribute('name', 'description');
// descriptionToAddInput.setAttribute('placeholder', 'Fruit Description');
// var addFruitForm = document.getElementById('yourFormId'); // Replace 'yourFormId' with the actual ID of your form
// addFruitForm.insertBefore(descriptionToAddInput, addFruitForm.lastElementChild);



// const disc = document.getElementById('input')
// const discTxt = document.createTextNode("Farm Fresh & Licious")
// disc.appendChild(disc)


// // const para = document.createElement('p')
// // const paraTxt = document.createTextNode("Total fruits: 4")
// // para.appendChild(paraTxt)

// // const divs = document.getElementsByTagName('div')
// // const secondDiv = divs[1];
// // secondDiv.appendChild(para)
// // para.id = "fruits-total";





// const filter = document.getElementById('filter')

// filter.addEventListener('keyup',function(event){
//     const textentered = event.target.value.toLowerCase();
//     const fruitItems = document.getElementsByClassName('fruit')

//     for(let i = 0;i<fruitItems.length;i++)
//     {
//         const currentFruit = fruitItems[i].firstChild.textContent.toLowerCase();
//         if(currentFruit.indexOf(textentered) === -1)
//         {
//             fruitItems[i].style.display = "none" 
//          } else{
//                 fruitItems[i].style.display = "flex"
//         }
//     }
// })



// const descriptionToAddInput = document.getElementById('description-to-add')
// const descriptionToAdd = descriptionToAddInput.value;

// var descriptionParagraph = document.createElement('p')


// const descriptionToInput = 



document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('form');
    const button = document.querySelector('button');
    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute('type', 'text');
    descriptionInput.setAttribute('placeholder', 'Enter fruit description');
    descriptionInput.setAttribute('id', 'description');
    form.insertBefore(descriptionInput, button);

    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const fruitName = document.querySelector('#fruit-to-add').value;
        const fruitDescription = document.querySelector('#description').value;
        const fruitList = document.querySelector('.fruits');
        const fruitItem = document.createElement('li');
        fruitItem.classList.add('fruit');
        
    
        const nameElement = document.createElement('span');
        nameElement.textContent = fruitName;
        
        const descriptionElement = document.createElement('p');
        const italicElement = document.createElement('em');
        italicElement.textContent = fruitDescription;
        descriptionElement.appendChild(italicElement);
        
    
        fruitItem.appendChild(nameElement);
        fruitItem.appendChild(descriptionElement);
        
    
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.classList.add('delete-btn');
        fruitItem.appendChild(deleteButton);
        
    
        fruitList.appendChild(fruitItem);

    
        italicElement.style.fontStyle = "italic";
    });

    
    var filter = document.getElementById("filter");

    filter.addEventListener("keyup", function(event) {
        var textEntered = event.target.value.toLowerCase();
      
        var fruitItems = document.getElementsByClassName("fruit");
      
        for (var i = 0; i < fruitItems.length; i++) {
            var currentFruitText = fruitItems[i].textContent.toLowerCase();
            
            if (currentFruitText.indexOf(textEntered) === -1) {
                fruitItems[i].style.display = "none";
            } else {
                fruitItems[i].style.display = "flex";
            }
        }
    });
});