/**
 * Gourmet Haven Restaurant Website
 * Dark Mode JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved dark mode preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    // Apply dark mode if saved preference exists
    if (isDarkMode) {
        enableDarkMode();
    }
    
    // Add sun icon to the toggle button
    if (!darkModeToggle.querySelector('.fa-sun')) {
        const sunIcon = document.createElement('i');
        sunIcon.className = 'fas fa-sun';
        darkModeToggle.appendChild(sunIcon);
    }
    
    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', function() {
        if (htmlElement.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    /**
     * Enable dark mode
     */
    function enableDarkMode() {
        htmlElement.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    }
    
    /**
     * Disable dark mode
     */
    function disableDarkMode() {
        htmlElement.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
});
