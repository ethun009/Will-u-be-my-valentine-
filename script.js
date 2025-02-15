let messages = ["Please?", "Give me a chance!", "Are you sure?", "Think again!", "You might regret this!", "One last chance!", "Pretty please?", "Don’t break my heart 💔"];
let noCount = 0;
let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let messageText = document.getElementById("message");
let displaybox = document.querySelector('.box');
let bgblur  = document.querySelector('.blurbg');
noButton.addEventListener("click", rejectLove);
yesButton.addEventListener("click", acceptLove);

function rejectLove() {
    if (noCount < messages.length) {
        messageText.innerText = messages[noCount];
        noCount++;
        noButton.style.transform = `scale(${1 - noCount * 0.1})`;
        yesButton.style.transform = `scale(${1 + noCount * 0.1})`;
    }
    if (noCount === messages.length) {
        noButton.style.display = "none";
    }
}
function opengift() {
   
    displaybox.classList.remove('hide');
    bgblur.classList.remove('hide');
}

function acceptLove() {
    document.getElementById("valentine").innerHTML = `
        <img src="https://media1.tenor.com/m/aEWN44So2ckAAAAC/kiss-kisses.gif" class="gif">
        <div class="question">YAYAYYAYAYAYAY I LOVE YOU PICCI❤️</div>
        <h2 class="question">I Have a Message For U❤️</h2>
        <div> <img src="gift.gif" class="gif"></div>
       <button class="button" id="yes" onclick="opengift()">Open</button>

    `;
    launchConfetti();
    startHeartRain();
}

function launchConfetti() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function startHeartRain() {
    const heartContainer = document.getElementById("heart-container");
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}

document.querySelector('.box').addEventListener('click', function (event) {
    const card = document.querySelector('.card');
    if (!card.classList.contains('expanded')) {
        card.classList.add('expanded');
    } else {
        card.classList.remove('expanded');
    }
});

