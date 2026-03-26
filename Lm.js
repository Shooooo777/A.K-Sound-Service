
// BOOKING POPUP
function openBookingForm(){
  document.getElementById("bookingPopup").classList.add("show");
}

function closeBookingForm(){
  document.getElementById("bookingPopup").classList.remove("show");
}

// SUCCESS POPUP
function openSuccessPopup(){
  document.getElementById("successPopup").classList.add("show");
  setTimeout(closeSuccessPopup, 3000);
}

function closeSuccessPopup(){
  document.getElementById("successPopup").classList.remove("show");
}


// EVENT SELECT -> INPUT
function setEventType(){
  let select = document.getElementById("eventSelect").value;
  document.getElementById("eventType").value = select;
}


// DATE MIN TODAY
let today = new Date().toISOString().split("T")[0];
let dateInput = document.getElementById("time");
if(dateInput){
  dateInput.min = today;
}


// GET DIRECTION
function getDirections(){
  window.open(
    "https://www.google.com/maps/dir/?api=1&destination=25.383868,83.014572",
    "_blank"
  );
}


// BOOKING FUNCTION
function confirmBooking(){

  let name = document.getElementById("name").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let event = document.getElementById("eventType").value.trim();
  let address = document.getElementById("address").value.trim();
  let date = document.getElementById("time").value;

  // VALIDATION
  let namePattern = /^[A-Za-z ]{3,}$/;
  let mobilePattern = /^[0-9]{10}$/;

  if(!namePattern.test(name)){
    alert("Invalid Name (Min 3 letters)");
    return;
  }

  if(!mobilePattern.test(mobile)){
    alert("Invalid Mobile Number (10 digits)");
    return;
  }

  if(event === ""){
    alert("Enter Event Type");
    return;
  }

  if(address.length < 5){
    alert("Enter Full Address");
    return;
  }

  if(date === ""){
    alert("Select Date");
    return;
  }

  // MESSAGE
  let message =
  "DJ Booking SK Sound\n\n"+
  "Name: " + name + "\n"+
  "Mobile: " + mobile + "\n"+
  "Event: " + event + "\n"+
  "Address: " + address + "\n"+
  "Date: " + date;

  // WHATSAPP LINK (FIXED)
  let whatsappURL =
    "https://wa.me/918112506316?text=" +
    encodeURIComponent(message);

  // OPEN WHATSAPP
  window.open(whatsappURL, "_blank");

  openSuccessPopup();
  closeBookingForm();
}
















/* ===== ALL GALLERY IMAGES (YAHI IMAGE ADD KARO) ===== */

const galleryImages = [
  

  /* 👇 extra images (preview me nahi dikhengi) */
  "dj5.jpg",
  "dj6.jpg",
  "dj7.jpg",
"karan.jpg",
"karan2.jpg",
"karan3.jpg",
"karan4.jpg",
"karan5.jpg",
"karan6.jpg",



 
  "shaadi1.jpg",
  "shaadi2.jpg",
  "shaadi3.jpg",
  "shaadi4.jpg",
  "shaadi5.jpg",
  "shaadi6.jpg",
  "shaadi7.jpg",
  "shaadi8.jpg",
];

/* +COUNT */
document.getElementById("totalCount").innerText =
"+" + (galleryImages.length - 3);

let currentIndex = 0;

const fullscreen = document.getElementById("fkFullscreen");
const imageEl = document.getElementById("fkImage");

/* OPEN / CLOSE */
function openGallery(index){
  currentIndex = index;
  fullscreen.style.display = "flex";
  showImage();
}

function closeGallery(){
  fullscreen.style.display = "none";
}

/* SHOW IMAGE */
function showImage(){
  imageEl.src = galleryImages[currentIndex];
}

/* DESKTOP CLICK */
fullscreen.addEventListener("click", function(e){
  if(e.target.classList.contains("fk-close")) return;
  nextImage();
});

/* NEXT / PREV */
function nextImage(){
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage();
}

function prevImage(){
  currentIndex =
    (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage();
}

/* MOBILE SWIPE */
let startX = 0;

fullscreen.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

fullscreen.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if(Math.abs(diff) < 50) return;

  diff > 0 ? nextImage() : prevImage();
});

console.log("hello world")