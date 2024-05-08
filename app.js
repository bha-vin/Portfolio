function showCard() {
    document.querySelectorAll('.article-1').forEach(function (item) {
        item.addEventListener('mousemove', function (dets) {
            document.querySelector('.card-container').children[dets.target.dataset.id].style.opacity = 1;
            document.querySelector('.card-container').children[dets.target.dataset.id].style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;

        })
        item.addEventListener('mouseleave', function (dets) {
            document.querySelector('.card-container').children[dets.target.dataset.id].style.opacity = 0;
            document.querySelector('.card-container').children[dets.target.dataset.id].style.transform = `0px`;

        })
    })
}
showCard();
const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',]
const time = document.querySelector('.time');
const d = new Date();
const hours = d.getHours();
const times = d.getMinutes();
const day = d.getDay();
console.log(day);
const year = d.getFullYear();
time.textContent = `${hours} : ${times}`;
const setday2 = document.querySelector('.setDay2');
const setYear2 = document.querySelector('.setYear2');
const setday = dayArray[day];
setYear2.textContent = `${year}`;
setday2.textContent = `${setday}`;


gsap.to('.loading-page', {
    onSatrt: function () {
        let crt = 0;
        const counter = document.querySelector('.child');
        setInterval(() => {
            if (crt === 100) {
                crt = 100;
                counter.textContent = `${crt}`;
            } else {
                crt++;
                counter.textContent = `${crt}`;
            }
        }, 22);
    },
})

gsap.to('.child', {
    y: -200,
    delay: 3,
    duration: 1,
    ease: Expo.easeInOut,
    onComplete: function () {
        loadingUpper();
        setElementInit();
        backtoDefault();
    }
})

function setElementInit() {
    gsap.set('.section-1', {
        opacity: 0,
    })
}

function backtoDefault() {
    gsap.to('.section-1', {
        opacity: 1,
        delay: 0.2,
    })
}


// counter();
function loadingUpper() {
    var tl = gsap.timeline();
    tl.to('.loading-page', {
        height: 0,
        display: 'none',
        durtion: 1,
    })
}
