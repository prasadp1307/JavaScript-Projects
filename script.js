function addbooking() {
    var userName = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("number").value;
    var busnumber = document.getElementById("busNumber").value;

    var booking = {
        name: userName,
        email: email,
        phonenumber: phonenumber,
        busnumber: busnumber,
    }

    var bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push(booking);

    localStorage.setItem("bookings", JSON.stringify(bookings));

    updatebookingList();
}

function updatebookingList() {
    var bookingList = document.getElementById("bookingList");
    var bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    bookingList.innerHTML = "";

    bookings.forEach(function (booking, index) {
        var listItems = document.createElement("div");
        listItems.innerHTML = ` 
        <p>Name: ${booking.name}</p>
        <p>Email: ${booking.email}</p>
        <p>Phone: ${booking.phonenumber}</p>
        <p>Bus Number: ${booking.busnumber}</p>
        <button onclick="editBooking(${index})">Edit</button>
        <button onclick="deleteBooking(${index})">Delete</button>`;

        bookingList.appendChild(listItems);
    });
}

function deleteBooking(index) {
    var bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    updatebookingList();
}

function editBooking(index) {
    var bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    var booking = bookings[index];
    document.getElementById("user").value = booking.name;
    document.getElementById("email").value = booking.email;
    document.getElementById("number").value = booking.phonenumber;
    document.getElementById("busNumber").value = booking.busnumber;

    bookings.splice(index, 1);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    updatebookingList();
}

updatebookingList();
