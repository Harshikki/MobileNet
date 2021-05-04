Webcam.set ({
height: 300,
width: 310,
image_format: 'jpg',
jpg_quality: 90,
constraints: {
    facingMode: "environment"
}
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function check(){
    image = document.getElementById("captured_image");
    classifier.classify( image , gotResult );
}

function gotResult(error,results){
if (error){
    console.error(error);
}
else{
    document.getElementById("object_name").innerHTML = results[0].label;
    console.log(results);
}
}