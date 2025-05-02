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
    {id: "0", className: "oceantitle", alt: ""}
]

let currentIndex = 0;
const carousel = document.getElementById("carousel");
const carousel2 = document.getElementById("carousel2");
const words = document.getElementById("words");
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
    carousel.src = `ocean/ocean-${imageData[index].id}.png`;
    carousel.alt = imageData[index].alt;

    // //Resets all the 'src' tags and the opacity of the imgs on the images to nothing so the bg img doesn't stay if it is not replaced going back or forth.
    // resetSrcOp();

    //just fades in all the text everytime even if it is empty.
    fadeInAnim();

    if(currentIndex==0){
        arrowL.setAttribute('disabled', true);
        arrowL.style.opacity = 0;
        words.className= imageTxt[0].className;
        words.src = `ocean/oceantxt-${imageTxt[0].id}.png`;
    } else if(currentIndex==14){
        arrowR.onclick = function(){
            window.open('ocean-end.html', '_parent');
        }
    } else{
        arrowL.removeAttribute('disabled');
        arrowL.style.opacity = 1;
        arrowR.onclick = function(){nextImage()};
    }
}

function showImage2(index){
    carousel2.style.opacity = 1;
    carousel2.src = `ocean/ocean-${imageData[index+1].id}.png`;
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
    words.style.opacity = 0;
}

function fadeInAnim(){
    unfade(words);
}

showImage(currentIndex);
showImage2(currentIndex);