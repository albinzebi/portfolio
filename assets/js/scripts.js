document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    const jumplists = document.querySelectorAll('.jumplist');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });


    if (!currentSection) {
        jumplists.forEach(jumplist => {
            jumplist.classList.remove('active');
        });
    } else {
        jumplists.forEach(jumplist => {
            jumplist.classList.remove('active');
            if (jumplist.getAttribute('href').includes(currentSection)) {
                jumplist.classList.add('active');
            }
        });
    }
});


function updateClassesS() {
    const jumplinks = document.querySelectorAll('.jumplist.px-3');
    if (window.innerWidth <= 767) {
        jumplinks.forEach(link => {
            link.classList.remove('px-3');
            link.classList.add('px-1');
            link.classList.remove('fs-3');
            link.classList.add('fs-4');
        });
    }
}


updateClassesS();

window.addEventListener('resize', updateClassesS);

function updateClassesL() {
    const jumplinks = document.querySelectorAll('.jumplist.px-1');
    if (window.innerWidth > 767) {
        jumplinks.forEach(link => {
            link.classList.remove('px-1');
            link.classList.add('px-3');
            link.classList.remove('fs-4');
            link.classList.add('fs-3');
        });
    }
}


updateClassesL();

window.addEventListener('resize', updateClassesL);

window.addEventListener('scroll', function () {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


function updateClassesM() {
    const jumplinks = document.querySelectorAll('.p-5');
    if (window.innerWidth <= 767) {
        jumplinks.forEach(link => {

            link.classList.add('px-3');

        });
    }
}


updateClassesM();

window.addEventListener('resize', updateClassesM);

function updateClassesD() {
    const jumplinks = document.querySelectorAll('.p-5');
    if (window.innerWidth > 767) {
        jumplinks.forEach(link => {

            link.classList.remove('px-3');

        });
    }
}


updateClassesD();

window.addEventListener('resize', updateClassesD);


window.onload = function () {
    const unwantedHashes = ["#section1", "#section2", "#section3", "#section4", "#section5", "#section6", "#section7", "#section8", "#section9", "#section_a", "#section_b", "#section_c"];
    if (unwantedHashes.includes(window.location.hash)) {
        window.location.href = window.location.href.split("#")[0];
    }
}

