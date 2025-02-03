import { Ball } from './Ball.js';
import { Thrower } from './Thrower.js';

class Environment {
  constructor() {
    this.#ball = new Ball();
    this.#thrower = new Thrower(this);
    this.#height = document.getElementsByClassName('container')[0].offsetHeight;
    this.#width = document.getElementsByClassName('container')[0].offsetWidth;
  }

  #ball;
  #thrower;
  #height;
  #width;

  get ball() {
    return this.#ball;
  }

  get height() {
    return this.#height;
  }

  get width() {
    return this.#width;
  }

  get thrower() {
    return this.#thrower;
  }
}

export { Environment };
