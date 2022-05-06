import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import addToCartImage from '@icons/bt_add_to_cart.svg';
// Context
import AppContext from '../context/AppContext';


const ProductItem = ({ product }) => {
    const { addToCart } = useContext(AppContext);

    // item = es el producto añadido
    const handleClick = item => {
        addToCart(item);
    }

    const images = 'https://random.imagecdn.app/500/150';
    
    return (
        <div className='ProductItem'>
            <img src={ images } alt={ product.title } />
            <div className='product-info'>
                <div>
                    <p>${ product.price }</p> 
                    <p>{ product.title }</p> 
                </div>
                <figure onClick={ ()=> handleClick(product) }>
                    <img src={ addToCartImage }/>
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;