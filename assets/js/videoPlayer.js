const videoContainer = document.getElementById("jsVideoPlayer");
const videoPlayer = document.querySelector("#jsVideoPlayer video");
const playBtn = document.getElementById("jsPlayButton");
const volumeBtn = document.getElementById("jsVolumeButton");
const fullScreenBtn = document.getElementById("jsFullScreen");
const currentTime = document.getElementById("currentTime");
const totalTime = document.getElementById("totalTime");
const volumeRange = document.getElementById("jsVolume");

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
    volumeRange.value = videoPlayer.muted ? 0 : videoPlayer.volume;
}

const formatDate = seconds => {
    const secondsNumber = parseInt(seconds, 10);
    let hours = Math.floor(secondsNumber / 3600);
    let minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    let totalSeconds = secondsNumber - hours * 3600 - minutes * 60;

    if(hours < 10) {
        hours = `0${hours}`;
    }

    if(minutes < 10) {
        minutes = `0${minutes}`;
    }

    if(seconds < 10) {
        totalSeconds = `0${totalSeconds}`;
    }

    return `${hours}:${minutes}:${totalSeconds}`;
}

function getCurrentTime() {
    currentTime.innerHTML = formatDate(Math.floor(videoPlayer.currentTime));
}

function setTotalTime() {
    const totalTimeString = formatDate(videoPlayer.duration);
    totalTime.innerHTML = totalTimeString;
    setInterval(getCurrentTime, 1000);
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

function handleEnded() {
    videoPlayer.currentTime = 0;
    playBtn.innerHTML = `<i class="fas fa-play"></i>`;
}

function handleDrag(event) {
    
    const {
        target: { value } 
    } = event;

    videoPlayer.volume = value;

    if(value >= 0.6) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-up"></i>'
    } else if(value >= 0.3) {
        volumeBtn.innerHTML = '<i class="fas fa-volume-down"></i>'
    } else {
        volumeBtn.innerHTML = '<i class="fas fa-volume-off"></i>'
    }
}

function init() {
    videoPlayer.volume = 0.5;
    playBtn.addEventListener("click", handlePlayClick);
    volumeBtn.addEventListener("click", handleVolumeClick);
    fullScreenBtn.addEventListener("click", goFullScreenClick);
    videoPlayer.addEventListener("loadedmetadata", setTotalTime);
    videoPlayer.addEventListener("ended", handleEnded);
    volumeRange.addEventListener("input", handleDrag);
}

if (videoContainer) {
    init();
}