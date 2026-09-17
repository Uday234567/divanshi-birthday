console.log("Birthday website JS loaded");


/* =========================================
   GET ELEMENTS
========================================= */
const backgroundMusic =
    document.getElementById("backgroundMusic");

const wishScreen =
    document.getElementById("wishScreen");

const questionScreen =
    document.getElementById("questionScreen");

const darkScreen =
    document.getElementById("darkScreen");

const room =
    document.getElementById("room");

const yesButton =
    document.getElementById("yesButton");

const lightsButton =
    document.getElementById("lightsButton");

const cutCakeButton =
    document.getElementById("cutCakeButton");

const confettiContainer =
    document.getElementById("confettiContainer");

/* =========================================
   FINAL BIRTHDAY PAGE ELEMENTS
========================================= */

const finalBirthdayScreen =
    document.getElementById("finalBirthdayScreen");

const finalCardScene =
    document.getElementById("finalCardScene");

const finalBirthdayCard =
    document.getElementById("finalBirthdayCard");

const openFinalCardButton =
    document.getElementById("openFinalCardButton");

const finalCakeScene =
    document.getElementById("finalCakeScene");

const startBlowButton =
    document.getElementById("startBlowButton");

const finalMicStatus =
    document.getElementById("finalMicStatus");

const finalMessageScene =
    document.getElementById("finalMessageScene");

const finalCandles =
    document.querySelectorAll(
        "#finalBirthdayScreen .final-candle"
    );

let finalMicStream = null;
let finalAudioContext = null;
let finalAnalyser = null;
let finalMicSource = null;
let finalBlowDetectionRunning = false;
let finalBlowStartTime = 0;
let finalCandlesBlown = false;


/* =========================================
   JOURNEY ELEMENTS
========================================= */

const nextJourneyAction =
    document.getElementById("nextJourneyAction");

const nextJourneyButton =
    document.getElementById("nextJourneyButton");

const journeyScreen =
    document.getElementById("journeyScreen");

const forwardAction =
    document.getElementById("forwardAction");

const forwardButton =
    document.getElementById("forwardButton");


/* =========================================
   REASONS ELEMENT
========================================= */

const reasonsScreen =
    document.getElementById("reasonsScreen");


/* =========================================
   LIBRARY ELEMENTS
========================================= */

const libraryAction =
    document.getElementById("libraryAction");

const libraryButton =
    document.getElementById("libraryButton");

const libraryScreen =
    document.getElementById("libraryScreen");

const photoGrid =
    document.getElementById("photoGrid");

const photoLightbox =
    document.getElementById("photoLightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const closeLightbox =
    document.getElementById("closeLightbox");

const previousPhoto =
    document.getElementById("previousPhoto");

const nextPhoto =
    document.getElementById("nextPhoto");

const photoCounter =
    document.getElementById("photoCounter");


/* =========================================
   AWARDS ELEMENTS
========================================= */

const awardsScreen =
    document.getElementById("awardsScreen");

const nextAwardButton =
    document.getElementById("nextAwardButton");

const awardNumber =
    document.getElementById("awardNumber");

const awardTitle =
    document.getElementById("awardTitle");

const awardDescription =
    document.getElementById("awardDescription");

const awardWinner =
    document.getElementById("awardWinner");

const awardParticles =
    document.getElementById("awardParticles");

const enterAwardsButton =
    document.getElementById("enterAwardsButton");


/* =========================================
   STATE
========================================= */

let currentPhoto = 1;

let currentAward = 0;

let cakeCut = false;

let roomStarted = false;

let awardsOpened = false;

let finalCelebrationPlayed = false;


/* =========================================
   SCREEN 1 → SCREEN 2
========================================= */

setTimeout(() => {

    if (!wishScreen || !questionScreen) {
        return;
    }

    console.log("Opening question screen");

    wishScreen.classList.remove("screen-visible");
    wishScreen.classList.add("screen-hidden");

    questionScreen.classList.remove("screen-hidden");
    questionScreen.classList.add("screen-visible");

}, 3000);


/* =========================================
   YES BUTTON
========================================= */

if (yesButton) {

    yesButton.addEventListener("click", function () {

        console.log("YES clicked");

        if (backgroundMusic) {

    backgroundMusic.volume = 0.35;

    backgroundMusic.currentTime = 0;

    backgroundMusic.play().catch(function (error) {

        console.log(
            "Music could not start:",
            error
        );

    });

}

        questionScreen.classList.remove("screen-visible");
        questionScreen.classList.add("screen-hidden");

        darkScreen.classList.remove("screen-hidden");
        darkScreen.classList.add("screen-visible");

    });

}


/* =========================================
   LIGHTS ON
========================================= */

if (lightsButton) {

    lightsButton.addEventListener("click", function () {

        console.log("LIGHTS ON clicked");

        darkScreen.classList.remove("screen-visible");
        darkScreen.classList.add("screen-hidden");

        room.style.visibility = "visible";

        gsap.to(room, {

            opacity: 1,

            duration: 1.2,

            onComplete: function () {

                if (!roomStarted) {

                    roomStarted = true;

                    startRoomAnimation();

                }

            }

        });

    });

}


/* =========================================
   ROOM ANIMATION
========================================= */

function startRoomAnimation() {

    console.log("Room animation started");

    const timeline =
        gsap.timeline();


    /* LIGHT */

    timeline.to(".room-glow", {

        opacity: 1,

        duration: 1.2

    });


    timeline.to(".ceiling-light", {

        opacity: 1,

        duration: 0.8

    }, "-=0.8");


    /* FAIRY LIGHTS */

    timeline.to(".bulb", {

        opacity: 1,

        duration: 0.3,

        stagger: 0.1

    });


    /* BANNER */

    timeline.to(".banner-flag", {

        opacity: 1,

        y: 0,

        rotation: 0,

        duration: 0.6,

        stagger: 0.08,

        ease: "back.out(1.5)"

    });


    /* BALLOONS */

    timeline.to(".balloon", {

        opacity: 1,

        scale: 1,

        y: 0,

        duration: 0.8,

        stagger: 0.12,

        ease: "back.out(1.7)"

    });


    /* TEXT */

    timeline.to(".celebration-text", {

        opacity: 1,

        y: 0,

        duration: 1,

        ease: "power3.out"

    });


    /* PEOPLE */

    timeline.to(".person", {

        opacity: 1,

        y: 0,

        duration: 0.8,

        stagger: 0.15,

        ease: "back.out(1.5)"

    });


    /* GIRL */

    timeline.to(".girl", {

        opacity: 1,

        y: 0,

        duration: 0.9,

        ease: "back.out(1.5)"

    });


    /* CAKE */

    timeline.to(".cake", {

        opacity: 1,

        y: 0,

        scale: 1,

        duration: 1,

        ease: "back.out(1.8)"

    });


    /* BUTTON */

    timeline.to(".cake-action", {

        opacity: 1,

        y: 0,

        duration: 0.8,

        ease: "back.out(1.5)"

    });


    startBalloonFloat();

    startPeopleAnimation();

}


/* =========================================
   BALLOONS
========================================= */

function startBalloonFloat() {

    document
        .querySelectorAll(".balloon")
        .forEach((balloon, index) => {

            gsap.to(balloon, {

                y:
                    -15 -
                    Math.random() * 20,

                x:
                    Math.random() * 12 - 6,

                rotation:
                    Math.random() * 8 - 4,

                duration:
                    2.5 + Math.random(),

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut",

                delay:
                    index * 0.2

            });

        });

}


/* =========================================
   PEOPLE
========================================= */

function startPeopleAnimation() {

    gsap.to(".person", {

        y: -4,

        duration: 1.5,

        repeat: -1,

        yoyo: true,

        stagger: 0.2,

        ease: "sine.inOut"

    });

}


/* =========================================
   CAKE BUTTON
========================================= */

if (cutCakeButton) {

    cutCakeButton.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            if (cakeCut) {
                return;
            }

            cakeCut = true;

            console.log("Cake button clicked");


            /* Hide button */

            gsap.to(".cake-action", {

                opacity: 0,

                y: 20,

                duration: 0.4,

                pointerEvents: "none"

            });


            /* Cake jump */

            gsap.timeline()

                .to(".cake", {

                    y: -25,

                    scale: 1.1,

                    duration: 0.3,

                    ease: "power2.out"

                })

                .to(".cake", {

                    y: 0,

                    scale: 1,

                    duration: 0.6,

                    ease: "bounce.out"

                });


            /* People cheering */

            gsap.to(".person", {

                y: -25,

                duration: 0.25,

                repeat: 5,

                yoyo: true,

                stagger: 0.1,

                ease: "power1.inOut"

            });


            /* Left arms */

            gsap.to(".arm-left", {

                rotation: -80,

                duration: 0.25,

                repeat: 5,

                yoyo: true,

                stagger: 0.1,

                transformOrigin: "bottom center"

            });


            /* Right arms */

            gsap.to(".arm-right", {

                rotation: 80,

                duration: 0.25,

                repeat: 5,

                yoyo: true,

                stagger: 0.1,

                transformOrigin: "bottom center"

            });


            /* Girl arm */

            gsap.to(".girl-arm-right", {

                rotation: -90,

                duration: 0.3,

                repeat: 5,

                yoyo: true,

                transformOrigin: "bottom center"

            });


            /* Confetti */

            createConfetti(120);


            /* Show AAGE CHALE */

            setTimeout(() => {

                gsap.to(nextJourneyAction, {

                    opacity: 1,

                    visibility: "visible",

                    y: 0,

                    duration: 1.2,

                    ease: "power3.out"

                });

            }, 2500);

        }
    );

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti(amount) {

    if (!confettiContainer) {
        return;
    }

    const colors = [

        "#ff5fa8",
        "#ffd477",
        "#c99cff",
        "#ffffff",
        "#8fe3cf"

    ];


    for (let i = 0; i < amount; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti";


        const size =
            Math.random() * 8 + 5;


        piece.style.width =
            size + "px";

        piece.style.height =
            size * 1.5 + "px";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "%";


        confettiContainer.appendChild(
            piece
        );


        gsap.to(piece, {

            y:
                window.innerHeight + 100,

            x:
                (Math.random() - 0.5) * 500,

            rotation:
                Math.random() * 1000,

            duration:
                Math.random() * 2 + 2,

            delay:
                Math.random() * 0.5,

            ease:
                "power1.in",

            onComplete: function () {

                piece.remove();

            }

        });

    }

}


/* =========================================
   OPEN JOURNEY SCREEN
========================================= */

if (nextJourneyButton) {

    nextJourneyButton.addEventListener(
        "click",
        function () {

            journeyScreen.classList.add("active");

            gsap.fromTo(

                ".journey-content",

                {
                    opacity: 0,

                    y: 60
                },

                {
                    opacity: 1,

                    y: 0,

                    duration: 1.5,

                    ease: "power3.out"

                }

            );

        }
    );

}


/* =========================================
   SHOW FORWARD BUTTON
========================================= */

if (journeyScreen) {

    journeyScreen.addEventListener(
        "scroll",
        function () {

            const scrollPosition =
                journeyScreen.scrollTop +
                journeyScreen.clientHeight;

            const pageHeight =
                journeyScreen.scrollHeight;


            if (
                scrollPosition >=
                pageHeight - 100
            ) {

                forwardAction.classList.add(
                    "show"
                );

            }

        }
    );

}


/* =========================================
   OPEN 10 REASONS
========================================= */

if (forwardButton) {

    forwardButton.addEventListener(
        "click",
        function () {

            reasonsScreen.classList.add(
                "active"
            );


            gsap.fromTo(

                ".reason-card",

                {
                    opacity: 0,

                    y: 35
                },

                {
                    opacity: 1,

                    y: 0,

                    duration: 0.8,

                    stagger: 0.15,

                    ease: "power3.out"

                }

            );

        }
    );

}


/* =========================================
   CREATE 24 PHOTO CARDS
========================================= */

if (photoGrid) {

    for (let i = 1; i <= 24; i++) {

        const card =
            document.createElement("div");

        card.className =
            "photo-card";


        card.style.animationDelay =
            `${i * 0.06}s`;


        card.innerHTML = `

            <img
                src="images/${i}.jpg"
                alt="Divanshi memory ${i}"
                loading="lazy"
            >

            <span class="photo-number">
                ${String(i).padStart(2, "0")}
            </span>

        `;


        card.addEventListener(
            "click",
            function () {

                openPhoto(i);

            }
        );


        photoGrid.appendChild(card);

    }

}


/* =========================================
   SHOW LIBRARY BUTTON
========================================= */

if (reasonsScreen) {

    reasonsScreen.addEventListener(
        "scroll",
        function () {

            const scrollPosition =
                reasonsScreen.scrollTop +
                reasonsScreen.clientHeight;

            const pageHeight =
                reasonsScreen.scrollHeight;


            if (
                scrollPosition >=
                pageHeight - 100
            ) {

                libraryAction.classList.add(
                    "show"
                );

            }

        }
    );

}


/* =========================================
   OPEN DIGITAL LIBRARY
========================================= */

if (libraryButton) {

    libraryButton.addEventListener(
        "click",
        function () {

            libraryScreen.classList.add(
                "active"
            );


            gsap.fromTo(

                ".library-content",

                {
                    opacity: 0,

                    y: 60
                },

                {
                    opacity: 1,

                    y: 0,

                    duration: 1.4,

                    ease: "power3.out"

                }

            );

        }
    );

}


/* =========================================
   OPEN PHOTO
========================================= */

function openPhoto(photoNumber) {

    currentPhoto =
        photoNumber;


    lightboxImage.src =
        `images/${currentPhoto}.jpg`;


    photoCounter.textContent =
        `${currentPhoto} / 24`;


    photoLightbox.classList.add(
        "active"
    );

}


/* =========================================
   CLOSE PHOTO
========================================= */

if (closeLightbox) {

    closeLightbox.addEventListener(
        "click",
        function () {

            photoLightbox.classList.remove(
                "active"
            );

        }
    );

}


/* =========================================
   NEXT PHOTO
========================================= */

if (nextPhoto) {

    nextPhoto.addEventListener(
        "click",
        function () {

            currentPhoto++;


            if (currentPhoto > 24) {

                currentPhoto = 1;

            }


            openPhoto(currentPhoto);

        }
    );

}


/* =========================================
   PREVIOUS PHOTO
========================================= */

if (previousPhoto) {

    previousPhoto.addEventListener(
        "click",
        function () {

            currentPhoto--;


            if (currentPhoto < 1) {

                currentPhoto = 24;

            }


            openPhoto(currentPhoto);

        }
    );

}


/* =========================================
   KEYBOARD CONTROLS
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            !photoLightbox ||
            !photoLightbox.classList.contains(
                "active"
            )
        ) {
            return;
        }


        if (event.key === "Escape") {

            photoLightbox.classList.remove(
                "active"
            );

        }


        if (event.key === "ArrowRight") {

            currentPhoto++;

            if (currentPhoto > 24) {
                currentPhoto = 1;
            }

            openPhoto(currentPhoto);

        }


        if (event.key === "ArrowLeft") {

            currentPhoto--;

            if (currentPhoto < 1) {
                currentPhoto = 24;
            }

            openPhoto(currentPhoto);

        }

    }
);


/* =========================================================
   DIVANSHI AWARDS
========================================================= */

const awards = [

    {
        number: "AWARD 01",

        title:
            "MOST UDHAMBAAZ AWARD",

        description:
            "For outstanding achievement in creating chaos wherever you go. 😂",

        winner:
            "Winner: <strong>Divanshi ❤️</strong>"
    },


    {
        number: "AWARD 02",

        title:
            "DRAMA QUEEN OF THE YEAR",

        description:
            "For exceptional performances, unnecessary reactions and award-winning drama. 😂",

        winner:
            "Winner: <strong>Divanshi 👑</strong>"
    },


    {
        number: "AWARD 03",

        title:
            "BEST IN MY LIFE",

        description:
            "There is one award I don't need to think twice about. Some people win awards. You became a part of my life. ❤️",

        winner:
            "Presented to: <strong>Divanshi ❤️</strong>"
    }

];


/* =========================================
   OPEN AWARDS
========================================= */

function openAwards() {

    libraryScreen.classList.remove("active");
    libraryScreen.style.opacity = "0";
    libraryScreen.style.visibility = "hidden";
    libraryScreen.style.pointerEvents = "none";

    if (
        !awardsScreen ||
        awardsOpened
    ) {
        return;
    }


    awardsOpened = true;

    currentAward = 0;

    finalCelebrationPlayed = false;


    console.log(
        "Opening Divanshi Awards"
    );


    /* -------------------------------------
       BLACK TRANSITION
    ------------------------------------- */

    awardsScreen.classList.add(
        "active"
    );


    /* Hide library behind awards */

    if (libraryScreen) {

        gsap.to(
            libraryScreen,
            {
                opacity: 0,

                duration: 0.7,

                ease: "power2.inOut"
            }
        );

    }


    /*
     * Small delay gives the black
     * transition cinematic feel.
     */

    setTimeout(() => {

        awardsScreen.classList.add(
            "opened"
        );


        animateAwardsEntrance();


    }, 250);

}


/* =========================================
   AWARDS ENTRANCE
========================================= */

function animateAwardsEntrance() {

    console.log(
        "Awards cinematic entrance"
    );


    /* Reset */

    gsap.set(
        ".award-content",
        {
            opacity: 0,
            y: 40,
            scale: 0.96
        }
    );


    gsap.set(
        ".award-spotlight",
        {
            opacity: 0,
            scale: 0.5
        }
    );


    gsap.set(
        ".award-trophy",
        {
            opacity: 0,
            y: -180,
            scale: 0.6,
            rotation: -8
        }
    );


    gsap.set(
        [
            awardNumber,
            awardTitle,
            awardDescription,
            awardWinner,
            nextAwardButton
        ],
        {
            opacity: 0,
            y: 20
        }
    );


    /* Curtains open */

    gsap.to(
        ".award-curtain-left",
        {
            xPercent: -100,

            duration: 1.6,

            ease: "power4.inOut"
        }
    );


    gsap.to(
        ".award-curtain-right",
        {
            xPercent: 100,

            duration: 1.6,

            ease: "power4.inOut"
        }
    );


    /* Spotlight */

    gsap.to(
        ".award-spotlight",
        {
            opacity: 1,

            scale: 1,

            duration: 1.4,

            delay: 0.8,

            ease: "power2.out"
        }
    );


    /* Stage glow */

    gsap.fromTo(
        ".award-stage-glow",
        {
            opacity: 0
        },
        {
            opacity: 1,

            duration: 1.5,

            delay: 0.8,

            ease: "power2.out"
        }
    );


    /* Main content */

    gsap.to(
        ".award-content",
        {
            opacity: 1,

            y: 0,

            scale: 1,

            duration: 1.1,

            delay: 0.9,

            ease: "power3.out"
        }
    );


    /* Trophy drops */

    gsap.to(
        ".award-trophy",
        {
            opacity: 1,

            y: 0,

            scale: 1,

            rotation: 0,

            duration: 1.15,

            delay: 1.05,

            ease: "bounce.out",

            onComplete: function () {

                trophyGlow();

            }

        }
    );


    /* Award text */

    setTimeout(() => {

        showAward(
            currentAward,
            true
        );

    }, 1500);


    /* Initial particles */

    setTimeout(() => {

        createAwardParticles(45);

    }, 1300);

}


/* =========================================
   TROPHY GLOW
========================================= */

function trophyGlow() {

    gsap.to(
        ".trophy-glow",
        {
            opacity: 1,

            scale: 1.25,

            duration: 1.2,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"
        }
    );

}


/* =========================================
   SHOW AWARD
========================================= */

function showAward(
    index,
    firstDisplay = false
) {

    if (
        !awards[index]
    ) {
        return;
    }


    const award =
        awards[index];


    /*
     * Remove final state first.
     */

    awardsScreen.classList.remove(
        "final-award"
    );


    /* -------------------------------------
       FIRST DISPLAY
    ------------------------------------- */

    if (firstDisplay) {

        awardNumber.textContent =
            award.number;

        awardTitle.textContent =
            award.title;

        awardDescription.textContent =
            award.description;

        awardWinner.innerHTML =
            award.winner;


        gsap.fromTo(
            [
                awardNumber,
                awardTitle,
                awardDescription,
                awardWinner
            ],
            {
                opacity: 0,

                y: 25
            },
            {
                opacity: 1,

                y: 0,

                duration: 0.8,

                stagger: 0.12,

                ease: "power3.out"
            }
        );


        gsap.fromTo(
            nextAwardButton,
            {
                opacity: 0,

                y: 20
            },
            {
                opacity: 1,

                y: 0,

                duration: 0.7,

                delay: 0.65,

                ease: "power3.out"
            }
        );


        nextAwardButton.textContent =
            "NEXT AWARD →";


        return;
    }


    /* -------------------------------------
       BETWEEN AWARDS
    ------------------------------------- */

    gsap.timeline()

        .to(
            [
                awardNumber,
                awardTitle,
                awardDescription,
                awardWinner,
                nextAwardButton
            ],
            {
                opacity: 0,

                y: 20,

                duration: 0.3,

                stagger: 0.03,

                ease: "power2.in"
            }
        )

        .call(
            function () {

                awardNumber.textContent =
                    award.number;

                awardTitle.textContent =
                    award.title;

                awardDescription.textContent =
                    award.description;

                awardWinner.innerHTML =
                    award.winner;

            }
        )

        .fromTo(
            [
                awardNumber,
                awardTitle,
                awardDescription,
                awardWinner
            ],
            {
                opacity: 0,

                y: -25,

                scale: 0.97
            },
            {
                opacity: 1,

                y: 0,

                scale: 1,

                duration: 0.65,

                stagger: 0.1,

                ease: "power3.out"
            }
        )

        .to(
            nextAwardButton,
            {
                opacity: 1,

                y: 0,

                duration: 0.45,

                ease: "power3.out"
            }
        );


    /* Trophy reaction */

    gsap.timeline()

        .to(
            ".award-trophy",
            {
                scale: 1.12,

                rotation: -3,

                duration: 0.25,

                ease: "power2.out"
            }
        )

        .to(
            ".award-trophy",
            {
                scale: 1,

                rotation: 0,

                duration: 0.5,

                ease: "elastic.out(1,0.5)"
            }
        );


    /* Particles */

    createAwardParticles(
        index === 2
            ? 100
            : 45
    );


    /* -------------------------------------
       FINAL AWARD
    ------------------------------------- */

    if (index === awards.length - 1) {

        libraryScreen.classList.remove("active");
        libraryScreen.style.opacity = "0";
        libraryScreen.style.visibility = "hidden";

        awardsScreen.classList.add(
            "final-award"
        );

        nextAwardButton.textContent =
            "CONTINUE ❤️";


        gsap.to(
            ".award-trophy",
            {
                scale: 1.08,

                duration: 1.4,

                repeat: -1,

                yoyo: true,

                ease: "sine.inOut"
            }
        );

    } else {

        nextAwardButton.textContent =
            "NEXT AWARD →";

    }

}


/* =========================================
   NEXT AWARD
========================================= */

if (nextAwardButton) {

    nextAwardButton.addEventListener(
        "click",
        function () {

            /* -----------------------------
               NEXT AWARD
            ----------------------------- */

            if (
                currentAward <
                awards.length - 1
            ) {

                currentAward++;

                showAward(
                    currentAward
                );

                return;
            }


            /* -----------------------------
               FINAL CELEBRATION
            ----------------------------- */

            if (
                finalCelebrationPlayed
            ) {
                return;
            }


            finalCelebrationPlayed = true;


            playFinalAwardCelebration();

        }
    );

}


/* =========================================
   FINAL AWARD CELEBRATION
========================================= */

function playFinalAwardCelebration() {

    libraryScreen.classList.remove("active");
    libraryScreen.style.opacity = "0";
    libraryScreen.style.visibility = "hidden";
    libraryScreen.style.pointerEvents = "none";

    console.log(
        "Final award celebration"
    );

    /* Hide Library completely */

    if (libraryScreen) {
        libraryScreen.classList.remove("active");

        gsap.set(libraryScreen, {
            opacity: 0,
            visibility: "hidden",
            pointerEvents: "none"
        });
    }


    /* Massive particles */

    createAwardParticles(220);


    /* Trophy explosion */

    gsap.timeline()

        .to(
            ".award-trophy",
            {
                scale: 1.35,

                rotation: 8,

                duration: 0.35,

                ease: "power2.out"
            }
        )

        .to(
            ".award-trophy",
            {
                scale: 1,

                rotation: 0,

                duration: 0.8,

                ease: "elastic.out(1,0.35)"
            }
        );


    /* Screen flash */

    gsap.fromTo(
        awardsScreen,
        {
            backgroundColor:
                "rgba(255,215,120)"
        },
        {
            backgroundColor:
                "rgba(0,0,0)",

            duration: 1.1,

            ease: "power2.out"
        }
    );


    /* Content pulse */

    gsap.to(
        ".award-content",
        {
            scale: 1.04,

            duration: 0.35,

            yoyo: true,

            repeat: 3,

            ease: "power2.inOut"
        }
    );


    /* Button disappears */

    gsap.to(
        nextAwardButton,
        {
            opacity: 0,

            y: 20,

            duration: 0.5
        }
    );


    /*
     * Keep final award visible.
     * Later emotional section can be
     * connected here.
     */

    /* =========================================
   OPEN FINAL BIRTHDAY PAGE
========================================= */

setTimeout(function () {

    console.log(
        "Opening final birthday page"
    );

    if (
        finalBirthdayScreen
    ) {

        finalBirthdayScreen.classList.add(
            "active"
        );

        document.body.style.overflow =
            "hidden";

    }

}, 1800);

}


/* =========================================
   GOLD PARTICLES
========================================= */

function createAwardParticles(amount) {

    if (!awardParticles) {
        return;
    }


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "award-particle";


        const startX =
            window.innerWidth / 2 +
            (Math.random() - 0.5) * 120;


        const startY =
            window.innerHeight / 2 +
            (Math.random() - 0.5) * 100;


        particle.style.left =
            startX + "px";


        particle.style.top =
            startY + "px";


        const size =
            Math.random() * 5 + 2;


        particle.style.width =
            size + "px";


        particle.style.height =
            size + "px";


        particle.style.opacity =
            Math.random() * 0.7 + 0.3;


        awardParticles.appendChild(
            particle
        );


        gsap.to(
            particle,
            {
                x:
                    (Math.random() - 0.5) *
                    window.innerWidth,

                y:
                    (Math.random() - 0.5) *
                    window.innerHeight,

                scale:
                    Math.random() *
                    1.8 + 0.5,

                rotation:
                    Math.random() * 720,

                opacity: 0,

                duration:
                    Math.random() * 2 +
                    1.5,

                delay:
                    Math.random() * 0.2,

                ease:
                    "power2.out",

                onComplete:
                    function () {

                        particle.remove();

                    }

            }
        );

    }

}


/* =========================================
   LIBRARY → AWARDS
========================================= */

if (enterAwardsButton) {

    enterAwardsButton.addEventListener(
        "click",
        function () {

            openAwards();

        }
    );

}


/* =========================================
   DEBUG
========================================= */

console.log(
    "All website functionality initialized"
);

/* =========================================
   FINAL CARD OPEN
========================================= */

if (
    openFinalCardButton &&
    finalBirthdayCard &&
    finalCardScene &&
    finalCakeScene
) {

    openFinalCardButton.addEventListener(
        "click",
        function () {

            finalBirthdayCard.classList.add(
                "opened"
            );

            openFinalCardButton.style.opacity =
                "0";

            openFinalCardButton.style.pointerEvents =
                "none";

            setTimeout(function () {

    finalCardScene.style.opacity =
        "0";

    finalCardScene.style.transform =
        "translateY(-30px)";

}, 5000);

            setTimeout(function () {

                finalCardScene.style.visibility =
                    "hidden";

                finalCardScene.style.pointerEvents =
                    "none";

                finalCakeScene.classList.add(
                    "active"
                );

            }, 5000);

        }
    );

}

/* =========================================
   REAL BLOW DETECTION
========================================= */

if (
    startBlowButton
) {

    startBlowButton.addEventListener(
        "click",
        async function () {

            if (
                finalCandlesBlown ||
                finalBlowDetectionRunning
            ) {
                return;
            }

            if (
                !navigator.mediaDevices ||
                !navigator.mediaDevices.getUserMedia
            ) {

                finalMicStatus.textContent =
                    "Microphone unavailable. Tap the button to continue.";

                startBlowButton.textContent =
                    "EXTINGUISH CANDLES ✨";

                startBlowButton.onclick = function () {
                    extinguishFinalCandles();
                };

                return;
            }

            try {

                finalMicStatus.textContent =
                    "Allow microphone access, then blow toward the candles 💨";

                finalMicStream =
                    await navigator.mediaDevices.getUserMedia({
                        audio: true
                    });

                finalAudioContext =
                    new (
                        window.AudioContext ||
                        window.webkitAudioContext
                    )();

                finalAnalyser =
                    finalAudioContext.createAnalyser();

                finalAnalyser.fftSize = 1024;

                finalMicSource =
                    finalAudioContext.createMediaStreamSource(
                        finalMicStream
                    );

                finalMicSource.connect(
                    finalAnalyser
                );

                finalBlowDetectionRunning =
                    true;

                startBlowButton.textContent =
                    "💨 BLOW NOW";

                finalMicStatus.textContent =
                    "Blow toward the candles...";

                detectFinalBlow();

            } catch (error) {

                console.log(
                    "Microphone error:",
                    error
                );

                finalMicStatus.textContent =
                    "Microphone permission was not available.";

                startBlowButton.textContent =
                    "TAP TO EXTINGUISH ✨";

                startBlowButton.onclick =
                    function () {

                        extinguishFinalCandles();

                    };

            }

        }
    );

}


/* =========================================
   DETECT REAL BLOW
========================================= */

function detectFinalBlow() {

    if (
        !finalBlowDetectionRunning ||
        !finalAnalyser
    ) {
        return;
    }

    const bufferLength =
        finalAnalyser.frequencyBinCount;

    const frequencyData =
        new Uint8Array(bufferLength);

    finalAnalyser.getByteFrequencyData(
        frequencyData
    );


    /*
       Calculate energy in different
       frequency ranges.
    */

    let lowEnergy = 0;
    let midEnergy = 0;
    let highEnergy = 0;

    for (
        let i = 0;
        i < bufferLength;
        i++
    ) {

        const frequency =
            i *
            finalAudioContext.sampleRate /
            finalAnalyser.fftSize;

        const value =
            frequencyData[i];

        if (
            frequency < 500
        ) {

            lowEnergy += value;

        }
        else if (
            frequency < 2000
        ) {

            midEnergy += value;

        }
        else {

            highEnergy += value;

        }

    }


    const lowAverage =
        lowEnergy / bufferLength;

    const midAverage =
        midEnergy / bufferLength;

    const highAverage =
        highEnergy / bufferLength;


    /*
       Blow usually creates stronger
       broadband / high-frequency noise.
    */

    const blowScore =
        highAverage +
        (midAverage * 0.7);


    /*
       Voice usually has stronger
       low/mid frequency energy.
    */

    const isBlow =
        blowScore > 18 &&
        highAverage > lowAverage * 0.7;


    if (
        isBlow
    ) {

        if (
            finalBlowStartTime === 0
        ) {

            finalBlowStartTime =
                performance.now();

        }

        const blowDuration =
            performance.now() -
            finalBlowStartTime;


        if (
            blowDuration > 250
        ) {

            extinguishFinalCandles();

            return;

        }

    }
    else {

        finalBlowStartTime =
            0;

    }


    requestAnimationFrame(
        detectFinalBlow
    );
}




/* =========================================
   EXTINGUISH CANDLES
========================================= */

function extinguishFinalCandles() {

    if (
        finalCandlesBlown
    ) {
        return;
    }

    finalCandlesBlown =
        true;

    finalBlowDetectionRunning =
        false;

    if (
        finalMicStream
    ) {

        finalMicStream
            .getTracks()
            .forEach(function (track) {

                track.stop();

            });

    }

    if (
        finalAudioContext
    ) {

        finalAudioContext.close();

    }

    finalCandles.forEach(
        function (candle, index) {

            setTimeout(
                function () {

                    candle.classList.add(
                        "blown"
                    );

                },
                index * 100
            );

        }
    );

    finalMicStatus.textContent =
        "Wish made. ✨";

    startBlowButton.style.opacity =
        "0";

    startBlowButton.style.pointerEvents =
        "none";

    setTimeout(
        function () {

            showFinalBirthdayMessage();

        },
        1500
    );
}


/* =========================================
   FINAL MESSAGE
========================================= */

function showFinalBirthdayMessage() {

    /* Fade out background music */

if (backgroundMusic) {

    let currentVolume =
        backgroundMusic.volume;

    const fadeInterval =
        setInterval(function () {

            currentVolume -= 0.02;

            if (currentVolume <= 0) {

                currentVolume = 0;

                backgroundMusic.volume = 0;

                backgroundMusic.pause();

                clearInterval(
                    fadeInterval
                );

                return;

            }

            backgroundMusic.volume =
                currentVolume;

        }, 100);

}

    if (
        finalCakeScene
    ) {

        finalCakeScene.style.opacity =
            "0";

        finalCakeScene.style.transform =
            "translateY(-25px)";

        finalCakeScene.style.pointerEvents =
            "none";

    }

    setTimeout(
        function () {

            if (
                finalCakeScene
            ) {

                finalCakeScene.style.visibility =
                    "hidden";

            }

            if (
                finalMessageScene
            ) {

                finalMessageScene.classList.add(
                    "active"
                );

            }

        },
        900
    );
}

/* =========================================
   RESTART WEBSITE
========================================= */

const restartWebsiteButton =
    document.getElementById(
        "restartWebsiteButton"
    );

if (
    restartWebsiteButton
) {

    restartWebsiteButton.addEventListener(
        "click",
        function () {

            window.location.reload();

        }
    );

}