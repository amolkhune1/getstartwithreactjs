import { BUY_CAKE } from './cakeTypes';
const initialState = {
  numOfCakes: 10,
};
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...initialState,
        numOfCakes: state.numOfCakes - action.payload,
      };
    default:
      return {
        ...initialState,
      };
  }
};
export default cakeReducer;
