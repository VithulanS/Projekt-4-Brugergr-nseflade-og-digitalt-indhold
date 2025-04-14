const boxes = document.querySelectorAll(".flip-box"); // Henter alle elementer med klassen "flip-box" fra DOM'en og gemmer dem i en NodeList (en slags array)
let index = 0; // Starter ved 0 – bruges til at holde styr på hvilken boks der skal vises næste gang

function updateSlider() {
    // Skjuler alle bokse
    boxes.forEach(box => box.style.display = "none"); // Går igennem alle bokse og skjuler dem ved at sætte display til "none"

    // Viser de næste 3 bokse
    for (let i = 0; i < 3; i++) { // Loop der kører 3 gange for at vise 3 bokse
        let currentIndex = (index + i) % boxes.length; // Udregner hvilken boks der skal vises – bruger modulo for at loope tilbage til starten hvis vi når slutningen
        boxes[currentIndex].style.display = "block"; // Viser den aktuelle boks ved at sætte display til "block"
    }

    // Opdaterer index til næste skift
    index = (index + 3) % boxes.length; // Hopper 3 videre i rækken – og bruger modulo så vi aldrig går ud over grænsen
}

// Starter slideren første gang
updateSlider(); // Kalder funktionen én gang med det samme, så der vises noget fra starten

setInterval(updateSlider, 5000); // Kalder updateSlider automatisk hver 3. sekund (3000 ms), så slideren skifter automatisk
