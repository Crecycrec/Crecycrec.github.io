const imageData =[
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

const imageTxt =[
    {id: "0", className: "anglerTitle", alt: ""},
    {id: "1", className: "pg1R1", alt: ""},
    {id: "2", className: "pg1R1", alt: ""},
    {id: "3", className: "pg2L1", alt: ""},
    {id: "4", className: "pg1R1", alt: ""},
    {id: "5", className: "pg2L1", alt: ""},
    {id: "6", className: "pg1R1", alt: ""},
    {id: "7", className: "pg2L1", alt: ""},
    {id: "8", className: "pg2L1", alt: ""},
    {id: "9", className: "pg2L1", alt: ""},
    {id: "10", className: "pg2L1", alt: ""}
];

let currentIndex = 0;
const carousel = document.getElementById("carousel");
const carousel2 = document.getElementById("carousel2");
const words = document.getElementById("words");
const words2 = document.getElementById("words2");
const words3 = document.getElementById("words3");
var arrowL = document.getElementById("al");
var arrowR = document.getElementById("ar");

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
    carousel.src = `angler/angler-${imageData[index].id}.png`;
    carousel.alt = imageData[index].alt;

    // //Resets all the 'src' tags and the opacity of the imgs on the images to nothing so the bg img doesn't stay if it is not replaced going back or forth.
    // resetSrcOp();

    //just fades in all the text everytime even if it is empty.
    fadeInAnim();

    switch(currentIndex){
        case 0:
            arrowL.setAttribute('disabled', true);
            arrowL.style.opacity = 0;
            words.className= imageTxt[0].className;
            words2.className= imageTxt[1].className;
            words3.className= imageTxt[2].className;
            words.src = `angler/anglertxt-${imageTxt[0].id}.png`;
            words2.src = `angler/anglertxt-${imageTxt[1].id}.png`;
            words3.src = `angler/anglertxt-${imageTxt[2].id}.png`;
            break;
        case 2:
            arrowL.removeAttribute('disabled');
            arrowL.style.opacity = 1;
            words.className= imageTxt[3].className;
            words2.className= imageTxt[4].className;
            words.src = `angler/anglertxt-${imageTxt[3].id}.png`;
            words2.src = `angler/anglertxt-${imageTxt[4].id}.png`;
            break;
        case 4:
            //Left Page
            words.className= imageTxt[5].className;
            words2.className= imageTxt[6].className;
            words.src = `angler/anglertxt-${imageTxt[5].id}.png`;
            words2.src = `angler/anglertxt-${imageTxt[6].id}.png`;
            break;
        case 6:
            //Left Page
            words.className= imageTxt[7].className;
            words.src = `angler/anglertxt-${imageTxt[7].id}.png`;
            break;
        case 8:
            //Left PAge
            words.className= imageTxt[8].className;
            words.src = `angler/anglertxt-${imageTxt[8].id}.png`;
            break;
        case 10:
            words.className= imageTxt[9].className;
            words.src = `angler/anglertxt-${imageTxt[9].id}.png`;
            break;
        case 12:
            arrowR.onclick = function(){nextImage()};
            words.className= imageTxt[10].className;
            words.src = `angler/anglertxt-${imageTxt[10].id}.png`;
            break;
        case 14:
            arrowR.onclick = function(){
                window.open('angler-end.html', '_parent');
            }
            break;
        default:
            //I don't think I need this but I have it hear out of my own paranoia
            arrowL.removeAttribute('disabled');
            arrowL.style.opacity = 1;
            arrowR.onclick = function(){nextImage()};
            // break;
    }
}

function showImage2(index){
    carousel2.style.opacity = 1;
    carousel2.src = `angler/angler-${imageData[index+1].id}.png`;
    carousel2.alt = imageData[index+1].alt;
    // words.className= imageData[index+1].className;
}

function nextImage(){
    //Resets all the 'src' tags and the opacity of the imgs on the images to nothing so the bg img doesn't stay if it is not replaced going back or forth.
    resetSrcOp();
    currentIndex= (currentIndex+2) % imageData.length;
    showImage(currentIndex);
    showImage2(currentIndex);
}
function prevImage(){
    //Resets all the 'src' tags and the opacity of the imgs on the images to nothing so the bg img doesn't stay if it is not replaced going back or forth.
    resetSrcOp();
    currentIndex=(currentIndex-2+imageData.length) % imageData.length;
    showImage(currentIndex);
    showImage2(currentIndex);
    
}

function resetSrcOp(){
    words.setAttribute('src', '');
    words2.setAttribute('src', '');
    words3.setAttribute('src', '');


    words.style.opacity = 0;
    words2.style.opacity = 0;
    words3.style.opacity = 0;
}

function fadeInAnim(){
    unfade(words);
    setTimeout(() => {unfade(words2);}, 300);
    setTimeout(() => {unfade(words3);}, 600);
}

showImage(currentIndex);
showImage2(currentIndex);