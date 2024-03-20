import React from 'react'
import './Cart.scss'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import { removeItem ,resetCart} from '../../redux/cartReducer';
const Cart = () => {

    const products = useSelector(state=>state.cart.products);
    const totalPrice = () => {
        let total = 0;
        products.forEach((item)=>(total += item.quantity * item.price));
        return total.toFixed(2);
    }
    const dispatch = useDispatch();
  return (
    <div className='cart'>
        <h1>Product in your Cart</h1>
        {products && products.map((item)=>(
            <div className='item' key={item.id}>
                <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt=''/>
                <div className='details'>
                    <h1>{item.title}</h1>
                    <p>{item.desc && item.desc.substring(0,100)}</p>
                    <div className='price'>
                        {item.quantity} X {item.price}
                    </div>
                </div>
                <div 
                className='delete'
                onClick={()=>dispatch(removeItem(item.id))}
                >
                <DeleteOutlineOutlinedIcon/>
                </div>
            </div>
        ))}
        <div className='total'>
            <span>total</span>
            <span>${totalPrice()}</span>
        </div>
        <button>Proceed To Checkout</button>
        <span className='reset'
        onClick={()=>dispatch(resetCart())}
        >Reset Cart</span>
    </div>
  )
}

export default Cart