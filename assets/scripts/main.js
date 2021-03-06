// main.js

// TODO
var volume_num = document.getElementById("volume-number");
var volume_slider = document.getElementById("volume-slider");
var volume_img = document.getElementById("volume-image");

volume_num.value = volume_slider.value;
volume_slider.oninput = function() {
    sound.volume = this.value/100;
    volume_num.value = this.value;

    if(this.value >= 67) {
        volume_img.src = "./assets/media/icons/volume-level-3.svg"
        document.getElementById("honk-btn").disabled = false;
    }
    else if(this.value >= 34 && this.value <=66) {
        volume_img.src = "./assets/media/icons/volume-level-2.svg"
        document.getElementById("honk-btn").disabled = false;
    }
    else if(this.value >= 1 && this.value <=33) {
        volume_img.src = "./assets/media/icons/volume-level-1.svg"
        document.getElementById("honk-btn").disabled = false;
    }
    else {
        volume_img.src = "./assets/media/icons/volume-level-0.svg"
        document.getElementById("honk-btn").disabled = true;
    }
}

volume_slider.value = volume_num.value;
volume_num.oninput = function() {
    sound.volume = this.value/100;
    volume_slider.value = this.value;

    if(this.value >= 67) {
        volume_img.src = "./assets/media/icons/volume-level-3.svg"
        document.getElementById("honk-btn").disabled = false;
    }
    else if(this.value >= 34 && this.value <=66) {
        volume_img.src = "./assets/media/icons/volume-level-2.svg"
        document.getElementById("honk-btn").disabled = false;
    }
    else if(this.value >= 1 && this.value <=33) {
        volume_img.src = "./assets/media/icons/volume-level-1.svg"
        document.getElementById("honk-btn").disabled = false;
    }
    else {
        volume_img.src = "./assets/media/icons/volume-level-0.svg"
        document.getElementById("honk-btn").disabled = true;
    }
    
}

var air_horn = document.getElementById("radio-air-horn");
var car_horn = document.getElementById("radio-car-horn");
var party_horn = document.getElementById("radio-party-horn");
var sound = document.getElementById("horn-sound");
var sound_img = document.getElementById("sound-image")

air_horn.oninput = function(){
    sound.src = "./assets/media/audio/air-horn.mp3"
    sound_img.src = "./assets/media/images/air-horn.svg"
}

car_horn.oninput = function(){
    sound.src = "./assets/media/audio/car-horn.mp3"
    sound_img.src = "./assets/media/images/car.svg"
}

party_horn.oninput = function(){
    sound.src = "./assets/media/audio/party-horn.mp3"
    sound_img.src = "./assets/media/images/party-horn.svg"
}

document.getElementById("honk-btn").addEventListener("click", function(honk) {
    honk.preventDefault();
    sound.play();
});
