/**
 * Gourmet Haven Restaurant Website
 * Form Validation JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservationForm');
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            if (validateForm()) {
                // Form is valid, show success message
                showSuccessMessage();
                
                // Reset form
                reservationForm.reset();
                
                // Remove validation classes
                const inputs = reservationForm.querySelectorAll('.form-control, .form-select');
                inputs.forEach(input => {
                    input.classList.remove('is-valid');
                });
            }
        });
        
        // Add input event listeners for real-time validation
        const inputs = reservationForm.querySelectorAll('.form-control, .form-select');
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                validateInput(this);
            });
            
            input.addEventListener('blur', function() {
                validateInput(this);
            });
        });
        
        // Set min date for date input to today
        const dateInput = document.getElementById('date');
        if (dateInput) {
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            const formattedDate = `${yyyy}-${mm}-${dd}`;
            
            dateInput.setAttribute('min', formattedDate);
        }
    }
    
    /**
     * Validate the entire form
     * @returns {boolean} True if form is valid, false otherwise
     */
    function validateForm() {
        let isValid = true;
        
        // Validate name
        const nameInput = document.getElementById('name');
        if (!nameInput.value.trim()) {
            setInvalid(nameInput, 'Please provide your name.');
            isValid = false;
        } else {
            setValid(nameInput);
        }
        
        // Validate email
        const emailInput = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
            setInvalid(emailInput, 'Please provide a valid email address.');
            isValid = false;
        } else {
            setValid(emailInput);
        }
        
        // Validate phone
        const phoneInput = document.getElementById('phone');
        const phoneRegex = /^\+?[0-9\s\-\(\)]{10,20}$/;
        if (!phoneInput.value.trim() || !phoneRegex.test(phoneInput.value)) {
            setInvalid(phoneInput, 'Please provide a valid phone number.');
            isValid = false;
        } else {
            setValid(phoneInput);
        }
        
        // Validate guests
        const guestsInput = document.getElementById('guests');
        if (!guestsInput.value) {
            setInvalid(guestsInput, 'Please select the number of guests.');
            isValid = false;
        } else {
            setValid(guestsInput);
        }
        
        // Validate date
        const dateInput = document.getElementById('date');
        if (!dateInput.value) {
            setInvalid(dateInput, 'Please select a date.');
            isValid = false;
        } else {
            const selectedDate = new Date(dateInput.value);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            
            if (selectedDate < today) {
                setInvalid(dateInput, 'Please select a future date.');
                isValid = false;
            } else {
                setValid(dateInput);
            }
        }
        
        // Validate time
        const timeInput = document.getElementById('time');
        if (!timeInput.value) {
            setInvalid(timeInput, 'Please select a time.');
            isValid = false;
        } else {
            setValid(timeInput);
        }
        
        return isValid;
    }
    
    /**
     * Validate a single input field
     * @param {HTMLElement} input - The input element to validate
     */
    function validateInput(input) {
        switch (input.id) {
            case 'name':
                if (!input.value.trim()) {
                    setInvalid(input, 'Please provide your name.');
                } else {
                    setValid(input);
                }
                break;
                
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!input.value.trim() || !emailRegex.test(input.value)) {
                    setInvalid(input, 'Please provide a valid email address.');
                } else {
                    setValid(input);
                }
                break;
                
            case 'phone':
                const phoneRegex = /^\+?[0-9\s\-\(\)]{10,20}$/;
                if (!input.value.trim() || !phoneRegex.test(input.value)) {
                    setInvalid(input, 'Please provide a valid phone number.');
                } else {
                    setValid(input);
                }
                break;
                
            case 'guests':
                if (!input.value) {
                    setInvalid(input, 'Please select the number of guests.');
                } else {
                    setValid(input);
                }
                break;
                
            case 'date':
                if (!input.value) {
                    setInvalid(input, 'Please select a date.');
                } else {
                    const selectedDate = new Date(input.value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    
                    if (selectedDate < today) {
                        setInvalid(input, 'Please select a future date.');
                    } else {
                        setValid(input);
                    }
                }
                break;
                
            case 'time':
                if (!input.value) {
                    setInvalid(input, 'Please select a time.');
                } else {
                    setValid(input);
                }
                break;
        }
    }
    
    /**
     * Set an input as invalid with a custom message
     * @param {HTMLElement} input - The input element
     * @param {string} message - The error message
     */
    function setInvalid(input, message) {
        input.classList.add('is-invalid');
        input.classList.remove('is-valid');
        
        const feedbackElement = input.nextElementSibling;
        if (feedbackElement && feedbackElement.classList.contains('invalid-feedback')) {
            feedbackElement.textContent = message;
        }
    }
    
    /**
     * Set an input as valid
     * @param {HTMLElement} input - The input element
     */
    function setValid(input) {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
    }
    
    /**
     * Show success message after form submission
     */
    function showSuccessMessage() {
        // Create success alert
        const successAlert = document.createElement('div');
        successAlert.className = 'alert alert-success mt-4';
        successAlert.setAttribute('role', 'alert');
        successAlert.innerHTML = `
            <h4 class="alert-heading">Reservation Successful!</h4>
            <p>Thank you for your reservation. We have received your request and will confirm shortly.</p>
        `;
        
        // Add alert before the form
        reservationForm.parentNode.insertBefore(successAlert, reservationForm);
        
        // Remove alert after 5 seconds
        setTimeout(() => {
            successAlert.remove();
        }, 5000);
    }
});
