const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeButton");
const fullScreenBtn = document.getElementById("jsFullScreen")

function handlePlayClick() {
    if(videoPlayer.paused) {
        videoPlayer.play();
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        videoPlayer.pause();
        playBtn.innerHTML = `<i class="fas fa-play"></i>`;
    }
}

function handleVolumeClick() {
    videoPlayer.muted = !videoPlayer.muted; 
    volumeBtn.innerHTML = videoPlayer.muted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>'
}

function exitFullScreenClick() {
    fullScreenBtn.innerHTML = `<i class="fas fa-expand"></i>`;
    fullScreenBtn.addEventListener("click", goFullScreenClick);
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if(document.webkitExitFullScreen) {
        document.webkitExitFullScreen();
    } else if (document.msExitFullScreen) {
        document.msExitFullScreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
}

function goFullScreenClick() {
    if(videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
    } else if(videoContainer.mozRequestFullScreen) {
        videoContainer.mozRequestFullScreen();
    } else if (videoContainer.webkitRequestFullScreen) {
        videoContainer.webkitRequestFullScreen();
    } else if (videoContainer.msRequestFullScreen) {
        videoContainer.msRequestFullScreen();
    }
    fullScreenBtn.innerHTML = `<i class="fas fa-compress"></i>`;
    fullScreenBtn.removeEventListener("click", goFullScreenClick);
    fullScreenBtn.addEventListener("click", exitFullScreenClick);
}

function init() {
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click", handleVolumeClick);
    fullScreenBtn.addEventListener("click", goFullScreenClick);
}

if (videoContainer) {
    init();
}