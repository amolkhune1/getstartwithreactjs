import { BUY_ICECREAM } from './inceCreamTypes';
const initialState = {
  numOfIceCreams: 20,
};
export const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return {
        ...state,
      };
  }
};
