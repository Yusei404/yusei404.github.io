const konamiCode = ["r", "i", "p", "n", "u", "n", "o", "b"];
let konamiIndex = 0;
function handleKonamiCode() {
    ++konamiIndex === konamiCode.length && (alert("Nuno the cat : 2010-23/04/2024 \uD83E\uDEA6"),
        konamiIndex = 0)
}
document.addEventListener("keydown", function(n) {
    let e = n.key.toLowerCase();
    e === konamiCode[konamiIndex] ? handleKonamiCode() : konamiIndex = 0
});
