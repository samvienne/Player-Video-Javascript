'use strict';

const player = document.querySelector("#player");
const speedSlider = document.querySelector('#speedSlider');
const btnPlay = document.querySelector('#btnPlay');
const btnStop = document.querySelector('#btnStop');
const videoDuration = player.duration;
const speed = document.querySelector('#speed');
const seekbar = document.querySelector('#seekbar');

/* functions */

function playVideo(evt){
	if(player.paused){
		player.play();
		btnPlay.innerText = 'Pause';
	} else{
		player.pause();
		btnPlay.innerText = 'Play';
	}
}

function stopVideo(evt){
	player.currentTime = 0;
}

function adjustSpeed(evt){
	const currentPlaybackRate = evt.target.value;
	speed.innerHTML = `${currentPlaybackRate}X`;
	player.playbackRate = currentPlaybackRate;
}

function setupSeekbar(){
	seekbar.max = player.duration;
}

function seekVideo(){
	player.currentTime = seekbar.value; /* same as evt.target.value */
}

function updateUI(){
	seekbar.value = video.currentTime;
}

/* events */

btnPlay.addEventListener('click', playVideo);
btnStop.addEventListener('click', stopVideo);
speedSlider.addEventListener('change', adjustSpeed);
player.addEventListener('durationchange', setupSeekbar);
seekbar.addEventListener('change', seekVideo);
seekbar.addEventListener('timeupdate', updateUI);
