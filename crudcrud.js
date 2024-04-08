const BASE_URL = "https://crudcrud.com/api/1befec1dbaaa4ba5af3fa54c3eb78567/booking";

function addBooking() {
    var userName = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var phoneNumber = document.getElementById("number").value;
    var busNumber = document.getElementById("busNumber").value;

    var booking = {
        name: userName,
        email: email,
        phoneNumber: phoneNumber,
        busNumber: busNumber
    };

    axios.post(BASE_URL, booking)
        .then(response => {
            console.log("Booking added:", response.data);
            updateBookingList();
        })
        .catch(error => {
            console.error("Error adding booking:", error);
        });
}

function updateBookingList() {
    var bookingList = document.getElementById("bookingList");
    bookingList.innerHTML = "";

    axios.get(BASE_URL)
        .then(response => {
            response.data.forEach((booking, index) => {
                var listItem = document.createElement("div");
                listItem.innerHTML = ` 
                <p>Name: ${booking.name}</p>
                <p>Email: ${booking.email}</p>
                <p>Phone: ${booking.phoneNumber}</p>
                <p>Bus Number: ${booking.busNumber}</p>
                <button onclick="editBooking('${booking._id}')">Edit</button>
                <button onclick="deleteBooking('${booking._id}')">Delete</button>`;
                bookingList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching bookings:", error);
        });
}

function deleteBooking(id) {
    axios.delete(BASE_URL + "/" + id)
        .then(response => {
            console.log("Booking deleted:", id);
            updateBookingList();
        })
        .catch(error => {
            console.error("Error deleting booking:", error);
        });
}

function editBooking(id) {
    axios.get(BASE_URL + "/" + id)
        .then(response => {
            var booking = response.data;
            document.getElementById("user").value = booking.name;
            document.getElementById("email").value = booking.email;
            document.getElementById("number").value = booking.phoneNumber;
            document.getElementById("busNumber").value = booking.busNumber;
        })
        .catch(error => {
            console.error("Error fetching booking for edit:", error);
        });
}

updateBookingList(); 
