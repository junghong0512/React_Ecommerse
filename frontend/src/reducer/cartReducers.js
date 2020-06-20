import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find(
        (itm) => itm.product === item.product // Check if the product is already in the cart
      );
      if (product) {
        return {
          cartItems: state.cartItems.map(
            (itm) => (itm.product === product.product ? item : itm) //product.product is ID of the product
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter(
          (itm) => itm.product !== action.payload
        ),
      };
    default:
      return state;
  }
}

export { cartReducer };
