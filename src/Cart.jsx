import React, { useState } from 'react';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import CartModal from './CartModal';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Cart = (props) => {
    const [isOpen, setIsOpen] = useState(false)

    const inputEvent=()=>{
        return(
            alert('Thankyou for Shopping with us.')
        )
    }
    return (

        <>
            <Link className="mx-4 text-lg text-success" onClick={() => setIsOpen(true)}>
                <ShoppingCartIcon fontSize='large' />
            </Link>
            <CartModal open={isOpen} onClose={() => setIsOpen(false)} >
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">S.No</th>
                            <th scope="col">Product</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>White Men's Shirt </td>
                            <td>1</td>
                            <td>₹ 1200</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Check Women Saree </td>
                            <td>1</td>
                            <td>₹ 2999 </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Men Jeans </td>
                            <td>1</td>
                            <td>₹ 1000</td>
                        </tr>
                    </tbody>
                </table>
                <p className="float-right">Total: ₹6199</p>
                <br/>
                <div className='text-center'>
                <button className="CheckOutBtn" onClick={inputEvent}>Order Now</button>
                </div>
            </CartModal>
        </>
    )
}
export default Cart;