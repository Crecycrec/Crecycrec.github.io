const imageData =[
    {id: "0", className: "txtr", alt: ""},
    {id: "1", className: "txtl", alt: ""},
    {id: "2", className: "txtl", alt: ""},
    {id: "3", className: "txtr", alt: ""},
    {id: "4", className: "", alt: ""},
    {id: "5", className: "", alt: ""},
    {id: "6", className: "", alt: ""},
    {id: "7", className: "", alt: ""},
    {id: "8", className: "", alt: ""},
    {id: "9", className: "", alt: ""},
    {id: "10", className: "", alt: ""},
    {id: "11", className: "", alt: ""},
    {id: "12", className: "", alt: ""},
    {id: "13", className: "", alt: ""},
    {id: "14", className: "", alt: ""},
    {id: "15", className: "", alt: ""}
];

const imageTxt =[
    {id: "0", className: "", alt: ""},
    {id: "1", className: "ovTitle", alt: ""},
    {id: "2", className: "", alt: ""},
    {id: "3", className: "", alt: ""},
    {id: "4", className: "", alt: ""},
    {id: "5", className: "", alt: ""},
    {id: "6", className: "pg4R", alt: ""},
    {id: "7", className: "pg4R2", alt: ""},
    {id: "8", className: "", alt: ""},
    {id: "9", className: "", alt: ""},
    {id: "10", className: "", alt: ""},
    {id: "11", className: "", alt: ""},
    {id: "12", className: "", alt: ""},
    {id: "13", className: "", alt: ""},
    {id: "14", className: "", alt: ""},
    {id: "15", className: "", alt: ""}
];

let currentIndex = 0;
const carousel = document.getElementById("carousel");
const carousel2 = document.getElementById("carousel2");
const words = document.getElementById("words");
const words2 = document.getElementById("words2");
const words3 = document.getElementById("words3");
const words4 = document.getElementById("words4");
const words5 = document.getElementById("words5");
const words6 = document.getElementById("words6");
const words7 = document.getElementById("words7");
const words8 = document.getElementById("words8");
const words9 = document.getElementById("words9");
var arrowL = document.getElementById("al");
let atoplayInterval = null;
let isPlaying = false;

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 20);
}

//Functions that shows the new image in the carousel.
function showImage(index){
    carousel.style.opacity = 1;
    carousel.src = `overflow/Overflow-${imageData[index].id}.png`;
    carousel.alt = imageData[index].alt;
    // words.className= imageData[index].className;
    // words2.className= imageData[index].className;
    // words3.className= imageData[index].className;
    // words4.className= imageData[index].className;
    // words5.className= imageData[index].className;
    // words6.className= imageData[index].className;
    // words7.className= imageData[index].className;
    // words8.className= imageData[index].className;
    // words9.className= imageData[index].className;
    words.setAttribute('src', '');
    words2.setAttribute('src', '');
    words3.setAttribute('src', '');
    words4.setAttribute('src', '');
    words5.setAttribute('src', '');
    words6.setAttribute('src', '');
    words7.setAttribute('src', '');
    words8.setAttribute('src', '');
    words9.setAttribute('src', '');

    if(currentIndex == 0){
        arrowL.setAttribute('disabled', true);
        arrowL.style.opacity = 0;
    } else if(currentIndex > 0){
        arrowL.removeAttribute('disabled');
        arrowL.style.opacity = 1;
    }

    if(currentIndex + 1 == 1){
        unfade(words);
        words.className= imageTxt[1].className;
        words.src = `overflow/Overflowtxt-${imageTxt[1].id}.png`;
    } else if(currentIndex == 2){
        // LEft PAge
        unfade(words);
        unfade(words2);
        unfade(words3);
        unfade(words4);
        words.className= imageData[index].className;
        words2.className= imageData[index].className;
        words3.className= imageData[index].className;
        words4.className= imageData[index].className;
        words.src = `overflow/Overflowtxt-${imageTxt[2].id}.png`;
        words2.src = `overflow/Overflowtxt-${imageTxt[3].id}.png`;
        words3.src = `overflow/Overflowtxt-${imageTxt[4].id}.png`;
        words4.src = `overflow/Overflowtxt-${imageTxt[5].id}.png`;

        // Right page
        unfade(words5);
        unfade(words6);
        words5.className= imageTxt[6].className;
        words6.className= imageTxt[7].className;
        words5.src = `overflow/Overflowtxt-${imageTxt[6].id}.png`;
        words6.src = `overflow/Overflowtxt-${imageTxt[7].id}.png`;
    } else{
        words.setAttribute('src', '');
        words2.setAttribute('src', '');
        words2.setAttribute('src', '');
    }
}

function showImage2(index){
    carousel2.style.opacity = 1;
    carousel2.src = `overflow/Overflow-${imageData[index+1].id}.png`;
    carousel2.alt = imageData[index+1].alt;
    // words.className= imageData[index+1].className;
}

function nextImage(){
    currentIndex= (currentIndex+2) % imageData.length;
    showImage(currentIndex);
    showImage2(currentIndex);
}
function prevImage(){
    currentIndex=(currentIndex-2+imageData.length) % imageData.length;
    showImage(currentIndex);
    showImage2(currentIndex);
    
}



showImage(currentIndex);
showImage2(currentIndex);