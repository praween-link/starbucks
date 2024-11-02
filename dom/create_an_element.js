const btn = document.createElement('button');
btn.textContent = "Click Me";
btn.className = "btn1";

const division = document.querySelector('.div2');
division.appendChild(btn);

const division2 = document.querySelector('.div3');
console.log(division2);
btn.className = "btn2";
division.append(btn);

//
const list = document.getElementById("list");

list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
