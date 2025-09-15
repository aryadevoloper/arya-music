// Loading screen
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
  }, 7000);
});

// Search music
const searchInput = document.getElementById("search");
const results = document.getElementById("results");
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

let isPlaying = false;

searchInput.addEventListener("keypress", async (e) => {
  if (e.key === "Enter") {
    const query = searchInput.value.trim();
    if (!query) return;

    const res = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=20`);
    const data = await res.json();

    results.innerHTML = "";
    data.results.forEach(track => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${track.artworkUrl100}" alt="cover">
        <h3>${track.trackName}</h3>
        <p>${track.artistName}</p>
      `;
      card.addEventListener("click", () => {
        audio.src = track.previewUrl;
        cover.src = track.artworkUrl100;
        title.textContent = track.trackName;
        artist.textContent = track.artistName;
        audio.play();
        playPauseBtn.textContent = "⏸️";
        isPlaying = true;
      });
      results.appendChild(card);
    });
  }
});

// Play/pause button
playPauseBtn.addEventListener("click", () => {
  if (!audio.src) return;
  if (isPlaying) {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  } else {
    audio.play();
    playPauseBtn.textContent = "⏸️";
  }
  isPlaying = !isPlaying;
});
