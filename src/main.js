const showDialog = document.getElementById("number_1")
const showDialog2 = document.getElementById("number_2")
const dialog1 = document.getElementById('dialog_1')
const dialog2 = document.getElementById('dialog_2')
const closeButton = document.querySelector('dialog button');

// Show dialog_1 modal
showDialog.addEventListener('click', () => {
  dialog1.showModal()
});

showDialog2.addEventListener('click', () => {
  dialog2.showModal()
});

// Close dialog_1 modal
closeButton.addEventListener('click', () =>{
  dialog1.close()
  dialog2.close()
});