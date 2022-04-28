import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addToCart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => {
    const [ cart , setCart ] = useState([]);
    
    const handleClick =()=> {
        setCart([]);
    }

    // Variable creada por la falta de imagen en el objeto recibido
    const images = 'https://random.imagecdn.app/500/150';
    
    return (
        <div className='ProductItem'>
            <img src={ images } alt={ product.title } />
            <div className='product-info'>
                <div>
                    <p>${ product.price }</p> 
                    <p>{ product.title }</p> 
                </div>
                <figure onClick={ handleClick }>
                    <img src={ addToCart }/>
                </figure>
            </div>
        </div>
    );
}

export default ProductItem;