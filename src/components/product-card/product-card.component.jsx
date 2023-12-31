import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./product-card.styles.scss";
import Button from "../button/button.component";

const ProductCard = ({ product: { id, name, price, imageUrl } }) => {
  const { addItemToCart } = useContext(CartContext);
  const addProdctToCart = () => addItemToCart({ id, name, price, imageUrl });
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={addProdctToCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
