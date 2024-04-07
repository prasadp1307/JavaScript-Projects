document.addEventListener('DOMContentLoaded', function () {
    let userList = document.getElementById('userList');

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        let name = event.target.username.value;
        let email = event.target.email.value;
        let phone = event.target.phone.value;

        var userData = JSON.parse(localStorage.getItem("userDetails")) || [];
        userData.push({
            'name': name,
            'email': email,
            'phone': phone
        });

        localStorage.setItem("userDetails", JSON.stringify(userData));
        event.target.reset();
        displayData();
    });

    function displayData() {
        let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
        let finalData = '';

        userData.forEach((element, i) => {
            finalData += `<li class="items">
                <h5>Name</h5>
                <div>${element.name}</div>
                <h5>Email</h5>
                <div>${element.email}</div>
                <h5>Phone</h5>
                <div>${element.phone}</div>
                <button onclick='removeData(${i})'>Delete</button>
            </li>`;
        });

        userList.innerHTML = finalData;
    }

    function removeData(index) {
        let userData = JSON.parse(localStorage.getItem("userDetails")) || [];
        userData.splice(index, 1);

        localStorage.setItem("userDetails", JSON.stringify(userData));
        displayData();
    }

    displayData();
});
