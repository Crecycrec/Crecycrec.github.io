const imageData =[
    {id: "0", className: "", alt: ""},
    {id: "1", className: "txt1", alt: ""},
    {id: "2", className: "", alt: ""},
    {id: "3", className: "", alt: ""},
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
    {id: "1", className: "", alt: ""},
    {id: "2", className: "", alt: ""},
    {id: "3", className: "", alt: ""},
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

let currentIndex = 0;
const carousel = document.getElementById("carousel");
const carousel2 = document.getElementById("carousel2");
const words = document.getElementById("words");
let atoplayInterval = null;
let isPlaying = false;

//Functions that shows the new image in the carousel.
function showImage(index){
    carousel.style.opacity = 1;
    carousel.src = `overflow/Overflow-${imageData[index].id}.png`;
    carousel.alt = imageData[index].alt;
    words.className= imageData[index].className;
}

function showImage2(index){
    carousel2.style.opacity = 1;
    carousel2.src = `overflow/Overflow-${imageData[index+1].id}.png`;
    carousel2.alt = imageData[index+1].alt;
    words.className= imageData[index+1].className;
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

if(currentIndex + 1 == 1){
    words.src = `overflow/Overflowtxt-${imageTxt[1].id}.png`;
} else{
    words.src = ``;
}

showImage(currentIndex);
showImage2(currentIndex);