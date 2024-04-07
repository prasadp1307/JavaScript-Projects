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
        axios.("https://crudcrud.com/api/e5aa598beb2e4617b1a61a0d2f1d5d9b")
        .then((res => console.log(res.data)))
        .catch((err => console.log(err)))
    
    }