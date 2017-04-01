import { observable, action } from 'mobx';

class Movable {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  @observable x;
  @observable y;
  @observable isMoving = false;
}

class Store {
  @observable wrapper = {
    top: null,
    left: null,
    height: null,
    width: null,
  };

  @observable target = {
    top: null,
    left: null,
    height: null,
    width: null,
  };

  @observable droped = false;
  @observable movable = new Movable(20, 20);

  init = action((wrapper, target) => {
    this.wrapper = wrapper;
    this.target = target;
  })

  startMoving = action(() => {
    this.movable.isMoving = true;
  })

  endMoving = action(() => {
    this.movable.isMoving = false;

    const movableX = this.movable.x + 50;
    const movableY = this.movable.y + 50;

    const targetTop = this.target.top - (this.target.height / 2);
    const targetBottom = this.target.top + (this.target.height / 2);
    const targetLeft = this.target.left - (this.target.width / 2);
    const targetRight = this.target.left + (this.target.width / 2);

    if (
      movableX > targetLeft && movableX < targetRight &&
      movableY > targetTop && movableY < targetBottom
    ) this.droped = true;
  })

  move = action((x, y) => {
    const mabyX = this.movable.x + x;
    if (mabyX > 10 && mabyX < this.wrapper.width - 130) this.movable.x = mabyX;

    const mabyY = this.movable.y + y;
    if (mabyY > 10 && mabyY < this.wrapper.height - 130) this.movable.y = mabyY;
  })
}

const store = new Store();

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

export default store;
