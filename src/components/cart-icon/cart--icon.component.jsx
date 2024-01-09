import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItems } = useContext(CartContext);
  const [totalCartItems, setTotalCartItems] = useState(0);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setTotalCartItems(newCartCount);
  }, [cartItems]);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping=icon" />
      <ItemCount>{totalCartItems}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
