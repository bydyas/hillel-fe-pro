export const theme = document.addEventListener("DOMContentLoaded", function () {

    document.documentElement.setAttribute("data-theme", "light");

    const themeSwitcher = document.getElementById("theme-switcher");

    themeSwitcher.onclick = function () {
        let currentTheme = document.documentElement.getAttribute("data-theme");
        let switchToTheme = currentTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", switchToTheme);
    };
    
});