function checkformufinforum(form) {
  for (let i = 0; i < form.elements.length; i++) {
    if (form.elements[i].value == '') {
    Swal.fire({
        icon: 'error',
        title: 'All fields must be filled!',
        showConfirmButton: false,
        timer: 1500
      });
    }
    return false;
}
};