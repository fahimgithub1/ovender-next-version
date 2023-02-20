import { createSlice } from "@reduxjs/toolkit";

const cartDate = [
  {
    items: [
      //   {
      //     id: 1,
      //     name: "",
      //     quanity: 0,
      //   },
    ],
    totalPrice: 0,
  },
];

const cartItemsSlices = createSlice({
  name: "cartItems",
  initialState: cartDate,
  reducers: {
    addItems(state, action) {
      if (action.type === "ADD") {
        const updatedtotalPrice =
          state.totalPrice + action.item.price * action.item.price;

        const existinCatItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existinCatItemIndex];
        let updateItems;

        if (existingCartItem) {
          const updateItem = {
            ...existingCartItem,
            price: existingCartItem.price + action.item.price,
          };

          updateItems = [...state.items];
          updateItems[existinCatItemIndex] = updateItem;
        } else {
          updateItems = state.items.concat(action.item);
        }

        return {
          items: updateItems,
          totalPrice: updatedtotalPrice,
        };
      }
    },

    removeItems(state, action) {
      if (action.type === "REMOVE") {
        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        const updatedtotalPrice = state.totalPrice - existingItem.price;
        let updatedItems;
        if (existingItem.price === 1) {
          updatedItems = state.items.filter((item) => item.id !== action.id);
        } else {
          const updatedItem = {
            ...existingItem,
            price: existingItem.price - 1,
          };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
          items: updatedItems,
          totalPrice: updatedtotalPrice,
        };
      }
    },

    clearItems(state, action) {
      if (action.type === "CLEAR") {
        return cartDate;
      }
    },

    addCartItems(state, action) {
      if (action.type === "AddCart") {
        const updatedtotalPrice =
          state.totalPrice + action.item.price * action.item.price * action.quantity ;

        const existinCatItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );

        const existingCartItem = state.items[existinCatItemIndex];
        let updateItems;

        if (existingCartItem) {
          const updateItem = {
            ...existingCartItem,
            price: existingCartItem.price + action.item.price,
          };

          updateItems = [...state.items];
          updateItems[existinCatItemIndex] = updateItem;
        } else {
          updateItems = state.items.concat(action.item);
        }

        return {
          items: updateItems,
          totalPrice: updatedtotalPrice,
        };
      }
    },
  },
});

export default cartItemsSlices.reducer;
export const { addItems, removeItems, addCartItems } = cartItemsSlices.actions;
