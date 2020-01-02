'use strict';

const player = document.querySelector("#player");
const speedSlider = document.querySelector('#speedSlider');
const btnPlay = document.querySelector('#btnPlay');
const btnStop = document.querySelector('#btnStop');
const videoDuration = player.duration;
const speed = document.querySelector('#speed');

const seekbar = document.querySelector('#seekbar');

btnPlay.addEventListener('click', playVideo);
btnStop.addEventListener('click', stopVideo);
speedSlider.addEventListener('change', adjustSpeed);

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