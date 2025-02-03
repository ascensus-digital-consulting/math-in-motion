import { Environment } from './lib/Environment.js';

// Add the click event handler to the ball
document.addEventListener('DOMContentLoaded', () => {
  enableBallClick();

  const SPEED = 10;

  const environment = new Environment();
  const tennisBall = environment.ball;
  const christopher = environment.thrower(tennisBall);
  christopher.throwBall(SPEED);

  // const SPEED = 10;

  // let moveY = 0;
  // let moveX = 0;

  // // Throw the ball when we click it
  // function throwBall() {
  //   const environment = new Environment();
  //   const ball = new Ball(environment.ball, environment.speed);
  //   move();
  // }

  // function enableBallClick() {
  //   document.getElementById('ball').addEventListener('click', throwBall);
  // }

  // // Perform the animation when we throw the ball
  // function fall() {
  //   // Move the ball
  //   moveY = moveY - SPEED;
  //   moveX = calculateXasFunctionOfY(moveY);

  //   const ball = document.getElementById('ball');
  //   ball.style.transform = `translate(${moveX}px, -${moveY}px)`;

  //   // Make sure that the ball does not fly into the sun
  //   if (moveY <= 0) {
  //     requestAnimationFrame(move);
  //   } else {
  //     requestAnimationFrame(fall);
  //   }
  // }

  // // Perform the animation when we throw the ball
  // function move() {
  //   // Move the ball
  //   moveY = moveY + SPEED;
  //   moveX = calculateXasFunctionOfY(moveY);

  //   const ball = document.getElementById('ball');

  //   // Calculate the maximum height for the ball to travel upwards
  //   const maxHeight =
  //     document.getElementsByClassName('container')[0].offsetHeight -
  //     ball.offsetHeight * 2;

  //   // Move the ball
  //   ball.style.transform = `translate(${moveX}px, -${moveY}px)`;

  //   // Make sure that the ball drops again after rising to its apex
  //   if (moveY >= maxHeight) {
  //     requestAnimationFrame(fall);
  //   } else {
  //     requestAnimationFrame(move);
  //   }
  // }

  // function calculateXasFunctionOfY(y) {
  //   // Function to calculate x as a function of y
  //   const x = y / 2;

  //   // Return value of x
  //   return x;
  // }
});
