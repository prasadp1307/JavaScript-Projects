var userList = document.createElement("ul")

userList.setAttribute("id","list-of-items")
document.body.appendChild(userList)

function handleFormSubmit(event){
    event.preventDefault();

    var name = event.target.username.value;
    var email = event.target.email.value;
    var phone = event.target.phone.value;

    var obj = {
        name,
        email,
        phone
    };
    
    localStorage.setItem(name,JSON.stringify(obj));
    showUsersOnScreen(obj)
    
}
function showUsersOnScreen(obj){
    var parentElement = document.getElementById("list-of-items");
    var listItem = document.createElement("li")

    var deleteButton = document.createElement("input");
    deleteButton.type = "button";
    deleteButton.value = "Delete";
    
  
    deleteButton.onclick = function() {
      localStorage.removeItem(obj.email);
      parentElement.removeChild(listItem);
      displayData()
    };
  
    listItem.textContent = `${obj.name} - ${obj.email} - ${obj.phone}`;
    listItem.appendChild(deleteButton);

    parentElement.appendChild(listItem);
  }
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
   


}
