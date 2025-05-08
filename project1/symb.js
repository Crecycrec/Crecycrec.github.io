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
    {id: "11", className: "", alt: ""}
];

const imageTxt =[
    {id: "0", className: "symtitle", alt: ""},
    {id: "1", className: "symtitle2", alt: ""},
    {id: "2", className: "pg1R1", alt: ""},
    {id: "3", className: "pg1R2", alt: ""},
    {id: "4", className: "pg2L1", alt: ""},
    {id: "5", className: "pg2L2", alt: ""},
    {id: "6", className: "pg2L3", alt: ""},
    {id: "7", className: "pg2L4", alt: ""},
    {id: "8", className: "pg2L5", alt: ""},
    {id: "9", className: "pg2L6", alt: ""},
    {id: "10", className: "pg2L7", alt: ""},
    {id: "11", className: "pg2L8", alt: ""},
    {id: "12", className: "pg3R1", alt: ""},
    {id: "13", className: "pg3R2", alt: ""},
    {id: "14", className: "pg3R3", alt: ""},
    {id: "15", className: "pg3R4", alt: ""},
    {id: "16", className: "pg3R5", alt: ""},
    {id: "17", className: "pg3R6", alt: ""},
    {id: "18", className: "pg3R7", alt: ""},
    {id: "19", className: "pg3R8", alt: ""},
    {id: "20", className: "pg4L1", alt: ""},
    {id: "21", className: "pg4L2", alt: ""},
    {id: "22", className: "pg4L3", alt: ""},
    {id: "23", className: "pg4L4", alt: ""},
    {id: "24", className: "pg4L5", alt: ""},
    {id: "25", className: "pg5R1", alt: ""},
    {id: "26", className: "pg5R2", alt: ""},
    {id: "27", className: "pg5R3", alt: ""},
    {id: "28", className: "pg5R4", alt: ""},
    {id: "29", className: "pg5R5", alt: ""},
    {id: "30", className: "pg6L1", alt: ""},
    {id: "31", className: "pg7R1", alt: ""},
    {id: "32", className: "pg8L1", alt: ""},
    {id: "33", className: "pg8L2", alt: ""},
    {id: "34", className: "pg8L3", alt: ""},
    {id: "35", className: "pg9R1", alt: ""},
    {id: "36", className: "pg9R2", alt: ""},
    {id: "37", className: "pg9R3", alt: ""},
    {id: "38", className: "pg10L1", alt: ""},
    {id: "39", className: "pg11R1", alt: ""}
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
const words11 = document.getElementById("words11");
const words12 = document.getElementById("words12");
const words13 = document.getElementById("words13");
const words14 = document.getElementById("words14");
const words15 = document.getElementById("words15");
const words16 = document.getElementById("words16");
var arrowL = document.getElementById("al");
var arrowR = document.getElementById("ar");
const e = document.getElementById("pagenum");

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
    carousel.src = `symbiosis/symbiosis-${imageData[index].id}.png`;
    carousel.alt = imageData[index].alt;

    // //Resets all the 'src' tags and the opacity of the imgs on the images to nothing so the bg img doesn't stay if it is not replaced going back or forth.
    resetSrcOp();
    e.value = currentIndex;

    //just fades in all the text everytime even if it is empty.
    fadeInAnim();

    switch(currentIndex){
        case 0:
            arrowL.setAttribute('disabled', true);
            arrowL.style.opacity = 0;
            // carousel.style.border = 0;
            words.className= imageTxt[0].className;
            words2.className= imageTxt[1].className;
            words3.className= imageTxt[2].className;
            words4.className= imageTxt[3].className;
            words.src = `symbiosis/symtxt-${imageTxt[0].id}.png`;
            words2.src = `symbiosis/symtxt-${imageTxt[1].id}.png`;
            words3.src = `symbiosis/symtxt-${imageTxt[2].id}.png`;
            words4.src = `symbiosis/symtxt-${imageTxt[3].id}.png`;
            break;
        case 2:
            arrowL.removeAttribute('disabled');
            arrowL.style.opacity = 1;
            arrowR.onclick = function(){nextImage()};
            words.className= imageTxt[4].className;
            words2.className= imageTxt[5].className;
            words3.className= imageTxt[6].className;
            words4.className= imageTxt[7].className;
            words5.className= imageTxt[8].className;
            words6.className= imageTxt[9].className;
            words7.className= imageTxt[10].className;
            words8.className= imageTxt[11].className;
            words9.className= imageTxt[12].className;
            words10.className= imageTxt[13].className;
            words11.className= imageTxt[14].className;
            words12.className= imageTxt[15].className;
            words13.className= imageTxt[16].className;
            words14.className= imageTxt[17].className;
            words15.className= imageTxt[18].className;
            words16.className= imageTxt[19].className;
            words.src = `symbiosis/symtxt-${imageTxt[4].id}.png`;
            words2.src = `symbiosis/symtxt-${imageTxt[5].id}.png`;
            words3.src = `symbiosis/symtxt-${imageTxt[6].id}.png`;
            words4.src = `symbiosis/symtxt-${imageTxt[7].id}.png`;
            words5.src = `symbiosis/symtxt-${imageTxt[8].id}.png`;
            words6.src = `symbiosis/symtxt-${imageTxt[9].id}.png`;
            words7.src = `symbiosis/symtxt-${imageTxt[10].id}.png`;
            words8.src = `symbiosis/symtxt-${imageTxt[11].id}.png`;
            words9.src = `symbiosis/symtxt-${imageTxt[12].id}.png`;
            words10.src = `symbiosis/symtxt-${imageTxt[13].id}.png`;
            words11.src = `symbiosis/symtxt-${imageTxt[14].id}.png`;
            words12.src = `symbiosis/symtxt-${imageTxt[15].id}.png`;
            words13.src = `symbiosis/symtxt-${imageTxt[16].id}.png`;
            words14.src = `symbiosis/symtxt-${imageTxt[17].id}.png`;
            words15.src = `symbiosis/symtxt-${imageTxt[18].id}.png`;
            words16.src = `symbiosis/symtxt-${imageTxt[19].id}.png`;
            break;
        case 4:
            //Left Page
            arrowL.removeAttribute('disabled');
            arrowL.style.opacity = 1;
            arrowR.onclick = function(){nextImage()};
            words.className= imageTxt[20].className;
            words2.className= imageTxt[21].className;
            words3.className= imageTxt[22].className;
            words4.className= imageTxt[23].className;
            words5.className= imageTxt[24].className;
            words6.className= imageTxt[25].className;
            words7.className= imageTxt[26].className;
            words8.className= imageTxt[27].className;
            words9.className= imageTxt[28].className;
            words10.className= imageTxt[29].className;
            words.src = `symbiosis/symtxt-${imageTxt[20].id}.png`;
            words2.src = `symbiosis/symtxt-${imageTxt[21].id}.png`;
            words3.src = `symbiosis/symtxt-${imageTxt[22].id}.png`;
            words4.src = `symbiosis/symtxt-${imageTxt[23].id}.png`;
            words5.src = `symbiosis/symtxt-${imageTxt[24].id}.png`;
            words6.src = `symbiosis/symtxt-${imageTxt[25].id}.png`;
            words7.src = `symbiosis/symtxt-${imageTxt[26].id}.png`;
            words8.src = `symbiosis/symtxt-${imageTxt[27].id}.png`;
            words9.src = `symbiosis/symtxt-${imageTxt[28].id}.png`;
            words10.src = `symbiosis/symtxt-${imageTxt[29].id}.png`;
            break;
        case 6:
            arrowL.removeAttribute('disabled');
            arrowL.style.opacity = 1;
            arrowR.onclick = function(){nextImage()};
            words.className= imageTxt[30].className;
            words2.className= imageTxt[31].className;
            words.src = `symbiosis/symtxt-${imageTxt[30].id}.png`;
            words2.src = `symbiosis/symtxt-${imageTxt[31].id}.png`;
            break;
        case 8:
            //Left PAge
            arrowL.removeAttribute('disabled');
            arrowL.style.opacity = 1;
            words.className= imageTxt[32].className;
            words2.className= imageTxt[33].className;
            words3.className= imageTxt[34].className;
            words4.className= imageTxt[35].className;
            words5.className= imageTxt[36].className;
            words6.className= imageTxt[37].className;
            words.src = `symbiosis/symtxt-${imageTxt[32].id}.png`;
            words2.src = `symbiosis/symtxt-${imageTxt[33].id}.png`;
            words3.src = `symbiosis/symtxt-${imageTxt[34].id}.png`;
            words4.src = `symbiosis/symtxt-${imageTxt[35].id}.png`;
            words5.src = `symbiosis/symtxt-${imageTxt[36].id}.png`;
            words6.src = `symbiosis/symtxt-${imageTxt[37].id}.png`;
            arrowR.onclick = function(){nextImage()};
            break;
        case 10:
            arrowR.onclick = function(){
                window.open('symbiosis-end.html', '_parent');
            }
            words.className= imageTxt[38].className;
            words2.className= imageTxt[39].className;
            words.src = `symbiosis/symtxt-${imageTxt[38].id}.png`;
            words2.src = `symbiosis/symtxt-${imageTxt[39].id}.png`;
            break;
        default:
            //I don't think I need this but I have it hear out of my own paranoia
            arrowL.removeAttribute('disabled');
            arrowL.style.opacity = 1;
            arrowR.onclick = function(){nextImage()};
            // // break;
    }
}

function showImage2(index){
    carousel2.style.opacity = 1;
    carousel2.src = `symbiosis/symbiosis-${imageData[index+1].id}.png`;
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

function showSelected(){
    resetSrcOp();
    currentIndex= e.value % imageData.length;;
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
    words11.style.opacity = 0;
    words12.style.opacity = 0;
    words13.style.opacity = 0;
    words14.style.opacity = 0;
    words15.style.opacity = 0;
    words16.style.opacity = 0;


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
    words11.setAttribute('src', '');
    words12.setAttribute('src', '');
    words13.setAttribute('src', '');
    words14.setAttribute('src', '');
    words15.setAttribute('src', '');
    words16.setAttribute('src', '');
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
    setTimeout(() => {unfade(words11);}, 3000);
    setTimeout(() => {unfade(words12);}, 3300);
    setTimeout(() => {unfade(words13);}, 3600);
    setTimeout(() => {unfade(words14);}, 3900);
    setTimeout(() => {unfade(words15);}, 4200);
    setTimeout(() => {unfade(words16);}, 4500);
}

showImage(currentIndex);
showImage2(currentIndex);

e.addEventListener('change', () => {
    currentIndex = e.value;
    showSelected();
});