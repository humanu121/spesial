// delay possible clicks until page is turned
document.getElementById('book').addEventListener('click', function(e) {
    e = this
    e.style.pointerEvents = "none"
    setTimeout(function(){
      e.style.pointerEvents = ""
    }, 2000)
  })
  document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-music");
    
    // Auto-play handling for browsers that block autoplay
    const playMusic = () => {
        audio.play().catch(() => {
            console.log("User interaction needed for audio autoplay.");
        });
    };

    // Start playing when user interacts with the page
    document.body.addEventListener("click", playMusic, { once: true });
    document.body.addEventListener("touchstart", playMusic, { once: true });
});

