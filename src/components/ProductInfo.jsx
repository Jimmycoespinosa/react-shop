import React from "react";
import '../styles/ProductInfo.scss';
import '../styles/ProductDetail.scss';

import close from '@icons/icon_close.png';
import addCar from '@icons/bt_add_to_cart.svg';

const ProductInfo = () => {
    return (
        <aside class="product-detail">
            <div class="product-detail-close">
                <img src={close} alt="close" />
            </div>
            <img src="" alt="Bike" />{/*Se elimina referencia a imagen para evitar error.*/}
            <div class="dots">
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
            <div class="product-info">
                <p>$35.00</p>
                <p>Bike</p>
                <p>With its practical this bike also fulfills a decorative function, add your hall or workspace.</p>
                <button class="primary-button add-to-card-button">
                    <img src={addCar} alt="add to cart" />
                        Add to cart
                </button>
            </div>
        </aside>
    );
}

export default ProductInfo;
