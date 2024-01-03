import "./checkout.styles.scss";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    setTotalCost(newCartCount);
  }, [cartItems]);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: {totalCost}</span>
    </div>
  );
};

export default Checkout;
