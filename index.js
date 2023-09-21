const title = document.querySelector('.title');
const prev = document.querySelector('.prev');
const playPause = document.querySelector('.playPause');
const next = document.querySelector('.next');
const audio = document.querySelector('audio');

// create song list

const songList = [
    {
        path: "songs/beauteous-upbeat-electronic-162757.mp3",
        songName: "beauteous upbeat electronic",
    },
    {
        path: "songs/futuristic-beat-146661.mp3",
        songName: "futuristic beat",
    },
    {
        path: "songs/good-night-160166.mp3",
        songName: "good night",
    },
    {
        path: "songs/trap-future-bass-royalty-free-music-167020.mp3",
        songName: "trap future bass royalty",
    },
    {
        path: "songs/tvari-tokyo-cafe-159065.mp3",
        songName: "tvari tokyo cafe",
    },
];

let song_playing = false;

// play song
function playSong() {
    song_playing = true;
    audio.play();
    playPause.classList.add('active');
    // change icon while playing
    playPause.innerHTML = '<ion-icon name="pause-circle-outline"></ion-icon>';
}

// pause song
function pauseSong() {
    song_playing = false;
    audio.pause();
    playPause.classList.remove('active');
    // change icon when pause
    playPause.innerHTML = '<ion-icon name="play-outline"></ion-icon>';
}

// on click play or pause song
playPause.addEventListener("click", () => (song_playing ?
pauseSong() : playSong()));

// load song from songList
function loadSong(songList) {
    title.textContent = songList.songName;
    audio.src = songList.path;
}

// current song
let i = 0;
// on load - select first song from song list

loadSong(songList[i]);

// previous songs
function prevSong() {
    i--;
    if (i < 0) {
        i = songList.length - 1;
    }
    loadSong(songList[i]);
    playSong();
}
prev.addEventListener("click", prevSong);

// next songs
function nextSong() {
    i++;
    if (i > songList.length) {
        i = 0;
    }
    loadSong(songList[i]);
    playSong();
}
next.addEventListener("click", nextSong);