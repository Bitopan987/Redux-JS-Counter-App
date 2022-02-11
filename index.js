let store = Redux.createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let counter = store.getState();

const h1 = document.querySelector('h1');
const increment = document.querySelector('.increment');
const decrement = document.querySelector('.decrement');
const reset = document.querySelector('.reset');

h1.innerText = counter;

increment.addEventListener('click', () => {
  store.dispatch({ type: 'increment' });
  counter = store.getState();
  h1.innerText = counter;
});

decrement.addEventListener('click', () => {
  store.dispatch({ type: 'decrement' });
});

reset.addEventListener('click', () => {
  store.dispatch({ type: 'reset' });
});

store.subscribe(() => {
  counter = store.getState();
  h1.innerText = counter;
});

function reducer(state = 0, action) {
  switch (action.type) {
    case 'increment':
      return state + (action.step || 1);
    case 'decrement':
      return state - (action.step || 1);
    case 'reset':
      return 0;
    default:
      return state;
  }
}
