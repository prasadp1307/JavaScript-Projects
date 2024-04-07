var userList = document.createElement("ul");


userList.setAttribute("id", "list-of-items");


document.body.appendChild(userList);


function handleFormSubmit(event) {

  event.preventDefault();


  var name = event.target.username.value;
  var email = event.target.email.value;
  var phone = event.target.phone.value;


  var obj = {
    name,
    email,
    phone
  };


  localStorage.setItem(email, JSON.stringify(obj));


  showUsersOnScreen(obj);
}


function showUsersOnScreen(obj) {
  var parentElement = document.getElementById("list-of-items");


  var listItem = document.createElement("li");
  listItem.textContent = ${obj.name} - ${obj.email} - ${obj.phone};


  var deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";


  deleteButton.onclick = function() {
    localStorage.removeItem(obj.email);
    parentElement.removeChild(listItem);
  };


  listItem.appendChild(deleteButton);


  parentElement.appendChild(listItem);
}

// module.exports = handleFormSubmit
// _________________________________________________________________


var userList = document.createElement("ul");


userList.setAttribute("id", "list-of-items");


document.body.appendChild(userList);


function handleFormSubmit(event) {

  event.preventDefault();


  var name = event.target.username.value;
  var email = event.target.email.value;
  var phone = event.target.phone.value;


  var obj = {
    name,
    email,
    phone
  };


  localStorage.setItem(email, JSON.stringify(obj));


  showUsersOnScreen(obj);
}


function showUsersOnScreen(obj) {
  var parentElement = document.getElementById("list-of-items");


  var listItem = document.createElement("li");
  listItem.textContent = ${obj.name} - ${obj.email} - ${obj.phone};


  var deleteButton = document.createElement("input");
  deleteButton.type = "button";
  deleteButton.value = "Delete";


  deleteButton.onclick = function() {
    localStorage.removeItem(obj.email);
    parentElement.removeChild(listItem);
  };


  listItem.appendChild(deleteButton);


  parentElement.appendChild(listItem);
}

module.exports = handleFormSubmit