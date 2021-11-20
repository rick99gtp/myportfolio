// set current year for copyright notice in footer
const copyrightYear = document.getElementById('year')

const d = new Date();
copyrightYear.textContent = d.getFullYear();

// setup all next buttons to increment which screen user is currently viewing
const btn_next = document.querySelectorAll('.next');

let currentScreen = 0;

btn_next.forEach(e => {
    e.addEventListener('click', () => {
        currentScreen++;
    })
});
