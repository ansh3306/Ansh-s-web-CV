document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeStyle = document.getElementById("theme-style");

    // Get stored theme preference or default to light
    let currentTheme = localStorage.getItem("theme") || "light";

    // Apply the stored theme
    updateTheme(currentTheme);

    // Toggle theme on button click
    themeToggle.addEventListener("click", function () {
        currentTheme = currentTheme === "light" ? "dark" : "light";
        updateTheme(currentTheme);
        localStorage.setItem("theme", currentTheme);
    });

    function updateTheme(theme) {
        if (theme === "light") {
            themeStyle.setAttribute("href", "lstyle.css");
            themeToggle.innerHTML = "🌙"; // Moon icon for dark mode
        } else {
            themeStyle.setAttribute("href", "dstyle.css");
            themeToggle.innerHTML = "☀️"; // Sun icon for light mode
        }
    }
});
