const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 100);
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

function validateForm() {
    // Get form inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var comments = document.getElementById('comments').value;

    // Reset error messages
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('commentsError').innerText = '';

    // Simple validation
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        return false;
    }

    if (email.trim() === '') {
        document.getElementById('emailError').innerText = 'Email is required';
        return false;
    } else if (!isValidEmail(email)) {
        document.getElementById('emailError').innerText = 'Invalid email format';
        return false;
    }

    if (phone.trim() === '') {
        document.getElementById('phoneError').innerText = 'Phone number is required';
        return false;
    } else if (!isValidPhoneNumber(phone)) {
        document.getElementById('phoneError').innerText = 'Invalid phone number format';
        return false;
    }

    if (comments.trim() === '') {
        document.getElementById('commentsError').innerText = 'Comments are required';
        return false;
    }
    alert('Thanks for Responding!');
    return true;
}

function isValidEmail(email) {
    
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    var phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}