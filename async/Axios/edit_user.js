function handleFormSubmit(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
  
    const obj = { username, email, phone };
    localStorage.setItem(email, JSON.stringify(obj));
    showDetails(username, email, phone); 
}

function showDetails(username, email, phone) { 
    const parent = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerHTML = `${username} ${email} ${phone}`; 
    const delButton = document.createElement('button');
    delButton.type = 'button';
    delButton.textContent = 'Delete'; 
    delButton.onclick = () => {
        parent.removeChild(li);
        localStorage.removeItem(email);
    };
  
    const editBtn = document.createElement('button');
    editBtn.type = 'button';
    editBtn.textContent = 'Edit'; 
    editBtn.onclick = () => {
        
    };

    li.appendChild(delButton);
    li.appendChild(editBtn); 
    parent.appendChild(li);
}
