document.addEventListener("DOMContentLoaded", function ()
{
    // Header
    fetch("/includes/header.html")
        .then(response => response.text())
        .then(data =>
        {
            document.getElementById("header").innerHTML = data;
        });

    // Footer
    fetch("/includes/footer.html")
        .then(response => response.text())
        .then(data =>
        {
            document.getElementById("footer").innerHTML = data;
        });

});
