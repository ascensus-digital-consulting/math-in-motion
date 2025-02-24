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
  const SPEED = 1500;
  const COEFFICIENT_OF_RESTITUTION = 0.8;
  const DELAY = 1;
  const HORIZONTAL_VELOCITY = 0;

  // const SPEED = 150000;
  // const COEFFICIENT_OF_RESTITUTION = 0.8;
  // const DELAY = 30;
  // const HORIZONTAL_VELOCITY = 0.25;

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

  // Calcutate the vertical velocity of the ball
  function calculateVerticalVelocity(time, coefficientOfRestitution = 1) {
    const velocity = 0.5 * coefficientOfRestitution * GRAVITY * time ** 2;
    return velocity;
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
    if (ballPosition.x >= BEACH_BOUNDARY_X) {
      return;
    }

    const cor = direction === DIRECTION.down ? 1 : COEFFICIENT_OF_RESTITUTION;
    const timeValue =
      direction === DIRECTION.down ? elapsedTime++ : elapsedTime--;
    const velocity = calculateVerticalVelocity(timeValue, cor);

    // Special cases for dropping
    if (direction === DIRECTION.down) {
      if (ballPosition.y <= 2 && elapsedTime < 2) {
        positionBall(ballPosition.x, 0);
        return;
      }

      if (ballPosition.y <= 0) {
        positionBall(ballPosition.x, ballPosition.y);
        bounce(ballPosition, --elapsedTime);
        return;
      }
    } else if (velocity <= 0) {
      // Special case for bouncing
      ballPosition.y = INITIAL_BALL_POSITION.y;
      positionBall(ballPosition.x, ballPosition.y);
      drop(ballPosition, elapsedTime);
      return;
    }

    // Common position updates
    ballPosition.x = ballPosition.x + HORIZONTAL_VELOCITY;
    ballPosition.y =
      ballPosition.y + (direction ? -velocity : velocity) / SPEED;

    if (++counter % DELAY === 0) {
      console.log(
        `x:${Math.round(ballPosition.x)}, y:${Math.round(ballPosition.y)}`
      );
    }

    positionBall(ballPosition.x, -ballPosition.y);

    requestAnimationFrame(() => {
      direction === DIRECTION.down
        ? drop(ballPosition, elapsedTime)
        : bounce(ballPosition, elapsedTime);
    });
  }
});
