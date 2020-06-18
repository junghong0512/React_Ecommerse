import { CART_ADD_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find(
        (itm) => itm.product === item.product
      );
      if (product) {
        return {
          cartItems: state.cartItems.map(
            (itm) => (itm.product === product.product ? item : itm) //product.product is ID of the product
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    default:
      return state;
  }
}

export { cartReducer };
