
function displayBookings() {
    const bookingList = document.getElementById("userList");


    bookingList.innerHTML = "";


    axios.get("https://crudcrud.com/api/2ab99c62f1f546b5b58a6ee0379565ab/bookingpost")
    .then((response) => {
        const bookings = response.data;

        bookings.forEach((booking) => {
            const listItem = document.createElement("li");
            listItem.textContent = `Name: ${booking.username}, Email: ${booking.email}, Phone: ${booking.phone}, Bus Number: ${booking.busnumber}`;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                deleteUser(booking._id); 
                bookingList.removeChild(listItem); 
            });

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.type = "button"; 
            editButton.addEventListener("click", function () {
                
                document.getElementById("username").value = booking.username;
                document.getElementById("email").value = booking.email;
                document.getElementById("phone").value = booking.phone;
                document.getElementById("busnumber").value = booking.busnumber;
            });

            listItem.appendChild(deleteButton);
            listItem.appendChild(editButton);
            bookingList.appendChild(listItem);
        });
    })
    .catch((error) => {
        console.error("Error fetching bookings:", error);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const busNumber = document.getElementById("busnumber").value;

    const userDetails = {
        username: username,
        email: email,
        phone: phone,
        busnumber: busNumber
    };

    axios.get("https://crudcrud.com/api/2ab99c62f1f546b5b58a6ee0379565ab/bookingpost")
    .then((response) => {
        const bookings = response.data;
        const existingUserIndex = bookings.findIndex((booking) => booking.username === username);

        if (existingUserIndex !== -1) {

            const existingUserId = bookings[existingUserIndex]._id;
            axios.put(`https://crudcrud.com/api/2ab99c62f1f546b5b58a6ee0379565ab/bookingpost/${existingUserId}`, userDetails)
            .then((response) => {
                console.log("User details updated on server:", response.data);
                displayBookings();
            })
            .catch((error) => {
                console.error("Error updating user details on server:", error);
            });
        } else {
            
            axios.post("https://crudcrud.com/api/2ab99c62f1f546b5b58a6ee0379565ab/bookingpost", userDetails)
            .then((response) => {
                console.log("User details sent to server:", response.data);
                displayBookings(); 
            })
            .catch((error) => {
                console.error("Error sending user details to server:", error);
            });
        }
    })
    .catch((error) => {
        console.error("Error fetching existing bookings:", error);
    });

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("busnumber").value = "";
}

function deleteUser(userId) {
    axios.delete(`https://crudcrud.com/api/2ab99c62f1f546b5b58a6ee0379565ab/bookingpost/${userId}`)
    .then((response) => {
        console.log("User deleted successfully from server.");
    })
    .catch((error) => {
        console.error("Error deleting user from server:", error);
    });
}

displayBookings();



