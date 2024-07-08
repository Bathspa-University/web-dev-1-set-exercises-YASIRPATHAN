const sampleButtons = document.querySelectorAll('.sample-button');
const sampleAudios = document.querySelectorAll('.sample-audio');

sampleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        sampleAudios.forEach(audio => audio.pause());
        sampleAudios[index].currentTime = 0;
        sampleAudios[index].play();
    });
});