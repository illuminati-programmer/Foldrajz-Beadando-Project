const toggleHeaderBtn = document.getElementById('toggle-header');
const header = document.querySelector('header');
const button = document.getElementById("toggle-header");
const main = document.getElementById("main");

let headerOpen = true;

toggleHeaderBtn.addEventListener('click', function() {
    if(headerOpen)
    {
        header.classList.toggle('open');
        header.classList.toggle('close');
        let i = 0;
        let interval = setInterval(() => {
            if(i > 90) clearInterval(interval);
            button.style.transform = "rotateZ(" + i + "deg)";
            i++;
        })
        main.classList = 'closedHeader';
    }
    else
    {
        let i = 90;
        let interval = setInterval(() => {
            if(i < 0) clearInterval(interval);
            button.style.transform = "rotateZ(" + i + "deg)";
            i--;
        })
        main.classList = "openedHeader";
        header.classList.toggle("close");
        header.classList.toggle("open");
    }

    headerOpen = !headerOpen;
});