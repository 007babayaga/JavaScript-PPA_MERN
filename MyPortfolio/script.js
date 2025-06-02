
const buttonhome = document.getElementById("home-button");
const cardhome = document.getElementById("Home-card");

function showCard() {
    cardhome.style.display = "block";
}

function hideCard() {
    cardhome.style.display = "none";
}

buttonhome.addEventListener("mouseenter", showCard);
cardhome.addEventListener("mouseenter", showCard); // Keep card visible when hovering over it
buttonhome.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!cardhome.matches(":hover")) hideCard();
    }, 100); // Delay to allow moving from button to card
});
cardhome.addEventListener("mouseleave", hideCard);

const buttonlink = document.getElementById("link-Button");
const cardlink = document.getElementById("Link-card");

function showlinkCard() {
    cardlink.style.display = "block";
}

function hidelinkCard() {
    cardlink.style.display = "none";
}

buttonlink.addEventListener("mouseenter", showlinkCard);
cardlink.addEventListener("mouseenter", showlinkCard); // Keep card visible when hovering over it
buttonlink.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!cardlink.matches(":hover")) hidelinkCard();
    }, 100); // Delay to allow moving from button to card
});
cardlink.addEventListener("mouseleave", hidelinkCard);