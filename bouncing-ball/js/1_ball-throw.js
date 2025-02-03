import { Environment } from './lib/Environment.js';

// Add the click event handler to the ball
document.addEventListener('DOMContentLoaded', () => {
  const SPEED = 10;

  function direction(y) {
    const x = y ** 0;
    return x;
  }

  const environment = new Environment();
  const tennisBall = environment.ball;
  const christopher = environment.thrower;
  const init = () => {
    christopher.throwBall(tennisBall, SPEED, direction);
  };

  environment.ball.init(init);
});
