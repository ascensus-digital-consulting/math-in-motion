class Thrower {
  constructor(environment) {
    this.#environment = environment;
    this.#positionX = 0;
    this.#positionY = 0;
  }

  #environment;
  #ball;
  #speed;
  #fn;
  #positionX;
  #positionY;

  throwBall(ball, speed, fn) {
    this.#ball = ball;
    this.#speed = speed;
    this.#fn = fn;
    this.#move(this);
  }

  #move(that) {
    // Move the ball
    that.#positionY = that.#positionY + that.#speed;
    that.#positionX = that.#fn(that.#positionY);

    // Calculate the maximum height for the ball to travel upwards
    const maxHeight = that.#environment.height - that.#ball.diameter * 2;

    // Move the ball
    that.#ball.position(that.#positionX, -that.#positionY);

    // Make sure that the ball does not fly into the sun
    if (that.#positionY <= maxHeight) {
      requestAnimationFrame(() => {
        this.#move(that);
      });
    }
  }
}

export { Thrower };
