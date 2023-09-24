import { Add_ITEM, REMOVE_ITEM } from "../actionTypes";

export const addItemToCart = (data) => ({
  type: Add_ITEM,
  payload: data,
});

export const removeItemFromCart = (index) => ({
  type: REMOVE_ITEM,
  payload: index,
});
