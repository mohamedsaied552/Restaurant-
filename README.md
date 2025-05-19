# Gourmet Haven Restaurant Website

A fully responsive, single-page restaurant website showcasing menu offerings, chef profiles, a reservation form, and customer testimonials. This project focuses exclusively on frontend implementation with no backend integration required.

## Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Dark Mode**: Toggle between light and dark themes with user preference saved in localStorage
- **Scroll Animations**: Engaging animations using AOS.js as elements enter the viewport
- **Smooth Scrolling**: Smooth navigation between sections
- **Bootstrap 5**: Utilizes Bootstrap's responsive grid system and components
- **Form Validation**: Client-side validation for the reservation form

## Project Structure

```
Restaurant/
├── css/
│   ├── style.css          # Main stylesheet
│   └── dark-mode.css      # Dark mode styles
├── js/
│   ├── main.js            # Main JavaScript file
│   ├── dark-mode.js       # Dark mode functionality
│   └── form-validation.js # Reservation form validation
├── img/
│   ├── hero/              # Hero section images
│   ├── about/             # About section images
│   ├── menu/              # Menu item images
│   ├── gallery/           # Gallery images
│   └── testimonials/      # Testimonial profile images
├── data/
│   ├── menu.json          # Menu items data
│   └── testimonials.json  # Testimonial data
└── index.html             # Main HTML file
```

## Sections

1. **Navbar**: Responsive navigation with mobile hamburger menu and dark mode toggle
2. **Hero**: Full-screen background image with text overlay and call-to-action button
3. **About**: Two-column layout with chef image and restaurant story
4. **Menu**: Tabbed interface with categories for appetizers, main courses, desserts, and drinks
5. **Gallery**: Responsive grid layout for restaurant images
6. **Reservation**: Form with validation for booking a table
7. **Testimonials**: Customer reviews displayed in responsive cards
8. **Footer**: Contact information, opening hours, and social media links

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Bootstrap 5
- AOS.js (Animate On Scroll)
- Font Awesome
- Google Fonts

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. No build process or dependencies to install - it's a static website!

## Customization

- **Images**: Replace placeholder images in the `img` directory with your own
- **Content**: Update text content in `index.html`
- **Menu Items**: Modify menu data in `data/menu.json`
- **Testimonials**: Update testimonial data in `data/testimonials.json`
- **Colors**: Customize color scheme by modifying CSS variables in `css/style.css`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
