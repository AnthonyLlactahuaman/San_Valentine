let siButton = document.getElementById("siButton");
let noButton = document.getElementById("noButton");
let gif = document.querySelector(".gif");
let frase = document.querySelector(".frase");
let noCount = 0;

siButton.addEventListener("click", function() {
    changeContent();
    noCount = 0;
    noButton.style.display = "inline";

    confetti({
        scalar: 2,
        particleCount: 80,
        spread: 100,
        origin: { y: -0.1 },
        shapes: ['heart', 'square'],
        startVelocity: -35 
    });
});

noButton.addEventListener("click", function() {
    noCount++;
    if (noCount == 1) {
        changeContent2();
    } else if(noCount == 2) {
        changeContent3();
    } else if(noCount > 2){
        noButton.style.display = "none";
    }
});

function changeContent() {
    gif.src = "img/Abrazo_final.gif"; 
    frase.textContent = "Sabia que dirias que si, TE AMO ❤️😍💕"; 
}

function changeContent2() {
    gif.src = "img/oso_triste.gif"; 
    frase.textContent = "Es porque no me quieres, verdad? 🥺😫"; 
}

function changeContent3() {
    gif.src = "img/Oso_Molesto.gif"; 
    frase.textContent = "Ahora me tienes que querer por que si 🥱😡"; 
}