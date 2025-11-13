
// let loading = document.getElementById ("loading");
// let closeLoading = document.getElementById ("close-loading");


// let time = setTimeout(() => {
//     loading.classList.add ("hidden")
// }, 5000);

// closeLoading.addEventListener ("click" , function() {
//     clearTimeout(time);
// })

// let  a = 60;
// let timeInput = document.getElementById ("time-input");

// setInterval (() => {
//     let time = new Date ()
//     console.log(time);
    
//     console.log(currentTime);
//     console.log(timeInput);
    
//     if ("20:39:40" === currentTime) {
//         console.log("Turrrr");
        
//     }
    
// } , 5000)


let pausBtn = document.getElementById("pause-alarm")
let playBtn = document.getElementById("play-alarm")
let audio = document.getElementById("audio")
let alarmTime = document.getElementById("alarm")
let selectedTime;



alarmTime.addEventListener("submit", function (e) {
    e.preventDefault()

    selectedTime = e.target[0].value

})

playBtn.addEventListener("click", function () {
    audio.play();
});



let stopAlarm = setInterval(() => {

    let date = new Date()
    let time = date.toTimeString().split(" ")[0]
    let realTime = time.split(":").splice(0, 2).join(":")
    console.log(time);
    console.log(realTime);


    if (selectedTime === realTime) {
        audio.play()
    }
}, 1000);

pausBtn.addEventListener("click", function () {
    audio.pause()
    clearInterval(stopAlarm)
})