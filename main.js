var nosex = 0;
var nosey = 0;

var leftWrist = 0;
var rightWrist = 0;
var difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(600, 500);
    canvas.position(600, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("poseNet is initialized!");
}
