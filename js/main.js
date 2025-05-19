/**
 * Gourmet Haven Restaurant Website
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 100
    });

    // Navbar scroll behavior
    const navbar = document.getElementById('mainNav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });

    // Load menu items
    loadMenuItems();

    // Initialize Lightbox options
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'albumLabel': 'Image %1 of %2',
            'fadeDuration': 300,
            'positionFromTop': 50
        });
        console.log('Lightbox initialized successfully');
    } else {
        console.warn('Lightbox library not loaded');
    }

    // Setup reservation form
    setupReservationForm();
});

/**
 * Load menu items from JSON data
 */
function loadMenuItems() {
    console.log('Loading menu items...');

    // Clear any existing menu items first
    document.querySelectorAll('[id$="-content"]').forEach(container => {
        container.innerHTML = '';
    });

    // Use hardcoded data with direct image paths
    console.log('Using direct image paths for menu items');

    // Define menu data with exact image filenames as they appear in the directory
    const menuData = {
        appetizers: [
            {
                name: "Bruschetta",
                description: "Toasted bread topped with fresh tomatoes, basil, and garlic",
                price: "$8.99",
                image: "img/menu/bruschetta.jpeg"
            },
            {
                name: "Calamari",
                description: "Crispy fried calamari served with lemon aioli",
                price: "$12.99",
                image: "img/menu/Calamari.jpeg"
            },
            {
                name: "Stuffed Mushrooms",
                description: "Mushroom caps filled with herb cream cheese and topped with breadcrumbs",
                price: "$10.99",
                image: "img/menu/Stuffed Mushrooms.jpeg" // Using actual filename with space
            },
            {
                name: "Shrimp Cocktail",
                description: "Chilled jumbo shrimp served with cocktail sauce",
                price: "$14.99",
                image: "img/menu/Shrimp Cocktail.jpeg" // Using actual filename with space
            }
        ],
        "main-courses": [
            {
                name: "Filet Mignon",
                description: "8oz filet served with garlic mashed potatoes and seasonal vegetables",
                price: "$32.99",
                image: "img/menu/Filet Mignon.jpeg" // Using actual filename with space
            },
            {
                name: "Grilled Salmon",
                description: "Fresh Atlantic salmon with lemon butter sauce and wild rice",
                price: "$26.99",
                image: "img/menu/Grilled Salmon.jpeg" // Using actual filename with space
            },
            {
                name: "Chicken Parmesan",
                description: "Breaded chicken breast topped with marinara and mozzarella, served with pasta",
                price: "$22.99",
                image: "img/menu/Chicken Parmesan.jpeg" // Using actual filename with space
            },
            {
                name: "Vegetable Risotto",
                description: "Creamy Arborio rice with seasonal vegetables and Parmesan cheese",
                price: "$18.99",
                image: "img/menu/Vegetable Risotto.jpeg" // Using actual filename with space
            }
        ],
        desserts: [
            {
                name: "Tiramisu",
                description: "Classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream",
                price: "$8.99",
                image: "img/menu/Tiramisu.jpeg"
            },
            {
                name: "Chocolate Lava Cake",
                description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
                price: "$9.99",
                image: "img/menu/Chocolate Lava Cake.jpeg" // Using actual filename with space
            },
            {
                name: "Crème Brûlée",
                description: "Rich custard topped with a layer of caramelized sugar",
                price: "$8.99",
                image: "img/menu/Crème Brûlée.jpeg" // Using actual filename with special characters
            },
            {
                name: "New York Cheesecake",
                description: "Creamy cheesecake with a graham cracker crust, topped with berry compote",
                price: "$9.99",
                image: "img/menu/New York Cheesecake.jpeg" // Using actual filename with space
            }
        ],
        drinks: [
            {
                name: "Signature Martini",
                description: "Our house specialty with premium vodka and a secret blend of flavors",
                price: "$12.99",
                image: "img/menu/Signature Martini.jpeg" // Using actual filename with space
            },
            {
                name: "Redbull",
                description: "Energy drink to keep you going all night",
                price: "$5.99",
                image: "img/menu/Redbull.jpeg"
            },
            {
                name: "Red Wine Flight",
                description: "Sample three of our premium red wines",
                price: "$15.99",
                image: "img/menu/Red Wine Flight.jpeg" // Using actual filename with space
            },
            {
                name: "Italian Soda",
                description: "Sparkling water with your choice of flavored syrup",
                price: "$4.99",
                image: "img/menu/Italian Soda.jpeg" // Using actual filename with space
            }
        ]
    };

    // Display menu items with the direct image paths
    displayMenuItems(menuData);
}

/**
 * Display menu items from the provided data
 * @param {Object} menuData - The menu data to display
 */
function displayMenuItems(menuData) {
    // Populate menu tabs
    Object.keys(menuData).forEach(category => {
        const container = document.getElementById(`${category}-content`);
        if (!container) {
            console.warn(`Container for ${category} not found`);
            return;
        }

        console.log(`Populating ${category} with ${menuData[category].length} items`);

        menuData[category].forEach(item => {
            // Create the menu item HTML directly, similar to direct-menu.html
            // This approach works because we've verified it in direct-menu.html
            const menuItem = document.createElement('div');
            menuItem.className = 'col-md-6 col-lg-3 menu-item';
            menuItem.setAttribute('data-aos', 'zoom-in');

            // Use the direct HTML approach that we know works
            menuItem.innerHTML = `
                <div class="card h-100">
                    <img
                        src="${item.image}"
                        class="card-img-top"
                        alt="${item.name}"
                        onerror="this.onerror=null; this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(item.name)}';"
                    >
                    <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="price">${item.price}</p>
                    </div>
                </div>
            `;

            container.appendChild(menuItem);

            // Log for debugging
            console.log(`Added menu item: ${item.name}, Image: ${item.image}`);
        });
    });
}

/**
 * Load testimonials from data
 */
function loadTestimonials() {
    // Fetch testimonial data from JSON file
    fetch('data/testimonials.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(testimonials => {
            const container = document.getElementById('testimonials-container');
            if (!container) return;

            testimonials.forEach((testimonial, index) => {
                const delay = index * 100;
                const testimonialCard = document.createElement('div');
                testimonialCard.className = 'col-md-4';
                testimonialCard.setAttribute('data-aos', 'slide-left');
                testimonialCard.setAttribute('data-aos-delay', delay.toString());

                testimonialCard.innerHTML = `
                    <div class="testimonial-card">
                        <i class="fas fa-quote-left quote-icon"></i>
                        <p>${testimonial.text}</p>
                        <div class="customer-info">
                            <img src="${testimonial.image}" alt="${testimonial.name}" class="customer-img">
                            <p class="customer-name">${testimonial.name}</p>
                        </div>
                    </div>
                `;

                container.appendChild(testimonialCard);
            });
        })
        .catch(error => {
            console.error('Error loading testimonial data:', error);
            // Fallback: Display error message in testimonials section
            const testimonialsSection = document.querySelector('#testimonials');
            if (testimonialsSection) {
                const errorMessage = document.createElement('div');
                errorMessage.className = 'col-12 text-center';
                errorMessage.innerHTML = `
                    <div class="alert alert-warning" role="alert">
                        <h4 class="alert-heading">Testimonials Unavailable</h4>
                        <p>We're sorry, but the testimonials could not be loaded at this time.</p>
                    </div>
                `;
                testimonialsSection.querySelector('.container').appendChild(errorMessage);
            }
        });
}

/**
 * Load gallery images from gallery-data.js
 */
function loadGalleryImages() {
    const gallerySection = document.querySelector('#gallery .row[data-aos="flip-up"]');
    if (!gallerySection) return;

    // Get loading indicator
    const loadingIndicator = document.getElementById('gallery-loading');

    try {
        console.log('Loading gallery data from galleryData variable');

        // Remove loading indicator
        if (loadingIndicator) {
            loadingIndicator.remove();
        }

        // Clear any existing gallery items
        gallerySection.innerHTML = '';

        // Check if galleryData is available
        if (typeof galleryData === 'undefined' || !galleryData.images) {
            throw new Error('Gallery data is not available');
        }

        console.log('Gallery data loaded successfully:', galleryData);

        // Loop through gallery images and create gallery items
        galleryData.images.forEach((image, index) => {
            console.log(`Processing image ${index}:`, image.src);
                // Add a delay based on index for staggered animation
                const delay = index * 100;

                // Create gallery item container
                const galleryItem = document.createElement('div');
                galleryItem.className = 'col-lg-4 col-md-6 col-sm-12 gallery-item';
                galleryItem.setAttribute('data-aos', 'zoom-in');
                galleryItem.setAttribute('data-aos-delay', delay.toString());

                // Create gallery item HTML
                galleryItem.innerHTML = `
                    <a href="${image.src}" data-lightbox="gallery" data-title="${image.title}" data-alt="${image.alt}">
                        <img src="${image.src}" alt="${image.alt}" class="img-fluid">
                        <div class="gallery-caption">
                            <h5>${image.title}</h5>
                            <p>${image.description}</p>
                        </div>
                    </a>
                `;

                // Add gallery item to gallery section
                gallerySection.appendChild(galleryItem);
            });

            // Initialize Lightbox options
            lightbox.option({
                'resizeDuration': 200,
                'wrapAround': true,
                'albumLabel': 'Image %1 of %2',
                'fadeDuration': 300,
                'positionFromTop': 50
            });

        } catch (error) {
            console.error('Error loading gallery data:', error);
            console.error('Error details:', error.message, error.stack);

            // Remove loading indicator if it exists
            if (loadingIndicator) {
                loadingIndicator.remove();
            }

            // Fallback: Display error message in gallery section
            gallerySection.innerHTML = `
                <div class="col-12 text-center">
                    <div class="alert alert-warning" role="alert">
                        <h4 class="alert-heading">Gallery Unavailable</h4>
                        <p>We're sorry, but the gallery images could not be loaded at this time.</p>
                        <button class="btn btn-sm btn-outline-warning mt-2" onclick="loadGalleryImages()">
                            <i class="fas fa-sync-alt me-1"></i> Try Again
                        </button>
                    </div>
                </div>
            `;
        }
}

/**
 * Setup reservation form
 */
function setupReservationForm() {
    const form = document.getElementById('reservationForm');
    if (!form) return;

    form.innerHTML = `
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" required>
                <div class="invalid-feedback">Please provide your name.</div>
            </div>
            <div class="col-md-6 mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required>
                <div class="invalid-feedback">Please provide a valid email.</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="phone" required>
                <div class="invalid-feedback">Please provide a valid phone number.</div>
            </div>
            <div class="col-md-6 mb-3">
                <label for="guests" class="form-label">Number of Guests</label>
                <select class="form-select" id="guests" required>
                    <option value="" selected disabled>Select number of guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7+">7+ People</option>
                </select>
                <div class="invalid-feedback">Please select the number of guests.</div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 mb-3">
                <label for="date" class="form-label">Date</label>
                <input type="date" class="form-control" id="date" required>
                <div class="invalid-feedback">Please select a valid date.</div>
            </div>
            <div class="col-md-6 mb-3">
                <label for="time" class="form-label">Time</label>
                <input type="time" class="form-control" id="time" required>
                <div class="invalid-feedback">Please select a valid time.</div>
            </div>
        </div>
        <div class="mb-3">
            <label for="requests" class="form-label">Special Requests</label>
            <textarea class="form-control" id="requests" rows="3"></textarea>
        </div>
        <div class="text-center">
            <button type="submit" class="btn btn-primary btn-lg">Reserve Now</button>
        </div>
    `;
}
