const pointer = document.getElementById('pointer');
const jokeText = document.getElementById('joke');
const counter = document.getElementById('counter');

const jokes = [
    "Haha, your mouse is moving!",
    "Catch me if you can!",
    "I'm getting dizzy!",
    "Whoa, slow down there!",
    "You're a cursor wizard!",
    "Mouse on the loose!",
    "This is one speedy cursor!",
    "You can't catch me!",
    "Zoom, zoom, zoom!",
    "I feel like a race car!",
    "You're giving me a workout!",
    "Cursor chase is on!",
    "I'm too fast for you!",
    "Round and round we go!",
    "I should get frequent flyer miles!",
    "You're a cursor-ninja!",
    "I'm in hyperspace now!",
    "Can't touch this!",
    "Are we there yet?",
    "I'm on a cursor adventure!",
    "It's a wild mouse chase!",
    "I'm the king of cursor land!",
    "I'm getting mouse-sick!",
    "You move like lightning!",
    "I feel like a rollercoaster!",
    "This is better than a maze!",
    "Be gentle, I'm ticklish!",
    "I'm a cursor, not a track star!",
    "Catch me if you dare!",
    "I'm the Usain Bolt of cursors!",
    "Did you grease the mouse pad?",
    "I'm a cursor with a cause!",
    "Phew, let's take a break!",
    "You're a mouse magician!",
    "This is the cursor Olympics!",
    "I'm a tiny, speedy dot!",
    "You must be bored!",
    "Is this mouse yoga?",
    "Do you always move this fast?",
    "I'm not built for speed!",
    "I'm dizzy with excitement!",
    "This is my daily exercise!",
    "Faster than the speed of click!",
    "I need a GPS for this journey!",
    "This isn't what I signed up for!",
    "I'm a cursor, not a race car!",
    "You've got moves!",
    "It's a mouse party!",
    "Are you training for cursor marathons?",
    "Developed by Github/imlayered",
    "Slow down, I'm seeing double!"
];


let totalMovement = 0;
let totalDistance = 0;

document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    pointer.style.left = x + 'px';
    pointer.style.top = y + 'px';

    const distanceMoved = Math.sqrt(e.movementX * e.movementX + e.movementY * e.movementY);
    totalDistance += distanceMoved;

    counter.innerText = `Pixels moved: ${Math.round(totalDistance)}`;

    totalMovement += Math.abs(e.movementX) + Math.abs(e.movementY);

    if (totalMovement >= 3000) {
        jokeText.innerText = jokes[Math.floor(Math.random() * jokes.length)];
        totalMovement = 0; 
    }
});
