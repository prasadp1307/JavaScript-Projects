const form = document.querySelector('form')
const obj = JSON.parse(localStorage(getItem("form")))

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const obj = Object.fromEntries(fd)
    
    const json = JSON.stringify(obj);
    localStorage.setItem('form',json);
})


var testObject = { 'name': username, 'phone': number, 'email': mail };
console.log('typeof testObject: ' + typeof testObject);
console.log('testObject properties:');
for (var prop in testObject) {
    console.log('  ' + prop + ': ' + testObject[prop]);
}

// Put the object into storage
localStorage.setItem('testObject', testObject);

// Retrieve the object from storage
var retrievedObject = localStorage.getItem('testObject');

console.log('typeof retrievedObject: ' + typeof retrievedObject);
console.log('Value of retrievedObject: ' + retrievedObject);