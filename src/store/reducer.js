import 'babel-polyfill';

// action constants
/*
  const SAY_HI = 'SAY_HI';
*/

// action creators
/*
  const sayHi = () => {
    return {
      type: SAY_HI,
      greeting: 'hello',
    };
  };

  export const greet = () => {
    return async dispatch => {
      dispatch(sayHi());
    };
  };
*/

// initial state
const initialState = {
  // initialize properties
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
