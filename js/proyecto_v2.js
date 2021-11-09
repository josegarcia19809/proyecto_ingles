"use strict"
const btnAudioBR = document.querySelector("#audio_br");
const btnAudioAM = document.querySelector("#audio_am");

btnAudioBR.addEventListener("click", function (e) {
    e.preventDefault();
    const audio = new Audio("audio/police_gb_1.mp3");
    audio.play();
});

btnAudioAM.addEventListener("click", function (e) {
    e.preventDefault();
    const audio = new Audio("audio/police_us_1.mp3");
    audio.play();
});


