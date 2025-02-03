const SPEED = 5;

function calculateXasFunctionOfY(y) {
  // Function to calculate x as a function of y
  const x = y ** 0;

  // Return value of x
  return x;
}

// Set initial position of the ball
let xPos = 0;
let yPos = 0;

// Add the click event handler to the ball
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('ball').addEventListener('click', throwBall);
});

// Throw the ball when we click it
function throwBall() {
  move();
}

// Perform the animation when we throw the ball
function move() {
  // Move the ball
  yPos = yPos + SPEED;
  xPos = calculateXasFunctionOfY(yPos);

  const ball = document.getElementById('ball');

  // Calculate the maximum height for the ball to travel upwards
  const maxHeight =
    document.getElementsByClassName('container')[0].offsetHeight -
    ball.offsetHeight * 2;

  // Move the ball
  ball.style.transform = `translate(${xPos}px, -${yPos}px)`;

  // Make sure that the ball does not fly into the sun
  if (yPos <= maxHeight) {
    requestAnimationFrame(move);
  }
}
