class Ball {
  constructor() {
    this.#element = document.getElementById('ball');
    this.#diameter = this.#element.offsetWidth;
  }

  #element;
  #diameter;

  get diameter() {
    return this.#diameter;
  }

  init(fn) {
    this.#element.addEventListener('click', fn);
  }

  position(x, y) {
    this.#element.style.transform = `translate(${x}px, ${y}px)`;
  }
}

export { Ball };
