class Environment {
  #ball = document.getElementById('ball');
  #height = document.getElementsByClassName('container')[0].offsetHeight;
  #width = document.getElementsByClassName('container')[0].offsetWidth;
  #speed = 5;

  get ball() {
    return this.#ball;
  }

  get height() {
    return this.#height;
  }

  get width() {
    return this.#width;
  }

  get speed() {
    return this.#speed;
  }
}

export { Environment };
