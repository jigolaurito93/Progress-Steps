const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElement('next');
const circles = document.querySelectorAll('.circle');

// Whichever one is active is gonna set 1 by default
let currentActive = 1

// Add event listener

next.addEventListener('click', () => {
    // Increment current active by 1 
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    // Decrement current active by 1
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }


    update()
})


// Create a function called update
function update() {
    // take circles and loop through with foreach
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
}