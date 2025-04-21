const jumplists = document.querySelectorAll('.jumplist');

// update jumplists when scrolling
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
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


// update jumplist padding and text size
function updateJumplistPadding() {
    if (window.innerWidth <= 767) {
        jumplists.forEach(list => {
            list.classList.remove('px-3', 'fs-3');
            list.classList.add('px-1', 'fs-4');
        });
    } else {
        jumplists.forEach(list => {
            list.classList.remove('px-1', 'fs-4');
            list.classList.add('px-3', 'fs-3');
        });
    }
}

updateJumplistPadding();

window.addEventListener('resize', updateJumplistPadding);


// modify section padding
function updateSectionPadding() {
    const sections = document.querySelectorAll('.p-5');
    if (window.innerWidth <= 767) {
        sections.forEach(section => {

            section.classList.add('px-3');

        });
    } else {
        sections.forEach(section => {

            section.classList.remove('px-3');

        });
    }
}

updateSectionPadding();

window.addEventListener('resize', updateSectionPadding);


// make header sticky
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


// remove hashes from URL when refreshing page
window.onload = function () {
    // Dynamically collect all section IDs into an array
    const sections = document.querySelectorAll('.section');
    const unwantedHashes = Array.from(sections).map(section => `#${section.getAttribute('id')}`);

    // Check if the current hash is unwanted and remove it from the URL
    if (unwantedHashes.includes(window.location.hash)) {
        window.location.href = window.location.href.split("#")[0];
    }
};