//playing and pausing video when the page is or not minimized
window.onfocus = () => document.getElementById('video').play();
window.onblur = () => document.getElementById('video').pause();

// button to mute and unmute video audio
function muteVideo() {
    if (document.getElementById('video').muted == true){
        document.getElementById('video').muted = false
        document.getElementById('mute-button-image').setAttribute('src', '../public/icons/sound-icon.png')
    } else {
        document.getElementById('video').muted = true
        document.getElementById('mute-button-image').setAttribute('src', '../public/icons/muted-icon.png')
    }
}


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    nav: false,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})