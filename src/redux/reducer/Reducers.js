import { Add_ITEM, REMOVE_ITEM } from "../actionTypes";

export const Reducers = (state = [], action) => {
  switch (action.type) {
    case Add_ITEM: {
      console.log("action ✳️🅿️", action);
      return [...state, action.payload];
    }
    case REMOVE_ITEM: {
      const deleteArray = state.filter((item, index) => {
        return index !== action.payload;
      });
      return deleteArray;
    }
    default: {
      return state;
    }
  }
};
