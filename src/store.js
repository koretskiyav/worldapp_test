import { observable, action } from 'mobx';

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

  init = action((wrapper, target) => {
    this.wrapper = wrapper;
    this.target = target;
  })
}

const store = new Store();

if (process.env.NODE_ENV === 'development') {
  window.store = store;
}

export default store;
