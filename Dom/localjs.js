document.addEventListener("DOMContentLoaded", function() {
    const userForm = document.getElementById("userForm");
    const userList = document.getElementById("userList");

    userForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        // Check if username, email, and phone are not empty
        if (username.trim() && email.trim() && phone.trim()) {
            const userDetails = {
                username: username,
                email: email,
                phone: phone
            };

            // Store user details in local storage
            localStorage.setItem('userDetails', JSON.stringify(userDetails));

            // Display user details
            displayUser(userDetails);

            // Clear form fields
            userForm.reset();
        } else {
            alert("Please fill in all fields");
        }
    });

    // Display user details
    function displayUser(userDetails) {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <p>${userDetails.username}</p>
            <p>Email: ${userDetails.email}</p>
            <p>Phone: ${userDetails.phone}</p>
            <button class="delete-btn">Delete</button>
            <button class="edit-btn">Edit</button>
        `;
        userList.appendChild(userCard);

        // Add event listener for delete button
        const deleteBtn = userCard.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", function() {
            userCard.remove();
            localStorage.removeItem('userDetails');
        });

        // Add event listener for edit button
        const editBtn = userCard.querySelector(".edit-btn");
        editBtn.addEventListener("click", function() {
            // Populate form fields with user details for editing
            document.getElementById("username").value = userDetails.username;
            document.getElementById("email").value = userDetails.email;
            document.getElementById("phone").value = userDetails.phone;

            // Remove user card after editing
            userCard.remove();
            localStorage.removeItem('userDetails');
        });
    }
});
