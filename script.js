const contactForm = document.getElementById("contactForm");

if (contactForm) {
    document.addEventListener("submit", (e) => {
        e.preventDefault();
        const inputName = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        let isValid = true;
        let errorMessage = "";

        if (inputName === "") {
            isValid = false;
            errorMessage = errorMessage + "Name is required.\n";
        }

        if (email === "") {
            isValid = false;
            errorMessage = errorMessage + "Email is required.\n";
        }

        if (email) {
            const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const validPattern = pattern.test(email);
            if (!validPattern) {
                isValid = false;
                errorMessage = errorMessage + "Please enter a valid email address.\n";
            }
        }

        if (phone === "") {
            isValid = false;
            errorMessage = errorMessage + "Phone Number is required.\n";
        }

        if (message === "") {
            isValid = false;
            errorMessage = errorMessage + "Message is required.\n";
        }
        if (isValid) {
            alert("From Submitted Successfully!");
            contactForm.reset();
        }
        else {
            alert(errorMessage);
        }
    });
}

// timer script //

const updateDateTime = () => {
    const timeContainer = document.getElementById("dateTime")
    if (timeContainer) {
        const now = new Date();
        const localFormate = now.toLocaleString()
        timeContainer.innerHTML = localFormate
    }
};
setInterval(updateDateTime, 1000);