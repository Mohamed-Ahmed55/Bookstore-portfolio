import { FaTrash } from "react-icons/fa";
import Rating from "../../Components/OurShop/BItem/Rating/Rating";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../Components/CartContext/CartContext";


const MyCartItem = ({CartItem})=>{

    const {AddToCart} = useContext(CartContext);
    const {RemoveFromCart} = useContext(CartContext);

    return(
        <div className="cart-box">
            <div className="cart-img">
                <img src={CartItem.img} alt={CartItem.title} />
            </div>
            <div className="cart-info">
                <Link to={`/${CartItem.id}`}>{CartItem.title}</Link>
                <span>{CartItem.author}</span>
                <Rating BookRate={CartItem.rating}/>
                <span>{CartItem.price}$</span>
                <div className="actions">
                    <button onClick={()=>AddToCart({...CartItem , quantity : Number(CartItem.quantity) + 1})}>+</button>
                    <span>{CartItem.quantity}</span>
                    <button onClick={()=>AddToCart({...CartItem , quantity :  Number(CartItem.quantity) - 1})}>-</button>
                    <button onClick={()=>{RemoveFromCart(CartItem.id)}}><FaTrash /></button>
                </div>
            </div>
        </div>
    )
}

export default MyCartItem;