let form = document.querySelector('form');
let main = document.querySelector('.main');

form.addEventListener('submit',(event) => {  
    event.preventDefault();
    let name = event.target.username.value;
    let email = event.target.email.value;
    let phone = event.target.phone.value;

    var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    userData.push({
        'name': name,
        'email': email,
        'phone': phone
    })

    localStorage.setItem("userDetails",JSON.stringify(userData))
    event.target.reset();
    displayData();
    // console.log(userData);
    event.preventDefault();
})
let displayData=()=>{
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    let finalData = '';

    userData.forEach((element,i) => {
       console.log(element.name)
        finalData+= `<div class="items">
        <span onclick='removeData(${i})'>&times;</span>

        <h5>Name</h5>
        <div>${element.name}</div>

        <h5>Email</h5>
        <div>${element.email}</div>

        <h5>Phone</h5>
        <div>${element.phone}</div>
    </div>`

    });

    main.innerHTML = finalData;
}
function showUser
const childEle = document.getElementById('listOfitem')



}
displayData();

