import { useContext } from "react"
import { ProdcutsContext } from "../../contexts/products.context"
import ProductCard from "../../components/product-card/product-card.component"
import './shop.styles.scss'
const Shop = () =>{
    const {products} = useContext(ProdcutsContext)
    return(
        <div className='products-container'>
            {products.map(product => (
            <ProductCard key={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Shop