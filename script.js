// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-N3KFG5C1ZL');

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});

// Sign-in Button Click Event
const signInBtn = document.getElementById('signInBtn');
signInBtn.addEventListener('click', () => {
    alert('Family Portal sign-in feature is coming soon!');
});


document.querySelector(".portal-btn").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Redirecting to the secure Family Portal...");
});
