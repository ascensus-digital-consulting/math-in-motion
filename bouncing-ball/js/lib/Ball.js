class Ball {
  constructor(ball, speed) {
    this.#ball = ball;
    this.#speed = speed;
  }

  #ball;
  #speed;
  #moveX = 0;
  #moveY = 0;

  moveX(distance) {
    this.#moveX += distance;
  }

  moveY(distance) {
    this.#moveY += distance;
  }
}

export { Ball };
