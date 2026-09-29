import { FaEye, FaHeart } from "react-icons/fa";
import Sale from "./Sale/Sale";
import Rating from "./Rating/Rating";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../CartContext/CartContext";

const BItem = ({The1book})=>{

    const {AddToCart} = useContext(CartContext)
    
    return(
        <div className='box'>
            <div className='img'>
                <img src={The1book.img} alt={The1book.title} />
            </div>
            <div className="text">
                <Rating BookRate={The1book.rating}/>
                <Link to={`/${The1book.id}`}>{The1book.title}</Link>
                <span className="author">{The1book.author}</span>
                <h4>{The1book.price}</h4>
                <button onClick={()=> AddToCart(The1book)}>add to cart</button>
            </div>
            <Sale sale={The1book.sale}/>
            <div className="box-icons">
                <li><FaEye /></li>
                <li><FaHeart /></li>
            </div>
        </div>
    )
}

export default BItem ;