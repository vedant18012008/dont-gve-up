// 30 Card Interactive Story Tree with Branching & Recorded Answers
const storyTree = [
    {
        id: 1,
        emoji: "🥺",
        question: "Do you know how much you mean to me?",
        subtext: "Take a deep breath and hear me out...",
        yes: {
            text: "Yes ❤️",
            record: "Yes, I know ❤️",
            followUp: {
                emoji: "✨",
                question: "How much do you think you mean to me?",
                subtext: "Guess! 😊",
                yesText: "More than the stars ✨",
                yesRecord: "More than the stars ✨",
                noText: "Everything in the world 🌎",
                noRecord: "Everything in the world 🌎"
            }
        },
        no: {
            text: "No 🙈",
            record: "No 🙈",
            dodge: true,
            followUp: {
                emoji: "🥺",
                question: "Why not? Is it because I haven't shown it enough?",
                subtext: "I want to show you every single day...",
                yesText: "Let me show you now 💖",
                yesRecord: "Let me show you now 💖",
                noText: "Give us a chance 🥺",
                noRecord: "Give us a chance 🥺"
            }
        }
    },
    {
        id: 2,
        emoji: "💔",
        question: "I miss hearing your voice every single day...",
        subtext: "It's the sweetest sound in my whole world.",
        yes: {
            text: "I miss you too 💕",
            record: "I miss you too 💕",
            followUp: {
                emoji: "📞",
                question: "Would you answer if I called you right now?",
                subtext: "Just to hear your sweet voice...",
                yesText: "Yes, of course 📱❤️",
                yesRecord: "Yes, of course 📱❤️",
                noText: "I'd call you first! 📞",
                noRecord: "I'd call you first! 📞"
            }
        },
        no: {
            text: "Hmm... 🧐",
            record: "Hmm... 🧐",
            dodge: false,
            followUp: {
                emoji: "🥺",
                question: "Why not? Are you still shy with me?",
                subtext: "You can talk to me about anything...",
                yesText: "A little bit 🙈",
                yesRecord: "A little bit 🙈",
                noText: "Not anymore ❤️",
                noRecord: "Not anymore ❤️"
            }
        }
    },
    {
        id: 3,
        emoji: "🌧️",
        question: "Can you feel how empty my world is without you?",
        subtext: "Nothing feels the same when you're not around.",
        yes: {
            text: "I feel it 🥺",
            record: "I feel it 🥺",
            followUp: {
                emoji: "☀️",
                question: "Shall we fill our world with laughter again?",
                subtext: "Like we always used to do...",
                yesText: "Yes, please 💖",
                yesRecord: "Yes, please 💖",
                noText: "I'd love that 💕",
                noRecord: "I'd love that 💕"
            }
        },
        no: {
            text: "Not really 😜",
            record: "Not really 😜",
            dodge: true
        }
    },
    {
        id: 4,
        emoji: "💭",
        question: "Remember all the sweet little moments we shared?",
        subtext: "The endless laughs, inside jokes, and warm hugs...",
        yes: {
            text: "I remember ✨",
            record: "I remember ✨",
            followUp: {
                emoji: "🥰",
                question: "Which one makes you smile the most?",
                subtext: "Think of our best memories...",
                yesText: "Our late night talks 🌙",
                yesRecord: "Our late night talks 🌙",
                noText: "Our warm hugs 🫂",
                noRecord: "Our warm hugs 🫂"
            }
        },
        no: {
            text: "Forgot 🙈",
            record: "Forgot 🙈",
            dodge: true
        }
    },
    {
        id: 5,
        emoji: "❤️",
        question: "I love you so much, more than words could ever say...",
        subtext: "No distance or misunderstanding can change that.",
        yes: {
            text: "Love you too 💖",
            record: "Love you too 💖",
            followUp: {
                emoji: "♾️",
                question: "Do you know how long I will love you?",
                subtext: "Countless days and endless nights...",
                yesText: "Forever & Always ♾️",
                yesRecord: "Forever & Always ♾️",
                noText: "To infinity and beyond ✨",
                noRecord: "To infinity and beyond ✨"
            }
        },
        no: {
            text: "Prove it 🤐",
            record: "Prove it 🤐",
            dodge: false,
            followUp: {
                emoji: "🌹",
                question: "How can I prove my love to you today?",
                subtext: "Tell me what your heart desires...",
                yesText: "With endless hugs 🫂",
                yesRecord: "With endless hugs 🫂",
                noText: "By never leaving 💕",
                noRecord: "By never leaving 💕"
            }
        }
    },
    {
        id: 6,
        emoji: "🎶",
        question: "Every single song I listen to reminds me of you...",
        subtext: "My heart automatically searches for your face.",
        yes: { text: "Aww ❤️", record: "Aww ❤️" },
        no: { text: "Skip song 🎧", record: "Skip song 🎧", dodge: true }
    },
    {
        id: 7,
        emoji: "💓",
        question: "My heart still beats only for you...",
        subtext: "You hold the key to my happiness.",
        yes: { text: "I know 🥰", record: "I know 🥰" },
        no: { text: "Really? 🧐", record: "Really? 🧐", dodge: false }
    },
    {
        id: 8,
        emoji: "✨",
        question: "I miss your smile that brightens up my worst days...",
        subtext: "Just one look at you makes all my troubles fade.",
        yes: { text: "Here's a smile 😊", record: "Here's a smile 😊" },
        no: { text: "Nope 😜", record: "Nope 😜", dodge: true }
    },
    {
        id: 9,
        emoji: "🤝",
        question: "Can we forget the mistakes and hold onto our love?",
        subtext: "What we have is far too precious to let go.",
        yes: {
            text: "Yes, let's 💖",
            record: "Yes, let's 💖",
            followUp: {
                emoji: "🌈",
                question: "Ready to start afresh together?",
                subtext: "No more looking back...",
                yesText: "Fresh start! ✨",
                yesRecord: "Fresh start! ✨",
                noText: "Hand in hand 🤝",
                noRecord: "Hand in hand 🤝"
            }
        },
        no: { text: "Wait... 🤔", record: "Wait... 🤔", dodge: false }
    },
    {
        id: 10,
        emoji: "💌",
        question: "Please come back into my life... I'm missing my favorite person.",
        subtext: "Life is just incomplete without you by my side.",
        yes: { text: "I'm right here 🥺", record: "I'm right here 🥺" },
        no: { text: "Not yet 🙈", record: "Not yet 🙈", dodge: true }
    },
    {
        id: 11,
        emoji: "🌅",
        question: "Do you know you're the first thing on my mind when I wake up?",
        subtext: "Before the sun shines, my thoughts belong to you.",
        yes: { text: "That's sweet ☀️", record: "That's sweet ☀️" },
        no: { text: "Sleep more 💤", record: "Sleep more 💤", dodge: true }
    },
    {
        id: 12,
        emoji: "🌙",
        question: "And the very last thought before I go to sleep?",
        subtext: "I wish I could whisper goodnight to you every day.",
        yes: { text: "Goodnight love 🌙", record: "Goodnight love 🌙" },
        no: { text: "Nite 😜", record: "Nite 😜", dodge: true }
    },
    {
        id: 13,
        emoji: "📱",
        question: "I miss our late-night talks until 3 AM...",
        subtext: "Talking about everything and nothing at all.",
        yes: { text: "Me too 🥹", record: "Me too 🥹" },
        no: { text: "Go sleep 😴", record: "Go sleep 😴", dodge: true }
    },
    {
        id: 14,
        emoji: "🫂",
        question: "Nobody understands me the way you do...",
        subtext: "You are my comfort zone, my safe haven.",
        yes: { text: "You are mine too 💞", record: "You are mine too 💞" },
        no: { text: "Doubt it 🧐", record: "Doubt it 🧐", dodge: false }
    },
    {
        id: 15,
        emoji: "👑",
        question: "I promise to cherish you and treat you like a queen.",
        subtext: "You deserve all the love and happiness in the universe.",
        yes: { text: "Pinky promise 💖", record: "Pinky promise 💖" },
        no: { text: "Hmm... 👑", record: "Hmm... 👑", dodge: true }
    },
    {
        id: 16,
        emoji: "👂",
        question: "I promise to listen better, understand deeper, and hold tighter.",
        subtext: "I want to be the best partner for you.",
        yes: { text: "I believe you ✨", record: "I believe you ✨" },
        no: { text: "Show me 🙈", record: "Show me 🙈", dodge: false }
    },
    {
        id: 17,
        emoji: "🥀",
        question: "Life is just too quiet and lonely without your warmth...",
        subtext: "I catch myself looking at my phone hoping it's you.",
        yes: { text: "I'm calling 📲", record: "I'm calling 📲" },
        no: { text: "Silence 🤫", record: "Silence 🤫", dodge: true }
    },
    {
        id: 18,
        emoji: "🌱",
        question: "Are you willing to give us another chance?",
        subtext: "To fix what was broken and rebuild even stronger.",
        yes: { text: "Yes, I am 💕", record: "Yes, I am 💕" },
        no: { text: "Thinking... 🧐", record: "Thinking... 🧐", dodge: true }
    },
    {
        id: 19,
        emoji: "📖",
        question: "Can we start a fresh new chapter together?",
        subtext: "A chapter filled with more smiles, less tears, and pure love.",
        yes: { text: "Let me write it 🖊️", record: "Let me write it 🖊️" },
        no: { text: "Close book 📕", record: "Close book 📕", dodge: true }
    },
    {
        id: 20,
        emoji: "🤗",
        question: "I miss your warm hugs that make everything feel safe...",
        subtext: "There is no better feeling than being in your arms.",
        yes: { text: "Sending a hug 🫂", record: "Sending a hug 🫂" },
        no: { text: "No hugs 😜", record: "No hugs 😜", dodge: true }
    },
    {
        id: 21,
        emoji: "🔮",
        question: "Do you still believe in us, even just a little bit?",
        subtext: "Because true love never really fades away.",
        yes: { text: "I still believe 💖", record: "I still believe 💖" },
        no: { text: "Maybe... 🙈", record: "Maybe... 🙈", dodge: false }
    },
    {
        id: 22,
        emoji: "🔥",
        question: "Because I will NEVER stop believing in you and me.",
        subtext: "My love for you is steadfast and unconditional.",
        yes: { text: "Never stop ❤️", record: "Never stop ❤️" },
        no: { text: "Stop it 😜", record: "Stop it 😜", dodge: true }
    },
    {
        id: 23,
        emoji: "🎁",
        question: "I'm ready to make things right and love you endlessly.",
        subtext: "I want to give you every reason to smile every single day.",
        yes: { text: "I'm ready 🥰", record: "I'm ready 🥰" },
        no: { text: "Not sure 🤔", record: "Not sure 🤔", dodge: false }
    },
    {
        id: 24,
        emoji: "🌻",
        question: "Would you let me make you smile again today?",
        subtext: "Your happiness is my absolute top priority.",
        yes: { text: "Make me smile 😊", record: "Make me smile 😊" },
        no: { text: "Frown 😠", record: "Frown 😠", dodge: true }
    },
    {
        id: 25,
        emoji: "💧",
        question: "Can I be the one who wipes away all your tears?",
        subtext: "You never have to feel alone in this world again.",
        yes: { text: "Always ❤️", record: "Always ❤️" },
        no: { text: "Wipe myself 🙈", record: "Wipe myself 🙈", dodge: true }
    },
    {
        id: 26,
        emoji: "🤝",
        question: "I miss holding your hand and never wanting to let go.",
        subtext: "Your hand fits so perfectly in mine.",
        yes: { text: "Hold my hand 🤝", record: "Hold my hand 🤝" },
        no: { text: "Hands in pocket 👖", record: "Hands in pocket 👖", dodge: true }
    },
    {
        id: 27,
        emoji: "🏡",
        question: "You are my home, my best friend, and my whole world.",
        subtext: "Wherever you are is where I belong.",
        yes: { text: "Welcome home 🏡❤️", record: "Welcome home 🏡❤️" },
        no: { text: "Visiting ✈️", record: "Visiting ✈️", dodge: true }
    },
    {
        id: 28,
        emoji: "📜",
        question: "Please don't let our beautiful story end here...",
        subtext: "We still have so many memories left to create together.",
        yes: { text: "It won't end 💖", record: "It won't end 💖" },
        no: { text: "The End? 🎬", record: "The End? 🎬", dodge: true }
    },
    {
        id: 29,
        emoji: "🎀",
        question: "Are you ready to come back into my arms?",
        subtext: "I'm standing here with open arms waiting for you.",
        yes: { text: "Coming back! 🏃‍♀️❤️", record: "Coming back! 🏃‍♀️❤️" },
        no: { text: "Wait a sec 🙈", record: "Wait a sec 🙈", dodge: true }
    },
    {
        id: 30,
        emoji: "💍",
        question: "Will you stay with me forever and NEVER let me go?",
        subtext: "This is my ultimate promise to you. Say YES!",
        yes: { text: "YES, FOREVER! 💍❤️", record: "YES, FOREVER! 💍❤️" },
        no: { text: "No... 😜", record: "No... 😜", dodge: true }
    }
];

// Playful text responses when trying to click/hover NO button
const playfulNoTexts = [
    "Wait, rethink! 🙈",
    "Are you sure? 🥺",
    "Wrong button! 💖",
    "Try the pink one! ✨",
    "Oops, dodged! 🏃",
    "Nope, can't click! 😜",
    "Please say yes! 🌹",
    "No is disabled! 🥰",
    "Think of us! 🥺",
    "Click Yes instead! ❤️"
];

// Recording Answers State
let currentCardIndex = 0;
let inFollowUp = false;
let currentFollowUpData = null;
const recordedAnswers = [];

// DOM Elements
const mainCard = document.getElementById("mainCard");
const cardEmoji = document.getElementById("cardEmoji");
const cardQuestion = document.getElementById("cardQuestion");
const cardSubtext = document.getElementById("cardSubtext");
const yesBtn = document.getElementById("yesBtn");
const yesBtnText = document.getElementById("yesBtnText");
const noBtn = document.getElementById("noBtn");
const noBtnText = document.getElementById("noBtnText");

const finaleContainer = document.getElementById("finaleContainer");
const answersList = document.getElementById("answersList");
const copyAnswersBtn = document.getElementById("copyAnswersBtn");
const restartBtn = document.getElementById("restartBtn");

// Music Controls
const musicToggleBtn = document.getElementById("musicToggleBtn");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

musicToggleBtn.addEventListener("click", () => {
    if (isPlaying) {
        bgMusic.pause();
        musicToggleBtn.classList.remove("playing");
        musicToggleBtn.querySelector(".music-text").textContent = "Play Song";
    } else {
        bgMusic.play().then(() => {
            isPlaying = true;
            musicToggleBtn.classList.add("playing");
            musicToggleBtn.querySelector(".music-text").textContent = "Pause Song";
        }).catch(err => {
            console.log("Audio play blocked:", err);
        });
    }
});

// Render Main Card or Follow-Up Card
function renderCurrentState() {
    mainCard.classList.add("animate-swap");
    
    setTimeout(() => {
        if (!inFollowUp) {
            const data = storyTree[currentCardIndex];
            cardEmoji.textContent = data.emoji;
            cardQuestion.textContent = data.question;
            cardSubtext.textContent = data.subtext;
            yesBtnText.textContent = data.yes.text;
            noBtnText.textContent = data.no.text;
        } else if (currentFollowUpData) {
            cardEmoji.textContent = currentFollowUpData.emoji;
            cardQuestion.textContent = currentFollowUpData.question;
            cardSubtext.textContent = currentFollowUpData.subtext;
            yesBtnText.textContent = currentFollowUpData.yesText;
            noBtnText.textContent = currentFollowUpData.noText;
        }
        
        resetNoButton();
        mainCard.classList.remove("animate-swap");
    }, 200);
}

// Record an Answer
function recordResponse(questionText, selectedChoice) {
    recordedAnswers.push({
        card: currentCardIndex + 1,
        question: questionText,
        answer: selectedChoice,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    localStorage.setItem("her_recorded_answers", JSON.stringify(recordedAnswers));
}

// Yes Button Click Listener
yesBtn.addEventListener("click", () => {
    // Autoplay music on interaction
    if (!isPlaying) {
        bgMusic.play().then(() => {
            isPlaying = true;
            musicToggleBtn.classList.add("playing");
            musicToggleBtn.querySelector(".music-text").textContent = "Pause Song";
        }).catch(() => {});
    }

    if (!inFollowUp) {
        const data = storyTree[currentCardIndex];
        recordResponse(data.question, data.yes.record);

        // Check if there is a follow-up branch
        if (data.yes.followUp) {
            inFollowUp = true;
            currentFollowUpData = data.yes.followUp;
            renderCurrentState();
            return;
        }
    } else {
        // We were in follow up, record follow-up choice
        recordResponse(currentFollowUpData.question, currentFollowUpData.yesRecord);
        inFollowUp = false;
        currentFollowUpData = null;
    }

    // Move to next main card
    if (currentCardIndex < storyTree.length - 1) {
        currentCardIndex++;
        renderCurrentState();
    } else {
        showFinale();
    }
});

// Dodging / Clicking NO Button
let dodgeCount = 0;

function dodgeNoButton() {
    const data = storyTree[currentCardIndex];
    
    // Check if dodging is enabled for this step
    const isDodgeable = !inFollowUp ? data.no.dodge : false;

    if (isDodgeable) {
        dodgeCount++;
        noBtn.classList.add("dodging");
        
        // Change text randomly
        const randomText = playfulNoTexts[Math.floor(Math.random() * playfulNoTexts.length)];
        noBtnText.textContent = randomText;

        const padding = 60;
        const maxX = window.innerWidth - noBtn.offsetWidth - padding;
        const maxY = window.innerHeight - noBtn.offsetHeight - padding;

        const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
        const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;

        const currentScale = 1 + Math.min(dodgeCount * 0.04, 0.35);
        yesBtn.style.transform = `scale(${currentScale})`;
    }
}

function handleNoClick() {
    const data = storyTree[currentCardIndex];
    const isDodgeable = !inFollowUp ? data.no.dodge : false;

    if (!isDodgeable) {
        // Non-dodgeable NO button (e.g. opens a gentle 'Why not?' follow up!)
        if (!inFollowUp) {
            recordResponse(data.question, data.no.record);

            if (data.no.followUp) {
                inFollowUp = true;
                currentFollowUpData = data.no.followUp;
                renderCurrentState();
                return;
            }
        } else {
            recordResponse(currentFollowUpData.question, currentFollowUpData.noRecord);
            inFollowUp = false;
            currentFollowUpData = null;
        }

        if (currentCardIndex < storyTree.length - 1) {
            currentCardIndex++;
            renderCurrentState();
        } else {
            showFinale();
        }
    } else {
        dodgeNoButton();
    }
}

function resetNoButton() {
    noBtn.classList.remove("dodging");
    noBtn.style.left = "auto";
    noBtn.style.top = "auto";
    noBtn.style.position = "relative";
    yesBtn.style.transform = "scale(1)";
}

noBtn.addEventListener("mouseenter", dodgeNoButton);
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault();
    handleNoClick();
});
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    handleNoClick();
});

// CONFIGURATION (Set your personal details here!)
const INSTAGRAM_USERNAME = "vedant.010820";
const PHONE_NUMBER = "+918849283312";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xaewwpbl";

// Update Contact Links on Load
function updateContactLinks() {
    const instaLink = document.getElementById("instaLink");
    const instaVal = document.getElementById("instaVal");
    const phoneLink = document.getElementById("phoneLink");
    const phoneVal = document.getElementById("phoneVal");

    if (instaLink && instaVal) {
        instaLink.href = `https://instagram.com/${INSTAGRAM_USERNAME.replace('@', '')}`;
        instaVal.textContent = INSTAGRAM_USERNAME.startsWith('@') ? INSTAGRAM_USERNAME : `@${INSTAGRAM_USERNAME}`;
    }

    if (phoneLink && phoneVal) {
        phoneLink.href = `https://wa.me/${PHONE_NUMBER.replace(/[^0-9]/g, '')}`;
        phoneVal.textContent = PHONE_NUMBER;
    }
}
updateContactLinks();

// Silent Background Auto-Send to Formspree
function sendAnswersSilentlyToFormspree() {
    if (!FORMSPREE_ENDPOINT || FORMSPREE_ENDPOINT.includes("YOUR_FORMSPREE_ENDPOINT_HERE")) {
        console.log("Formspree endpoint not set yet.");
        return;
    }

    let summaryText = "💖 Her Recorded Journey & Answers:\n\n";
    recordedAnswers.forEach((item, i) => {
        summaryText += `Card ${item.card} - Q: ${item.question}\n👉 Answer: ${item.answer}\n\n`;
    });

    fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            subject: "💖 She Finished Your Cards! Here Are Her Answers!",
            answers_summary: summaryText,
            total_questions_answered: recordedAnswers.length
        })
    }).catch(err => {
        console.log("Background send error:", err);
    });
}

// Grand Finale Trigger
function showFinale() {
    mainCard.parentElement.style.display = "none";
    finaleContainer.classList.remove("hidden");

    // Silently send her answers to your email in the background
    sendAnswersSilentlyToFormspree();

    // Confetti explosion
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();
        if (timeLeft <= 0) {
            return clearInterval(interval);
        }
        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

// Redeem Coupons Logic
window.redeemCoupon = function(buttonEl, rewardName) {
    if (!buttonEl.classList.contains("redeemed")) {
        buttonEl.classList.add("redeemed");
        buttonEl.innerHTML = `✅ Redeemed: ${rewardName}`;
        confetti({ particleCount: 30, spread: 50, origin: { y: 0.8 } });
    }
};

// Restart Journey
restartBtn.addEventListener("click", () => {
    currentCardIndex = 0;
    inFollowUp = false;
    currentFollowUpData = null;
    dodgeCount = 0;
    recordedAnswers.length = 0;
    localStorage.removeItem("her_recorded_answers");
    mainCard.parentElement.style.display = "flex";
    finaleContainer.classList.add("hidden");
    renderCurrentState();
});

// Ambient Heart Canvas Animation
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class HeartParticle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 20;
        this.size = Math.random() * 12 + 8;
        this.speedY = Math.random() * 1.2 + 0.4;
        this.speedX = Math.sin(Math.random() * Math.PI) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
    }

    update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        if (this.y < -30) {
            this.reset();
        }
    }

    draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.font = `${this.size}px sans-serif`;
        ctx.fillText("❤️", this.x, this.y);
        ctx.restore();
    }
}

for (let i = 0; i < 25; i++) {
    particles.push(new HeartParticle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// Initial Card Render
renderCurrentState();
