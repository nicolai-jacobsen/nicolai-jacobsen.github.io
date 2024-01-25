const notifierButton = document.getElementById("notifierButton")

notifierButton.addEventListener('click', function(){
    document.getElementById("popup").style.display = 'block';
})

const closeButton = document.getElementById('close-popup-btn')

closeButton.addEventListener('click', function(){
    document.getElementById("popup").style.display = 'none';
})

document.addEventListener("DOMContentLoaded", function() {
    var images = [
        'images/photo1.JPG',
        'images/photo2.jpg',
    ];

    var currentIndex = 0;
    var imgElement = document.getElementById('rotating-image');

    setInterval(function() {
        currentIndex++;
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        imgElement.src = images[currentIndex];
    }, 5000);
});