//handles open/closing of zoomed images
function openModal(src) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = src;

  // Close modal if user clicks outside the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}
