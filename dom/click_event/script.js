const para = document.querySelector('p');

// para.addEventListener("click", callPara);

// function callPara() {
//     console.log("Para Called!");
// }

// para.addEventListener("click", function () {
//     callPara("Hey");
// });

para.addEventListener("click", () => {
    callPara("Hey");
});

function callPara(msg) {
    console.log(`${msg}, Para Called!`);
}

const headerSelector = document.querySelector('#header');
console.log(`---> ${headerSelector}`);
const btn = document.createElement('button');
btn.textContent = "Click Me";
btn.backgroundColor = '#04AA6D';
btn.style.color = "white";

headerSelector.appendChild(btn);

//-- style activity
para.addEventListener('mouseover', () => {
    para.style.backgroundColor = 'orange';
    para.style.marginTop = '100px';
});
para.addEventListener('mouseout', () => {
    para.style.backgroundColor = '';
    para.style.marginTop = '0px';
});


btn.addEventListener('mouseover', () => {
    para.style.marginTop = '100px';
});
btn.addEventListener('mouseout', () => {
    para.style.marginTop = '0px';
});

document.body.addEventListener('keydown', (event) => {//keydown
    console.log(`Key Prassed: ${event.key}!`);
});


document.body.addEventListener('onmousemove', (event) => {

});



/////
function drum(selector, url) {
    var audio = new Audio(url);

    document.querySelector(selector).addEventListener('click', (event) => {
        audio.play();
    });
}

drum('w drum', 'https://files.codingninjas.in/tom-1-28537.mp3');