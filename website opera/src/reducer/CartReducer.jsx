const CartReducer = (state, action) => {
  // ===== ADD TO CART =====

  if (action.type === "ADD_TO_CART") {
    const { id, amount, size, color, product } = action.payload;

    const uniqueId = `${id}${color ? `-${color}` : ""}${size ? `-${size}` : ""}`;

    const exist = state.cart.find((item) => item.id === uniqueId);

    if (exist) {
      const updated = state.cart.map((item) => {
        if (item.id === uniqueId) {
          let newAmount = item.amount + amount;

          if (newAmount > item.max) newAmount = item.max;

          return { ...item, amount: newAmount };
        }
        return item;
      });

      return { ...state, cart: updated };
    }

    const cartProduct = {
      id: uniqueId,
      productId: product.id,
      name: product.title,
      author: product.author,
      amount,
      image: product.img,
      price: Number(product.oldPrice),
      sPrice: Number(product.price),
      discount: Number(product.oldPrice) - Number(product.price),
      max: 10,
      inStock: product.inStock,
    };

    return {
      ...state,
      cart: [...state.cart, cartProduct],
    };
  }

  // ===== DECREMENT =====
  if (action.type === "SET_DECREMENT") {
    const updated = state.cart.map((item) => {
      if (item.id === action.payload) {
        let amt = item.amount - 1;
        if (amt < 1) amt = 1;
        return { ...item, amount: amt };
      }
      return item;
    });

    return { ...state, cart: updated };
  }

  // ===== INCREMENT =====
  if (action.type === "SET_INCREMENT") {
    const updated = state.cart.map((item) => {
      if (item.id === action.payload) {
        let amt = item.amount + 1;
        if (amt > item.max) amt = item.max;
        return { ...item, amount: amt };
      }
      return item;
    });

    return { ...state, cart: updated };
  }

  // ===== TOTAL ITEMS (COUNT PRODUCTS ONLY) =====
  if (action.type === "CART_TOTAL_ITEM") {
    return {
      ...state,
      total_item: state.cart.length,
    };
  }

  // ===== TOTAL PRICE =====
  if (action.type === "CART_TOTAL_PRICE") {
    const total = state.cart.reduce(
      (acc, item) => acc + item.sPrice * item.amount,
      0,
    );

    return { ...state, total_price: total };
  }

  // ===== DISCOUNT =====
  if (action.type === "CART_DISCOUNT") {
    const total = state.cart.reduce(
      (acc, item) => acc + item.discount * item.amount,
      0,
    );

    return { ...state, total_discount: total };
  }

  // ===== REMOVE ITEM =====
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload),
    };
  }

  // ===== CLEAR CART =====
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }

  // ===== ❤️ ADD TO WISHLIST =====
  // if (action.type === "ADD_TO_WISHLIST") {
  //   const exist = state.wishlist.find((item) => item.id === action.payload.id);

  //   if (exist) return state;

  //   return {
  //     ...state,
  //     wishlist: [...state.wishlist, action.payload],
  //   };
  // }
  if (action.type === "ADD_TO_WISHLIST") {
    const exist = state.wishlist.find((item) => item.id === action.payload.id);

    if (exist) return state;

    const wishlistProduct = {
      ...action.payload,

      // save current date
      addedAt: new Date().toISOString(),
    };

    return {
      ...state,
      wishlist: [...state.wishlist, wishlistProduct],
    };
  }

  // ===== REMOVE WISHLIST =====
  if (action.type === "REMOVE_WISHLIST") {
    return {
      ...state,
      wishlist: state.wishlist.filter((item) => item.id !== action.payload),
    };
  }

  // ===== CLEAR WISHLIST =====
  if (action.type === "CLEAR_WISHLIST") {
    return {
      ...state,
      wishlist: [],
    };
  }

  return state;
};

export default CartReducer;
