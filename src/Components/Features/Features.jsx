import './Features.css';
import sale from '../../assets/sale.png';



const Features = ()=>{
    return(
        <section className="offers">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="offers-box one">
                            <a href="#">
                                <div className="text">
                                    <h3>books make <br/>great gifts</h3>
                                    <span>why not send the gift of the<br/> book to family & friends</span>
                                </div>
                            </a>
                            <div className="sale">
                                <img src={sale} alt="sale" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="offers-box two">
                            <a href="#">
                                <div className="text">
                                    <h3>sale 10% off</h3>
                                    <span>it is all begins with great books</span>
                                    <button><a href="#">shop now</a></button>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Features ;