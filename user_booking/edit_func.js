var userList = document.createElement("ul");
userList.setAttribute("id", "list-of-items");
document.body.appendChild(userList);

function handleFormSubmit(event) {
  event.preventDefault();

  var form = event.target; // Get the form element
  var name = form.username.value;
  var email = form.email.value;
  var phone = form.phone.value;

  var obj = {
    name,
    email,
    phone,
  };

  localStorage.setItem(email, JSON.stringify(obj));
  showUsersOnScreen(obj); // Pass the created object for display

  // Clear form fields
  form.username.value = "";
  form.email.value = "";
  form.phone.value = "";
}

function showUsersOnScreen(obj) {
  var parentElement = document.getElementById("list-of-items");

  var listItem = document.createElement("li");
  listItem.textContent = `${obj.name} - ${obj.email} - ${obj.phone}`;

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function() {
    localStorage.removeItem(obj.email);
    parentElement.removeChild(listItem);
  };

  var editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = function() {
    // Remove existing user data with email key
    localStorage.removeItem(obj.email);

    // Remove list item from the screen
    parentElement.removeChild(listItem);

    // Pre-fill the form fields with the object's data
    document.getElementById("username").value = obj.name;
    document.getElementById("email").value = obj.email;
    document.getElementById("phone").value = obj.phone;
  };

  listItem.appendChild(deleteButton);
  listItem.appendChild(editButton);
  parentElement.appendChild(listItem);
}
