import { Fragment, useContext, useState } from "react"
import { useParams } from "react-router-dom";
import Data from "../../Data/Data";
import Rating from "../../Components/OurShop/BItem/Rating/Rating";
import payment from '../../assets/payment.png';
import './Details.css';
import CartContext from "../../Components/CartContext/CartContext";



const Details = ()=>{

    const [Q1uan , setQ1uan] = useState(1);

    const {AddToCart} = useContext(CartContext);

    const params = useParams();

    const my1book1details = Data.find((the1book)=>{
        return(
            the1book.id === params.id
        )
    })



    return(
        <Fragment>
            <section className="book-details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="book-img">
                                <img src={my1book1details.img} alt={my1book1details.title}/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <span className="stock">{my1book1details.stock}</span>
                            <h2>{my1book1details.title}</h2>
                            <li>
                                author : <span>{my1book1details.author}</span>
                            </li>
                            <li>
                                <Rating BookRate={my1book1details.rating}/>
                            </li>
                            <hr />
                            <span className="price">{my1book1details.price} $</span>
                            <p>{my1book1details.description}</p>
                            <hr />
                            <div className="actions">
                                <input min="1" max="100" type="number" value={Q1uan} 
                                onChange={e => setQ1uan(e.target.value)}/>
                                <button onClick={()=>AddToCart({...my1book1details , quantity : Q1uan})}>+ add to cart</button>
                            </div>
                            <div className="features">
                                <ul>
                                    <li>
                                        <i className="bi bi-truck"></i> 
                                        : Free shipping
                                    </li>
                                    <li>
                                        <i className="bi bi-shield-check"></i>
                                        :  Flexible and secure payment, pay on delivery
                                    </li>
                                    <li>
                                        <i className="bi bi-patch-check-fill"></i>
                                        : 600,000 happy customers
                                    </li>
                                </ul>
                            </div>
                            <hr />
                            <div className="payment">
                                <img src={payment} alt="payment" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}


export default Details;