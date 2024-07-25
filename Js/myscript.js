document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navButton = document.querySelector('.button');

    toggleButton.addEventListener('click', function () {
        navButton.classList.toggle('active');
    });
});

//////////////////////////////////////////////////////////

const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 2;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

