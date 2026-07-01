const hero = document.getElementById("heroFilter");
const singer = document.getElementById("singerFilter");
const md = document.getElementById("mdFilter");
const mood = document.getElementById("moodFilter");
const search = document.getElementById("search");

const cards = document.querySelectorAll(".card");

function applyFilters()
{
    let h = hero.value;
    let s = singer.value;
    let m = md.value;
    let mo = mood.value;
    let text = search.value.toLowerCase();

    cards.forEach(card =>
    {
        let match =
            (h === "all" || card.classList.contains(h)) &&
            (s === "all" || card.classList.contains(s)) &&
            (m === "all" || card.classList.contains(m)) &&
            (mo === "all" || card.classList.contains(mo)) &&
            card.getAttribute("data-name").toLowerCase().includes(text);

        card.style.display = match ? "block" : "none";
    });
}

hero.addEventListener("change", applyFilters);
singer.addEventListener("change", applyFilters);
md.addEventListener("change", applyFilters);
mood.addEventListener("change", applyFilters);
search.addEventListener("keyup", applyFilters);
