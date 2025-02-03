import { Environment } from './lib/Environment.js';

// Add the click event handler to the ball
document.addEventListener('DOMContentLoaded', () => {
  const SPEED = 10;

  function directionUp(y) {
    const x = y ** 0;
    return x;
  }

  function directionDown(y) {
    const x = (environment.height - y) ** 0;
    return x;
  }

  const environment = new Environment();
  const tennisBall = environment.ball;
  const christopher = environment.thrower;
  const init = () => {
    christopher.throwBall(tennisBall, SPEED, directionUp, directionDown);
  };

  environment.ball.init(init);
});
