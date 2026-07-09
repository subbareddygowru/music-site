document.addEventListener("DOMContentLoaded", function () {

    // Load Header
    fetch("/includes/header.html")
        .then(response => response.text())
        .then(data => {

            document.getElementById("header").innerHTML = data;

            // Mobile Menu
            const menu = document.getElementById("menu-toggle");
            const close = document.getElementById("close-menu");
            const nav = document.getElementById("nav-links");

            if (menu && close && nav) {

                menu.addEventListener("click", () => {
                    nav.classList.add("active");
                });

                close.addEventListener("click", () => {
                    nav.classList.remove("active");
                });

            }

        });

    // Load Footer
    fetch("/includes/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        });

});
