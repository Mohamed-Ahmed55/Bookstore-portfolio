import MyCartItem from"./CartItem";
import './Cart.css'
import { useContext } from "react";
import CartContext from "../../Components/CartContext/CartContext";


const CartPage = ()=>{

    const {CartItems} = useContext(CartContext);

    const the1cart1item = CartItems.map((Item)=>{
        return(
            <MyCartItem CartItem={Item} key={Item.id} />
        )
    })

    const total1amount = CartItems.reduce((acc , current)=> (acc + current.price * current.quantity ) , 0 )

    return(
      <section className="cart1list">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    {the1cart1item}
                </div>
                <div className="col-lg-4">
                    <div className="cart-total">
                        <li>
                            <span>subtotal</span>
                            <span>{total1amount}$</span>
                        </li>
                        <li>
                            <span>discount</span>
                            <span>00.00</span>
                        </li>
                        <li>
                            <span>shopping cost</span>
                            <span>0</span>
                        </li>
                        <li>
                            <span>total</span>
                            <span>{(total1amount).toFixed(2)}$</span>
                        </li>
                        <button>proceed to checkout</button>
                    </div>
                </div>
            </div>
        </div>
      </section>
    )
}


export default CartPage;