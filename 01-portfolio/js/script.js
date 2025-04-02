document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("theme-toggle");

    //Get the user theme preference
    let darkMode = localStorage.getItem("darkMode") === "true";

    //Apply theme from the load of the page
    applyTheme(darkMode);

    //When the user wants to change the theme preference
    toggleButton.addEventListener("click", () => {
        //Change the theme to be used
        darkMode = !darkMode;

        //Save the new preference
        localStorage.setItem("darkMode", darkMode)

        //Apply the new theme
        applyTheme(darkMode);
    })
})

function applyTheme (darkMode) {
    if (darkMode) {
        document.documentElement.style.setProperty("--bg-color", "#121212");
        document.documentElement.style.setProperty("--text-color", "#f0f0f0");
        document.documentElement.style.setProperty("--primary-color", "#0052a3");
        document.documentElement.style.setProperty("--hover-color", "#ff99e6");
        document.documentElement.style.setProperty("--footer-bg", "#001a33");
        document.documentElement.style.setProperty("--section-bg", "#1e1e1e");
        document.getElementById("theme-toggle").textContent = "Toggle Light Mode"
    } else {
        document.documentElement.style.setProperty("--bg-color", "#f0f0f0");
        document.documentElement.style.setProperty("--text-color", "#333");
        document.documentElement.style.setProperty("--primary-color", "#0066cc");
        document.documentElement.style.setProperty("--hover-color", "#ffccf2");
        document.documentElement.style.setProperty("--footer-bg", "#004d99");
        document.documentElement.style.setProperty("--section-bg", "white");
        document.getElementById("theme-toggle").textContent = "Toggle Dark Mode"
    }
}