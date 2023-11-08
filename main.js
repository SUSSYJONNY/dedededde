function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/-DuxCYDX9/model.json', modelRead);
}
function modelRead() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.error("gotResults")
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear you, I can see you...' + results[0].label;
        document.getElementById("result_cofidence").innerHTML = "It's me" + (results[0].cofidence * 100).toFixed(2) + "%";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        img = document.getElementById('Freddy');
        img1 = document.getElementById('Bonnie');
        img2 = document.getElementById('Chica');
        img3 = document.getElementById('Foxy');
        if (results[0].label == "music box") {
            img.src = 'freddyfazbear-fnaf.gif'
            img1.src = 'Bonnie'
            img2.src = 'Chica'
            img3.src = 'Foxy'
        }
        else if (results[0].label == "bonnie breath") {
            img.src = 'Freddy'
            img1.src = 'bonnie.gif'
            img2.src = 'Chica'
            img3.src = 'Foxy'
        }
        else if (results[0].label == "pots and pans") {
            img.src = 'Freddy'
            img1.src = 'Bonnie'
            img2.src = 'chica-fnaf.gif'
            img3.src = 'Foxy'
        }
        else   {
            img.src = 'Freddy'
            img1.src = 'Bonnie'
            img2.src = 'Chica'
            img3.src = 'Foxy.gif'
        }
    }

}
