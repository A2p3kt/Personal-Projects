document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");
    const icon = document.getElementById("theme-icon");

    function updateIcon (theme) {
        icon.src = theme === 'dark' ? 'styles/images/svg-icons/light-mode.svg' : 'styles/images/svg-icons/dark-mode.svg';
        icon.alt = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark mode'
    }
    
    // Get the current theme
    const currentTheme = document.documentElement.classList.contains('dark-mode') ? 'dark' : 'light'
    updateIcon(currentTheme)

    //When the user wants to change the theme preference
    toggleButton.addEventListener("click", () => {
        const isDark = document.documentElement.classList.contains('dark-mode');

        document.documentElement.classList.toggle('dark-mode');

        const newTheme = isDark ? 'light' : 'dark'

        localStorage.setItem('theme', newTheme);

        updateIcon(newTheme)
    })

    // For navbar scroll effect
    const navbar = document.getElementById("navbar");
    // Get the initial scroll position
    let lastScroll = window.scrollY;

    //Check the scrolling activity in the window
    window.addEventListener('scroll', () => {
        // Get the new scroll position
        let currentScroll = window.scrollY;

        const scrollThreshold = 100;

        if (Math.abs(currentScroll - lastScroll) <= scrollThreshold) {
            return;
        } else if (currentScroll <= 0) {
            navbar.classList.remove('nav-hidden')
        } else if (currentScroll > lastScroll) {
            navbar.classList.add('nav-hidden');
        } else {
            navbar.classList.remove('nav-hidden');
        }

        lastScroll = currentScroll;
    })
})