import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

// ===== LOCAL CART =====
const getLocalCartData = () => {
  try {
    const data = localStorage.getItem("ecomCart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// ===== LOCAL ORDER =====
const getLocalOrderData = () => {
  try {
    const data = localStorage.getItem("ecomOrder");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// const getLocalWishlistData = () => {
//   let localWishlistData = localStorage.getItem("ecomWishlist");

//   const parsedData = JSON.parse(localWishlistData);
//   if (!Array.isArray(parsedData)) return [];
//   return parsedData;
// };

const getLocalWishlistData = () => {
  try {
    const data = localStorage.getItem("ecomWishlist");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

// ===== INITIAL STATE =====
const initialState = {
  cart: getLocalCartData(),

  total_item: 0,
  total_price: 0,
  total_discount: 0,
  total_special_price: 0,

  order: getLocalOrderData(),
  order_total_price: 0,
  order_total_discount: 0,

  paid_amount: 0,

  // ❤️ WISHLIST
  // wishlist: [],
  // wishlist
  wishlist: getLocalWishlistData(),
};

// ===== PROVIDER =====
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ===== CART ACTIONS =====
  const addToCart = (id, amount, size, color, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, amount, size, color, product },
    });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // ===== ORDER =====
  const addToOrder = (id, amount, product) => {
    dispatch({
      type: "ADD_TO_ORDER",
      payload: { id, amount, product },
    });
  };

  const clearOrder = () => {
    dispatch({ type: "CLEAR_ORDER" });
  };

  // ===== ❤️ WISHLIST ACTIONS =====
  const addToWishlist = (product) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: product,
    });
  };

  const removeWishlist = (id) => {
    dispatch({
      type: "REMOVE_WISHLIST",
      payload: id,
    });
  };

  const clearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };

  // ===== CART TOTALS + LOCAL STORAGE =====
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_DISCOUNT" });
    dispatch({ type: "CART_TOTAL_SPECIAL_PRICE" });

    localStorage.setItem("ecomCart", JSON.stringify(state.cart));
  }, [state.cart, state.wishlist]);

  // useEffect(() => {
  //   dispatch({ type: "CART_TOTAL_ITEM" });
  //   dispatch({ type: "CART_TOTAL_PRICE" });
  //   dispatch({ type: "CART_DISCOUNT" });
  //   dispatch({ type: "CART_TOTAL_SPECIAL_PRICE" });

  //   localStorage.setItem("ecomCart", JSON.stringify(state.cart));

  //   // wishlist save
  //   localStorage.setItem("ecomWishlist", JSON.stringify(state.wishlist));
  // }, [state.cart, state.wishlist]);

  // useEffect(() => {
  //   localStorage.setItem("ecomCart", JSON.stringify(state.cart));
  // }, [state.cart]);

  // useEffect(() => {
  //   localStorage.setItem("ecomWishlist", JSON.stringify(state.wishlist));
  // }, [state.wishlist]);

  // ===== ORDER STORAGE =====
  useEffect(() => {
    localStorage.setItem("ecomOrder", JSON.stringify(state.order));
  }, [state.order]);

  // const total_item = state.cart.reduce((acc, item) => acc + item.amount, 0);

  // const total_price = state.cart.reduce(
  //   (acc, item) => acc + item.sPrice * item.amount,
  //   0,
  // );

  // const total_discount = state.cart.reduce(
  //   (acc, item) => acc + item.discount * item.amount,
  //   0,
  // );

  return (
    <CartContext.Provider
      value={{
        ...state,

        // total_item,
        // total_price,
        // total_discount,

        // cart
        addToCart,
        removeItem,
        clearCart,
        setDecrement,
        setIncrement,

        // order
        addToOrder,
        clearOrder,

        // ❤️ wishlist
        addToWishlist,
        removeWishlist,
        clearWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ===== HOOK =====
const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };
