document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('bg-music');

  function startMusic() {
    audio.muted = false; // включаем звук
    audio.volume = 1.0;
    audio.play().catch((e) => {
      console.error('Не удалось воспроизвести музыку:', e);
    });

    document.removeEventListener('click', startMusic);
  }

  // Только после клика запускаем музыку
  document.addEventListener('click', startMusic);
});
const Days = document.getElementById('days');
const Hours = document.getElementById('hours');
const Minutes = document.getElementById('minutes');
const Seconds = document.getElementById('seconds');

const targetDate = new Date("July 21 2025 00:00:00").getTime();

function timer () {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if(distance < 0){
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);