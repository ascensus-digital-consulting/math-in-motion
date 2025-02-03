const SPEED = 10;

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
  rise();
}

// Perform the animation when we throw the ball
function rise() {
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

  // Make sure that the ball drops again after rising to its apex
  if (yPos >= maxHeight) {
    requestAnimationFrame(fall);
  } else {
    requestAnimationFrame(rise);
  }
}

// Perform the animation when we throw the ball
function fall() {
  // Move the ball
  yPos = yPos - SPEED;
  xPos = calculateXasFunctionOfY(yPos);

  const ball = document.getElementById('ball');
  ball.style.transform = `translate(${xPos}px, -${yPos}px)`;

  // Make sure that the ball does not fly into the sun
  if (yPos <= 0) {
    requestAnimationFrame(rise);
  } else {
    requestAnimationFrame(fall);
  }
}
