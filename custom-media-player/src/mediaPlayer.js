class MediaPlayer{
    constructor({ video, plugins }) {
        this.media = video
        this.plugins = plugins || []
        this._initPlugins()
      }

    playMedia(){
        this.media.play()
    }
    pauseMedia(){
       this.media.pause()
    }

    mute(){
        this.media.muted = true
    }
    unMute(){
        this.media.muted = false
    }
    sound(volumen){
      this.media.volume = (volumen * 0.1) ** 2
    }
}

export default MediaPlayer