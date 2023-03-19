const frontBar = document.querySelector('.loading-bar-front');
const counter = document.querySelector('.counter');
let i = 0;
function load() {
    counter.innerText = `${i}%`;
    frontBar.style.width = `${i}%`;
    i = i + 10;
    if (i <= 100) {
        setTimeout(load, 1000);
    }


}
load();