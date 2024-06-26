const dialog = document.querySelector('dialog')
const showDialog = document.getElementById("number_1")
const showDialog2 = document.getElementById("number_2")
const dialog1 = document.getElementById('dialog_1')
const dialog2 = document.getElementById('dialog_2')
const closeButtons = document.querySelectorAll('#close');

// Show dialog_1 modal
showDialog.addEventListener('click', () => {
  dialog1.showModal();
  dialog1.preventFocus = true;
});

showDialog2.addEventListener('click', () => {
  dialog2.showModal()
});

// Close dialog modal

closeButtons.forEach((button) => {
  console.log(button)
  button.addEventListener('click', () => {
    // Getting dialog based on being open
    const dialogId = button.parentElement.id;
    const dialog = document.getElementById(dialogId);
    console.log(dialogId);
    // Close the dialog
    dialog.close();
  })
})