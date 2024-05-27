document.addEventListener('DOMContentLoaded', () => {
    displayBookings();

    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', handleFormSubmit);
});

function displayBookings() {
    const userList = document.getElementById('userList');

    axios.get('http://localhost:8080/users')
        .then(response => {
            userList.innerHTML = '';
            response.data.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = `Name: ${user.name}, Email: ${user.email}, Phone: ${user.phone_number}, Bus Number: ${user.bus_number}`;

                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.addEventListener('click', () => editBooking(user));

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => deleteBooking(user.id));

                listItem.appendChild(editButton);
                listItem.appendChild(deleteButton);
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
}

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const userDetails = {
        name: form.name.value,
        email: form.email.value,
        phone_number: form.phone_number.value,
        bus_number: form.bus_number.value,
    };

    axios.post('http://localhost:8080/', userDetails)
        .then(response => {
            alert(response.data);
            form.reset();
            displayBookings();
        })
        .catch(error => console.error('Error registering user:', error));
}

function editBooking(user) {
    const form = document.getElementById('bookingForm');
    form.name.value = user.name;
    form.email.value = user.email;
    form.phone_number.value = user.phone_number;
    form.bus_number.value = user.bus_number;

    form.onsubmit = function(event) {
        event.preventDefault();

        const updatedDetails = {
            name: form.name.value,
            email: form.email.value,
            phone_number: form.phone_number.value,
            bus_number: form.bus_number.value,
        };

        axios.put(`http://localhost:8080/users/${user.id}`, updatedDetails)
            .then(() => {
                alert('Booking updated');
                form.reset();
                form.onsubmit = handleFormSubmit;
                displayBookings();
            })
            .catch(error => console.error('Error updating booking:', error));
    };
}

function deleteBooking(userId) {
    axios.delete(`http://localhost:8080/users/${userId}`)
        .then(() => {
            alert('Booking deleted');
            displayBookings();
        })
        .catch(error => console.error('Error deleting booking:', error));
}
