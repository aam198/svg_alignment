const showDialog = document.getElementById("number_1")
const dialog1 = document.getElementById('dialog_1')
const closeButton = document.querySelector('dialog button');

// Show dialog_1 modal
showDialog.addEventListener('click', () => {
  dialog1.showModal()
});

// Close dialog_1 modal
closeButton.addEventListener('click', () =>{
  dialog1.close()
});