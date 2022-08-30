Webcam.set({
    width:350,
    height:290,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/gyt_2dLJJ/model.json'),modelLoaded;

function modelLoaded() {
    console.log('Model Loaded!');
}

function check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }   else {
        console.log(results);
        document.getElementById("result_gesture_name").innnerHTML = results[0].label;
        prediction = results[0].label;
        speak();
        if(results[0].label == "Waving hand")
        {
            document.getElementById("update_gesture").innerHTML = "&#128075";
        }
        if(results[0].label == "Peace sign")
        {
            document.getElementById("update_gesture").innerHTML = "&#128528";
        }
        if(results[0].label == "Thumbs up")
        {
            document.getElementById("update_gesture").innerHTML = "&#128077";
        }
        if(results[0].label == "Thumbs down")
        {
            document.getElementById("update_gesture").innerHTML = "&#128078";
        }
    }
}