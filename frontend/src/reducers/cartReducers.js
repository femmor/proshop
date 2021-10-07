import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      // Check if item exists in the cart
      const itemExists = state.cartItems.find(x => x.product === item.product);

      if (itemExists) {
        // if item exists
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            x.product === itemExists.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return {};

    default:
      return state;
  }
};
