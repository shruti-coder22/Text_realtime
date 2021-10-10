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

function draw() {
    background("#20B2AA");
    let div = createDiv('Shruti');
    div.style('font-size', difference);
    div.position(nosex, nosey);


    document.getElementById("text_size").innerHTML = "The text's size is " + difference + " px."
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;

        leftWrist = results[0].pose.leftWrist.x;
        rightWrist = results[0].pose.rightWrist.y;
        difference = floor(rightWrist - leftWrist);

        if(difference < 0) {
            difference = difference * -1;
        }

        console.log("Nose X = " + nosex);
        console.log("Nose Y = " + nosey);
        console.log("Left Wrist = " + leftWrist);
        console.log("Right Wrist = " + rightWrist);
        console.log("Difference = " + difference);
    }
}