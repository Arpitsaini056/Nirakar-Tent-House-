// Initialize EmailJS
(function(){
  emailjs.init("PjjYNdxXeYioeg9EH"); // <- Yaha apna EmailJS Public Key daalna
})();

// Open Popup Form
function openForm(type) {
  document.getElementById("popupForm").style.display = "flex";
  document.getElementById("formTitle").innerText = "Book for " + type;
  document.querySelector("input[name='function']").value = type;
}

// Close Popup
function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

// Handle Booking
function handleBooking(e) {
  e.preventDefault();

  // EmailJS se form send karna
  emailjs.sendForm("service_g1yawcm", "template_odk1nll", e.target)
    .then(() => {
      alert("🎉 Your booking request has been sent successfully!");
      closeForm();
      e.target.reset();
    }, (error) => {
      alert("❌ Failed to send booking: " + JSON.stringify(error));
    });
}
// Open Gallery
function openGallery() {
  document.getElementById("galleryPopup").style.display = "flex";
}

// Close Gallery
function closeGallery() {
  document.getElementById("galleryPopup").style.display = "none";
}
