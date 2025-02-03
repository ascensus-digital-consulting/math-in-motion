import { Direction } from './Direction.js';

class Thrower {
  constructor(environment) {
    this.#environment = environment;
    this.#direction = Direction.UP;
    this.#positionX = 0;
    this.#positionY = 0;
  }

  #environment;
  #ball;
  #direction;
  #speed;
  #fnUp;
  #fnDown;
  #positionX;
  #positionY;

  throwBall(ball, speed, fnUp, fnDown) {
    this.#ball = ball;
    this.#speed = speed;
    this.#fnUp = fnUp;
    this.#fnDown = fnDown;
    this.#move(this);
  }

  #move(that) {
    // Check direction of travel
    switch (that.#direction) {
      case Direction.UP:
        // Move the ball
        that.#positionY = that.#positionY + that.#speed;
        that.#positionX = that.#fnUp(that.#positionY);
        break;
      case Direction.DOWN:
        // Move the ball
        that.#positionY = that.#positionY - that.#speed;
        that.#positionX = that.#fnDown(that.#positionY);
        break;
      default:
        throw new Error('Invalid direction');
    }

    console.log(`x: ${that.#positionX}, y: ${that.#positionY}`);

    // Calculate the maximum height for the ball to travel upwards
    const maxHeight = that.#environment.height - that.#ball.diameter * 2;

    // Move the ball
    that.#ball.position(that.#positionX, -that.#positionY);

    // Make sure that the ball does not fly into the sun
    if (that.#positionY + that.#speed > maxHeight) {
      that.#direction = Direction.DOWN;
    }

    // Make sure that the ball does tunnel into China
    if (that.#positionY - that.#speed < 0) {
      that.#direction = Direction.UP;
    }

    if (that.#positionX <= this.#environment.width) {
      requestAnimationFrame(() => {
        this.#move(that);
      });
    }
  }
}

export { Thrower };
