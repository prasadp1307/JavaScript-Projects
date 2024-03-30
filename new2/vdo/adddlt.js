// const form = document.querySelector('form');
// const fruits = document.querySelector('.fruits');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();

// // selected the input element
//     const fruitToadd = document.getElementById('fruit-to-add');

// // create the li    
//     const newLi = document.createElement('li');
//     // newLi.innerHTML = fruitToadd.value + '<button class="delete-btn">x</button></li>'
//     const newliTxt = document.createTextNode(fruitToadd.value);
//     newLi.appendChild(newliTxt)
//     newLi.className = 'fruit'

// //create a delete button to be added inside li 
//     const deleteBtn = document.createElement('button')
//     const deleteBtnTxT = document.createTextNode('x')
//     deleteBtn.appendChild(deleteBtnTxT)
//     deleteBtn.className = 'delete-btn'
//     newLi.appendChild(deleteBtn)


// //Create an edit button 
// const editBtn = document.createElement('button')
// const editBtnTXT = document.createTextNode('Edit')
// editBtn.appendChild(editBtnTXT)
// editBtn.className = 'edit-btn'
// newLi.appendChild(editBtn) 

// //adding li as the last element of unordered list
//     fruits.appendChild(newLi)
// })

// fruits.addEventListener('click',function(event){
//     if(event.target.classList.contains('delete-btn'))
//     {
//         const fruitToDelete = event.target.parentElement
//         fruits.removeChild(fruitToDelete)
//     }
// })

// fruits.addEventListener('click',function (event){
//     if(event.target.classList.contains('edit-bt'))
//     {
//         const fruitToEdit = event.target.parentElement
//         fruits.appendChild(fruitToEdit)
//     }
// })



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