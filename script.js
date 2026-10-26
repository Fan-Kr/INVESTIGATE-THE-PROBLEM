const audio = document.getElementById("bgm");
const scareSound = document.getElementById("scareSound");

audio.volume = 1.0;
scareSound.volume = 100.0;

const flash = document.getElementById("flash");

function randomFlash() {
    // Tunggu antara 0.5 hingga 4 saat
    const delay = Math.random() * 3500 + 500;

    setTimeout(() => {
        flash.style.opacity = "1";

        // Flash selama 80 milisaat
        setTimeout(() => {
            flash.style.opacity = "0";

            // Kadang-kadang flash sekali lagi
            if (Math.random() < 0.3) {
                setTimeout(() => {
                    flash.style.opacity = "1";

                    setTimeout(() => {
                        flash.style.opacity = "0";
                        randomFlash();
                    }, 80);
                }, 100);
            } else {
                randomFlash();
            }
        }, 80);
    }, delay);
}