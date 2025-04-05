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
})