document.addEventListener("DOMContentLoaded", function() {
    const timeElement = document.getElementById("time")
function updateTime() {
    const now = new Date();
    // const timeString =Date.now()
   const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

    const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
    document.getElementById('time').textContent = timeString;
}
if (timeElement){
setInterval(updateTime, 1000);
updateTime();}

const form = document.querySelector("#contact-form");

function validateField(field) {
    const errorMessage = field.parentElement.querySelector(".error-message");
    
    if (!field.checkValidity()) {
        const errorText = field.dataset.error || field.validationMessage;
        errorMessage.textContent = errorText;
        field.setAttribute('aria-invalid', 'true');
        return false;
    }
    errorMessage.textContent = "";
    field.setAttribute('aria-invalid', 'false');
    return true;
}

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    const submitButton = form.querySelector('[data-testid="test-contact-submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Submitting...';

    const fields = form.querySelectorAll("input, textarea");
    let isValid = true;
    fields.forEach((field) => {
        if (!validateField(field)) {
            isValid = false;
        }
    });
    if (isValid) {
        const successMessage = document.querySelector("[data-testid='test-contact-success-message']");
        if (successMessage) {
            successMessage.textContent = "Form submitted successfully!";
            form.reset();
            setTimeout(() => {
                successMessage.textContent = "";
            }, 2000); 
        }
    }
    
    submitButton.disabled = false;
    submitButton.textContent = 'Submit';
});
    form.querySelectorAll("input, textarea").forEach(field => {
        field.addEventListener("blur", () => validateField(field));
    });

});
