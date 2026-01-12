const btnToggle = document.getElementById("theme-toggle");

function toggleTheme(){
    const banner = document.getElementById("banner");
    banner.classList.toggle("dark");

    const isDarkTheme = banner.classList.contains("dark");

    localStorage.setItem("themePrefrence",isDarkTheme ? "dark":"light");
}


btnToggle.addEventListener("click", toggleTheme);

window.addEventListener("DOMContentLoaded", function() {
    const themePreference = this.localStorage.getItem("themePreference");
    if (themePreference === "dark") {
        const banner = this.document.getElementById("banner");
        banner.classList.add("dark");
    }
})