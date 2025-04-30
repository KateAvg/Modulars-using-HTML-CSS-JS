// Contact Form Validation
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        e.preventDefault();
        alert("Please fill in all fields.");
    } else {
        alert("Message sent! (demo only)");
    }
});

// Gallery Modal
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("modal-close");
const galleryImages = document.querySelectorAll(".gallery-img");

// Click on any gallery image to open modal
galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

// Close modal when clicking close button
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    modalImg.src = ""; // reset
});

// Close modal when clicking outside the image
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modalImg.src = "";
    }
});


