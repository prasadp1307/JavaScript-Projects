const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios.get("https://crudcrud.com/api/e5aa598beb2e4617b1a61a0d2f1d5d9b/todo")
  .then((res => console.log(res.data)))
  .catch((err => console.log(err)))
}

function postTodo() {
  // Write your code here
  axios.post("https://crudcrud.com/api/e5aa598beb2e4617b1a61a0d2f1d5d9b/todo",{
    tittle: "pick up parents",
    completed: false,
  }).then((res) => console.log(res.data))
  .catch((err) => console.log(err))
}

function putTodo() {
  // Write your code here
  axios.put("https://crudcrud.com/api/e5aa598beb2e4617b1a61a0d2f1d5d9b/todo/660fadbbb6787603e855ba4b",
  {
    tittle: "Learn Backend",
    completed: true,
  }
  )
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err))
}

function deleteTodo() {
  // Write your code here
  axios.delete("https://crudcrud.com/api/e5aa598beb2e4617b1a61a0d2f1d5d9b/todo/660fb0a1b6787603e855ba4c")
  
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err))
}




function handleFormSubmit(event) {
    const deleteBtn = document.createElement('button')
      const deleteBtnTxT = document.createTextNode('delete')
      deleteBtn.appendChild(deleteBtnTxT)
      deleteBtn.className = 'delete-btn'
      newLi.appendChild(deleteBtn)
    
      const editBtn = document.createElement('button')
      const editBtnTxT = document.createTextNode('edit')
      editBtn.appendChild(editBtnTxT)
      editBtn.className = 'edit-btn'
      newLi.appendChild(editBtn)
    }
    
    function deletedata() {
        // Write your code here
        axios.delete("https://crudcrud.com/api/e5aa598beb2e4617b1a61a0d2f1d5d9b")
        .then((res => console.log(res.data)))
        .catch((err => console.log(err)))
    
    }

    function editdata() {
        // Write your code here
        axios.put("https://crudcrud.com/api/e5aa598beb2e4617b1a61a0d2f1d5d9b")
        .then((res => console.log(res.data)))
        .catch((err => console.log(err)))
    
    }