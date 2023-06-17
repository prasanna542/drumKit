// alert("hello");
// for(var i=0;i<7;i++){
document.querySelectorAll(".drum")[0].addEventListener("click", function () {

    // alert("i got clicked");
    var audio = new Audio("tom-1.mp3");
    audio.play();
    document.querySelector(".w").classList.add("pressed");
    setTimeout(function () {
        document.querySelector(".w").classList.remove("pressed");
    }, 100);
});

document.querySelectorAll(".drum")[1].addEventListener("click", function () {

    // alert("i got clicked");
    var audio = new Audio("tom-2.mp3");
    audio.play();
    document.querySelector(".a").classList.add("pressed");
    setTimeout(function () {
        document.querySelector(".a").classList.remove("pressed");
    }, 100);
});

document.querySelectorAll(".drum")[2].addEventListener("click", function () {

    // alert("i got clicked");
    var audio = new Audio("tom-3.mp3");
    audio.play();
    document.querySelector(".s").classList.add("pressed");
    setTimeout(function () {
        document.querySelector(".s").classList.remove("pressed");
    }, 100);
});

document.querySelectorAll(".drum")[3].addEventListener("click", function () {

    // alert("i got clicked");
    var audio = new Audio("tom-4.mp3");
    audio.play();
    document.querySelector(".d").classList.add("pressed");
    setTimeout(function () {
        document.querySelector(".d").classList.remove("pressed");
    }, 100);
});

document.querySelectorAll(".drum")[4].addEventListener("click", function () {

    // alert("i got clicked");
    var audio = new Audio("snare.mp3");
    audio.play();
    document.querySelector(".j").classList.add("pressed");
    setTimeout(function () {
        document.querySelector(".j").classList.remove("pressed");
    }, 100);
});

document.querySelectorAll(".drum")[5].addEventListener("click", function () {

    // alert("i got clicked");
    var audio = new Audio("crash.mp3");
    audio.play();
    document.querySelector(".k").classList.add("pressed");
    setTimeout(function () {
        document.querySelector(".k").classList.remove("pressed");
    }, 100);
});

document.querySelectorAll(".drum")[6].addEventListener("click", function () {

    // alert("i got clicked");
    var audio = new Audio("kick-bass.mp3");
    audio.play();
    document.querySelector(".l").classList.add("pressed");
    setTimeout(function () {
        document.querySelector(".l").classList.remove("pressed");
    }, 100);
});
// ===============================================================================================================================================
// to check the key which is pressed.

document.addEventListener("keypress", function (event) {
    switch (event.key) {
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            document.querySelector(".w").classList.add("pressed");
            setTimeout(function () {
                document.querySelector(".w").classList.remove("pressed");
            }, 100);
            break;

        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            document.querySelector(".a").classList.add("pressed");
            setTimeout(function () {
                document.querySelector(".a").classList.remove("pressed");
            }, 100);
            break;

        case "s":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            document.querySelector(".s").classList.add("pressed");
            setTimeout(function () {
                document.querySelector(".s").classList.remove("pressed");
            }, 100);
            break;

        case "d":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            document.querySelector(".d").classList.add("pressed");
            setTimeout(function () {
                document.querySelector(".d").classList.remove("pressed");
            }, 100);
            break;

        case "j":
            var audio = new Audio("snare.mp3");
            audio.play();
            document.querySelector(".j").classList.add("pressed");
            setTimeout(function () {
                document.querySelector(".j").classList.remove("pressed");
            }, 100);
            break;

        case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
            document.querySelector(".k").classList.add("pressed");
            setTimeout(function () {
                document.querySelector(".k").classList.remove("pressed");
            }, 100);
            break;

        case "l":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            document.querySelector(".l").classList.add("pressed");
            setTimeout(function () {
                document.querySelector(".l").classList.remove("pressed");
            }, 100);
            break;

        default:
            alert("nothing is presseed");
            break;

    }

});



// }