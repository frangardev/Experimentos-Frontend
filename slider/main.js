// const sliderImg = document.querySelector('#slider__container')
// const slider = document.querySelector('#slider')
const cantidadImg = document.querySelectorAll('#slider .slider__img').length

console.log(cantidadImg);

class Slider {
    constructor(selector){
        // para que this no cambie
        this.move = this.move.bind(this)
        
        this.slider = document.querySelector(selector)
        this.interval = null
        this.position = 0
        this.start()
    }
    start(){
        this.interval = window.setInterval(this.move, 3000) 
    }
    move(){
        this.position += 1
        if(this.position > cantidadImg -1) this.position = 0
        this.moveTo(this.position)
    }
    moveTo(index){
        let left = index * 100
        this.slider.style.left = `-${left}%`
    }
}

new Slider('#slider')
