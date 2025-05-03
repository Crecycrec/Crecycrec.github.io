const imageData =[
    {id: "x", className: "", alt: ""},
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
    {id: "10", className: "", alt: ""}
];

const imageTxt =[
    {id: "0", className: "shoaltitle", alt: ""},
    {id: "1", className: "pg1L1", alt: ""},
    {id: "2", className: "pg1L2", alt: ""},
    {id: "3", className: "pg1L3", alt: ""},
    {id: "4", className: "pg1L4", alt: ""},
    {id: "5", className: "pg2R1", alt: ""},
    {id: "6", className: "pg2R2", alt: ""},
    {id: "7", className: "pg3L1", alt: ""},
    {id: "8", className: "pg3L2", alt: ""},
    {id: "9", className: "pg3L3", alt: ""},
    {id: "10", className: "pg3L4", alt: ""},
    {id: "11", className: "pg3L5", alt: ""},
    {id: "12", className: "pg3L6", alt: ""},
    {id: "13", className: "pg4R1", alt: ""},
    {id: "14", className: "pg4R2", alt: ""},
    {id: "15", className: "pg4R3", alt: ""},
    {id: "16", className: "pg4R3", alt: ""},
    {id: "17", className: "pg5L1", alt: ""},
    {id: "18", className: "pg5L2", alt: ""},
    {id: "19", className: "pg5L3", alt: ""},
    {id: "20", className: "pg6R1", alt: ""},
    {id: "21", className: "pg6R2", alt: ""},
    {id: "22", className: "pg6R3", alt: ""},
    {id: "23", className: "pg6R4", alt: ""},
    {id: "24", className: "pg7L1", alt: ""},
    {id: "25", className: "pg8R1", alt: ""},
    {id: "26", className: "pg8R2", alt: ""},
    {id: "27", className: "pg8R3", alt: ""},
    {id: "28", className: "pg8R4", alt: ""},
    {id: "29", className: "pg8R5", alt: ""},
    {id: "30", className: "pg9L1", alt: ""},
    {id: "31", className: "pg9L2", alt: ""},
    {id: "32", className: "pg9L3", alt: ""},
    {id: "33", className: "pg10R1", alt: ""}
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
const words10 = document.getElementById("words10");
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
    carousel.src = `shoal/shoal-${imageData[index].id}.png`;
    carousel.alt = imageData[index].alt;

    // //Resets all the 'src' tags and the opacity of the imgs on the images to nothing so the bg img doesn't stay if it is not replaced going back or forth.
    resetSrcOp();

    //just fades in all the text everytime even if it is empty.
    fadeInAnim();

    switch(currentIndex){
        case 0:
            arrowL.setAttribute('disabled', true);
            arrowL.style.opacity = 0;
            carousel.style.border = 0;
            words.className= imageTxt[0].className;
            words.src = `shoal/shoaltxt-${imageTxt[0].id}.png`;
            break;
        case 2:
            arrowL.removeAttribute('disabled');
            arrowL.style.opacity = 1;
            carousel.style.border = "2px solid #2F0000";
            words.className= imageTxt[1].className;
            words2.className= imageTxt[2].className;
            words3.className= imageTxt[3].className;
            words4.className= imageTxt[4].className;
            words5.className= imageTxt[5].className;
            words6.className= imageTxt[6].className;
            words.src = `shoal/shoaltxt-${imageTxt[1].id}.png`;
            words2.src = `shoal/shoaltxt-${imageTxt[2].id}.png`;
            words3.src = `shoal/shoaltxt-${imageTxt[3].id}.png`;
            words4.src = `shoal/shoaltxt-${imageTxt[4].id}.png`;
            words5.src = `shoal/shoaltxt-${imageTxt[5].id}.png`;
            words6.src = `shoal/shoaltxt-${imageTxt[6].id}.png`;
            break;
        case 4:
            //Left Page
            words.className= imageTxt[7].className;
            words2.className= imageTxt[8].className;
            words3.className= imageTxt[9].className;
            words4.className= imageTxt[10].className;
            words5.className= imageTxt[11].className;
            words6.className= imageTxt[12].className;
            words7.className= imageTxt[13].className;
            words8.className= imageTxt[14].className;
            words9.className= imageTxt[15].className;
            words10.className= imageTxt[16].className;
            words.src = `shoal/shoaltxt-${imageTxt[7].id}.png`;
            words2.src = `shoal/shoaltxt-${imageTxt[8].id}.png`;
            words3.src = `shoal/shoaltxt-${imageTxt[9].id}.png`;
            words4.src = `shoal/shoaltxt-${imageTxt[10].id}.png`;
            words5.src = `shoal/shoaltxt-${imageTxt[11].id}.png`;
            words6.src = `shoal/shoaltxt-${imageTxt[12].id}.png`;
            words7.src = `shoal/shoaltxt-${imageTxt[13].id}.png`;
            words8.src = `shoal/shoaltxt-${imageTxt[14].id}.png`;
            words9.src = `shoal/shoaltxt-${imageTxt[15].id}.png`;
            words10.src = `shoal/shoaltxt-${imageTxt[16].id}.png`;
            break;
        case 6:
            words.className= imageTxt[17].className;
            words2.className= imageTxt[18].className;
            words3.className= imageTxt[19].className;
            words4.className= imageTxt[20].className;
            words5.className= imageTxt[21].className;
            words6.className= imageTxt[22].className;
            words7.className= imageTxt[23].className;
            words.src = `shoal/shoaltxt-${imageTxt[17].id}.png`;
            words2.src = `shoal/shoaltxt-${imageTxt[18].id}.png`;
            words3.src = `shoal/shoaltxt-${imageTxt[19].id}.png`;
            words4.src = `shoal/shoaltxt-${imageTxt[20].id}.png`;
            words5.src = `shoal/shoaltxt-${imageTxt[21].id}.png`;
            words6.src = `shoal/shoaltxt-${imageTxt[22].id}.png`;
            words7.src = `shoal/shoaltxt-${imageTxt[23].id}.png`;
            break;
        case 8:
            //Left PAge
            words.className= imageTxt[24].className;
            words2.className= imageTxt[25].className;
            words3.className= imageTxt[26].className;
            words4.className= imageTxt[27].className;
            words5.className= imageTxt[28].className;
            words6.className= imageTxt[29].className;
            words.src = `shoal/shoaltxt-${imageTxt[24].id}.png`;
            words2.src = `shoal/shoaltxt-${imageTxt[25].id}.png`;
            words3.src = `shoal/shoaltxt-${imageTxt[26].id}.png`;
            words4.src = `shoal/shoaltxt-${imageTxt[27].id}.png`;
            words5.src = `shoal/shoaltxt-${imageTxt[28].id}.png`;
            words6.src = `shoal/shoaltxt-${imageTxt[29].id}.png`;
            arrowR.onclick = function(){nextImage()};
            break;
        case 10:
            arrowR.onclick = function(){
                window.open('shoal-end.html', '_parent');
            }
            words.className= imageTxt[30].className;
            words2.className= imageTxt[31].className;
            words3.className= imageTxt[32].className;
            words4.className= imageTxt[33].className;
            words.src = `shoal/shoaltxt-${imageTxt[30].id}.png`;
            words2.src = `shoal/shoaltxt-${imageTxt[31].id}.png`;
            words3.src = `shoal/shoaltxt-${imageTxt[32].id}.png`;
            words4.src = `shoal/shoaltxt-${imageTxt[33].id}.png`;
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
    carousel2.src = `shoal/shoal-${imageData[index+1].id}.png`;
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
    words.style.opacity = 0;
    words2.style.opacity = 0;
    words3.style.opacity = 0;
    words4.style.opacity = 0;
    words5.style.opacity = 0;
    words6.style.opacity = 0;
    words7.style.opacity = 0;
    words8.style.opacity = 0;
    words9.style.opacity = 0;
    words10.style.opacity = 0;


    words.setAttribute('src', '');
    words2.setAttribute('src', '');
    words3.setAttribute('src', '');
    words4.setAttribute('src', '');
    words5.setAttribute('src', '');
    words6.setAttribute('src', '');
    words7.setAttribute('src', '');
    words8.setAttribute('src', '');
    words9.setAttribute('src', '');
    words10.setAttribute('src', '');
}

function fadeInAnim(){
    unfade(words);
    setTimeout(() => {unfade(words2);}, 300);
    setTimeout(() => {unfade(words3);}, 600);
    setTimeout(() => {unfade(words4);}, 900);
    setTimeout(() => {unfade(words5);}, 1200);
    setTimeout(() => {unfade(words6);}, 1500);
    setTimeout(() => {unfade(words7);}, 1800);
    setTimeout(() => {unfade(words8);}, 2100);
    setTimeout(() => {unfade(words9);}, 2400);
    setTimeout(() => {unfade(words10);}, 2700);
}

showImage(currentIndex);
showImage2(currentIndex);