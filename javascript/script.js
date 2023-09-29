const form = document.querySelector('.form-container form');

form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill out all fields.');
        return; 
    }
    else {
        alert('Form submitted successfully!');
        form.reset();
    }
});


let slideIndex = 1;
showTestimonials(slideIndex);

function showTestimonials(n) {
    const testimonials = document.querySelectorAll('.testimonial');
    if (n > testimonials.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = testimonials.length;
    }
    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = 'none';
    }
    testimonials[slideIndex - 1].style.display = 'block';
}

function nextTestimonial() {
    showTestimonials(slideIndex += 1);
}

function prevTestimonial() {
    showTestimonials(slideIndex -= 1);
}

document.getElementById('nextBtn').addEventListener('click', nextTestimonial);
document.getElementById('prevBtn').addEventListener('click', prevTestimonial);
