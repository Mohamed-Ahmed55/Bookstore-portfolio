import img1 from '../../assets/h1-slider3-1.png';
import flower from '../../assets/h1-slider5.png';
import './WrapHeader.css';


const WrapHeader = ()=>{
    return(
        <section className="wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h4>a brand new series</h4>
                        <h2>the world of young adult books</h2>
                        <span>save up to 15% on new releases</span>
                        <button><a href="#">discover now</a></button>
                    </div>
                    <div className="col-lg-6">
                        <div className="wrap-img">
                            <img src={img1} alt="wrap-book"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flower">
                <img src={flower} alt="flower"/>
                <span>15% <br/> off</span>
            </div>
        </section>
    )
}


export default WrapHeader ;