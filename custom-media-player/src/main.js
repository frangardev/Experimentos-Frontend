const video = document.getElementById('video')
const playButton = document.getElementById('play')
const stopButton = document.getElementById('stop')
const backwardButton = document.getElementById('backward')
const forwardButton = document.getElementById('forward')

import {MediaPlayer} from "./mediaPlayer"
const player = new MediaPlayer(video)

playButton.onclick = () =>  {
    alert("Que pedo")
    if(video.paused){
        alert('hey ')
        player.playMedia()
        playButton.innerHTML = "pause"
   } 
   else{
       alert('um')
        player.pauseMedia()
        playButton.innerHTML = "play"
   }
}
