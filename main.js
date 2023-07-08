status = "";
object = [];

function preload() {
    audio = loadSound("alert_alarm.wav");
}
function setup() {    
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);    
    video.hide()
}
function start(){
    if (status != "person") {
        for (i = 0; i < object.length; i++) {
            object.detector = ml5.objectDetector("cocossd",modelLoaded);
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Baby Found" + objects.length;
            audio.stop();
        }
    }
    else {
        document.getElementById("number_of_objects").innerHTML = "Person Not Found" + objects.length;
        audio.play();
    }
}
  
    function draw() {
        image(video,0,0,380,380);
    }
    function modelLoaded(){
        console.log("modelLoaded");
        status = true
    }

