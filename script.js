 function validateForm() {
            const name = document.getElementById("n1").value;
            const email = document.getElementById("n2").value;
            const phone = document.getElementById("n3").value;
            const message = document.getElementById("n4").value;

            if (name === "" || email === "" || phone === "" || message === "") {
                alert("All fields must be filled out");
                return false;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address");
                return false;
            }

            const phonePattern = /^\d{10}$/;
            if (!phonePattern.test(phone)) {
                alert("Please enter a valid 10-digit phone number");
                return false;
            }

            alert("Form submitted successfully!");
            document.getElementById("myForm").reset();
}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};