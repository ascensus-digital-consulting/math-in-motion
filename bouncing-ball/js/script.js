import { calculateY } from './lib/calculateY.js';

document.addEventListener('DOMContentLoaded', () => {
  // Environmental constants
  const GRAVITY = 9.8;
  const BEACH = document.getElementsByClassName('container')[0];
  const BEACH_BOUNDARY_X = BEACH.offsetWidth;
  const BEACH_BOUNDARY_Y = BEACH.offsetHeight;
  const DIRECTION = { down: true, up: false };

  // Ball constants
  const BALL = document.getElementById('ball');
  const BALL_DIAMETER = BALL.offsetWidth;
  const INITIAL_BALL_POSITION = {
    x: BALL_DIAMETER,
    y: BEACH_BOUNDARY_Y - 2 * BALL_DIAMETER,
  };

  // Variables
  const SPEED = 1000;
  const COEFFICIENT_OF_RESTITUTION = 1;
  const DELAY = 1;
  const HORIZONTAL_VELOCITY = 0;

  let counter = 0;

  // Initialize the software
  initializeBeach();

  // Position the ball on x and y axies
  function positionBall(x, y) {
    BALL.style.transform = `translate(${x}px, ${y}px)`;
  }

  // Initialize the ball
  function initializeBeach() {
    // Set the initial position of the ball
    positionBall(INITIAL_BALL_POSITION.x, -INITIAL_BALL_POSITION.y);

    // The ball is dropped when the user clicks on it
    BALL.addEventListener('click', () => {
      drop(INITIAL_BALL_POSITION, 0);
    });
  }

  // Simplified drop function
  function drop(ballPosition, elapsedTime) {
    updateBallPosition(ballPosition, elapsedTime, DIRECTION.down);
  }

  // Simplified bounce function
  function bounce(ballPosition, elapsedTime) {
    updateBallPosition(ballPosition, elapsedTime, DIRECTION.up);
  }

  // Common function to update ball position and animate
  function updateBallPosition(ballPosition, elapsedTime, direction, timestamp) {
    // If the ball is outside the beach, stop the animation
    if (ballPosition.x >= BEACH_BOUNDARY_X) {
      return;
    }

    // If the ball is falling, set COR to 1
    const cor = direction === DIRECTION.down ? 1 : COEFFICIENT_OF_RESTITUTION;

    // Rewind time if the ball is bouncing
    const timeValue =
      direction === DIRECTION.down ? elapsedTime++ : --elapsedTime;

    // Calculate the position of the ball on the y axis
    const y = calculateY(timeValue, GRAVITY, cor);
    const velocity = y;

    // Special cases for dropping
    if (direction === DIRECTION.down) {
      // Stop the ball if the bounce is low enough
      if (ballPosition.y <= 2 && elapsedTime < 2) {
        positionBall(ballPosition.x, 0);
        return;
      }

      // Bounce the ball when it lands on the beach
      if (ballPosition.y <= 0) {
        positionBall(ballPosition.x, ballPosition.y);
        bounce(ballPosition, --elapsedTime);
        return;
      }
    }

    // Drop the ball when it reaches the apex
    else if (velocity <= 0) {
      ballPosition.y = INITIAL_BALL_POSITION.y;
      positionBall(ballPosition.x, ballPosition.y);
      drop(ballPosition, elapsedTime);
      return;
    }

    // Calculate the new position of the ball
    ballPosition.x = ballPosition.x + HORIZONTAL_VELOCITY;
    ballPosition.y =
      ballPosition.y + (direction === DIRECTION.down ? -y : y) / SPEED;

    // Log the position of the ball
    if (++counter % DELAY === 0) {
      console.log(
        `x:${Math.round(ballPosition.x)}, y:${Math.round(ballPosition.y)}`
      );
    }

    // Move the ball to the correct position
    positionBall(ballPosition.x, -ballPosition.y);

    // Animate the ball
    requestAnimationFrame(() => {
      direction === DIRECTION.down
        ? drop(ballPosition, elapsedTime)
        : bounce(ballPosition, elapsedTime);
    });
  }
});
