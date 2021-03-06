function getLs(images) {
    return JSON.parse(localStorage.getItem(images))
}

var images = [];


if (!localStorage.images) {
    instantProducts();
} else {
    var images = getLs('images');
}

var click = 0;


function Items(name, url, id) {
    this.name = name;
    this.url = url;
    this.class =

        this.voteCount = 0;
    this.id = id;

    images.push(this);
}

function instantProducts() {

    var image1 = new Items('bag', 'images/bag.jpg', 'bag');
    var image2 = new Items('banana', 'images/banana.jpg', 'banana');
    var image3 = new Items('bathroom', 'images/bathroom.jpg', 'bathroom');
    var image4 = new Items('boots', 'images/boots.jpg', 'boots');
    var image5 = new Items('breakfast', 'images/breakfast.jpg', 'breakfast');
    var image6 = new Items('bubblegum', 'images/bubblegum.jpg', 'bubblegum');
    var image7 = new Items('chair', 'images/chair.jpg', 'chair');
    var image8 = new Items('cthulhu', 'images/cthulhu.jpg', 'cthulhu');
    var image9 = new Items('dog-duck', 'images/dog-duck.jpg', 'dog-duck');
    var image10 = new Items('dragon', 'images/dragon.jpg', 'dragon');
    var image11 = new Items('pen', 'images/pen.jpg', 'pen');
    var image12 = new Items('pet-sweep', 'images/pet-sweep.jpg', 'pet-sweep');
    var image13 = new Items('scissors', 'images/scissors.jpg', 'scissors');
    var image14 = new Items('shark', 'images/shark.jpg', 'shark');
    var image15 = new Items('sweep', 'images/sweep.png', 'sweep');
    var image16 = new Items('tauntaun', 'images/tauntaun.jpg', 'tauntaun');
    var image17 = new Items('unicorn', 'images/unicorn.jpg', 'unicorn');
    var image18 = new Items('usb', 'images/usb.gif', 'usb');
    var image19 = new Items('water-can', 'images/water-can.jpg', 'water-can');
    var image20 = new Items('wine-glass', 'images/wine-glass.jpg', 'wine-glass');

}
var randomImage = function () {
    var numberItem = Math.floor(Math.random() * (images.length));
    return images[numberItem].url;

}
var createSet = function () {
    var imageSet = [];
    do {
        var imgPath = randomImage();
        if (!imageSet.includes(imgPath)) {

            imageSet.push(imgPath);
        }
    } while (imageSet.length < 3);
    return imageSet;
}


var displayImage = function () {
    var imgPaths = createSet();


    var elImage1 = document.getElementById('pic1');
    elImage1.setAttribute('src', imgPaths[0]);

    var elImage2 = document.getElementById('pic2');
    elImage2.setAttribute('src', imgPaths[1]);

    var elImage3 = document.getElementById('pic3');
    elImage3.setAttribute('src', imgPaths[2]);
}


var display = document.getElementById('display');
display.addEventListener('click', voteHandler, false);

function voteHandler(event) {
    click++


    var clickedEle = event.target;
    addVotes(clickedEle);

    displayImage();

    if (click > 24) {
        alert(" Thank you for your votes today!");
        chart();
        display.removeEventListener('click', voteHandler, false);
        
    }
    saveToLS();

}
function saveToLS() {
    var str = JSON.stringify(images);
    localStorage.setItem('images', str);
}

function addVotes(target) {
    for (i = 0; i < images.length; i++) {
        if (target.src.match(images[i].url)) {
            images[i].voteCount++

        }
    }
}

displayImage();


function chart() {
    var chartVotes = [];
    for (var i = 0; i < images.length; i++) {
        chartVotes.push(images[i].voteCount)
    }

    var chartCanvas = document.getElementById('chart');
    var totalChart = new Chart(chartCanvas, {
        type: 'bar',
        data: {
            labels: ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck',
                'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'],

            datasets: [
                {
                    label: 'votes',
                    data: chartVotes,
                    backgroundColor: [dynamicColors(), dynamicColors(), dynamicColors(), dynamicColors(), dynamicColors(), dynamicColors(), dynamicColors(),
                    dynamicColors(), dynamicColors(), dynamicColors(), dynamicColors(), dynamicColors(), dynamicColors(), dynamicColors(), dynamicColors(),
                    dynamicColors(), dynamicColors(), dynamicColors(), dynamicColors(), dynamicColors(), dynamicColors()],
                }
            ]
        },
        options: {
            scales: {
                yAxis: [{
                    ticks: {
                        beginAtZero: true

                    }
                }]
            }
        }

    })
};

var dynamicColors = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
}

