import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
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

      {cartItems.map(({ id, name, quantity }) => (
        <div key={id}>
          <h2>{name}</h2>
          <span>{quantity}</span>
          <br />
          <span onClick={() => removeItemFromCart({ id, name, quantity })}>
            decrement
          </span>
          <br />
          <span onClick={() => addItemToCart({ id, name, quantity })}>
            increment
          </span>
        </div>
      ))}
      <span className="Total">Total: 0</span>
    </div>
  );
};

export default Checkout;
