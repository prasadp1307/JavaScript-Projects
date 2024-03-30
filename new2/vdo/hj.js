// var birthday = new Date(1997,0,15,11,15,25)
// console.log(birthday.getmonth())


function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission
  
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    const user = { // Create an object to store user data
      username,
      email,
      phone,
    };
  
    // Retrieve existing users from local storage (or create an empty array)
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    // Add new user to the array
    storedUsers.push(user);
  
    // Store updated user data in local storage
    localStorage.setItem("users", JSON.stringify(storedUsers));
  
    // Clear form fields
    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
  
    displayUsers(); // Call function to display updated user list
  }
  
  function displayUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Clear existing list items
  
    // Retrieve all user data from local storage (previously stored array)
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    storedUsers.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${user.username} - ${user.email} - ${user.phone}`;
      userList.appendChild(listItem);
    });

  function removeData = (index)=>{
    let userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
    userData.splice(index,1)
    console.log(userData)
  }  
  }
  
  // Display existing users on page load
  window.onload = displayUsers;
