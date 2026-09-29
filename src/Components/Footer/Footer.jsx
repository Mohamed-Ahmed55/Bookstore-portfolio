import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import payment from '../../assets/payment.png';
import classes from './Footer.module.css';


const Footer = ()=>{
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <img src={logo} alt='logo' className={classes.logo}/>
                        <p>
                            Bokifa draws book lovers of all ages into a community,
                            engage with booklovers and meet their favourite literary personalities.
                        </p>
                        <div className={classes.social}>
                            <ul>
                                <li><a href="#"><FaFacebook /></a></li>
                                <li><a href="#"><FaYoutube /></a></li>
                                <li><a href="#"><FaLinkedin /></a></li>
                                <li><a href="#"><FaInstagram/></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <h3>category</h3>
                        <ul>
                            <li><a href="#">Action Books</a></li>
                            <li><a href="#">comedy</a></li>
                            <li><a href="#">drama</a></li>
                            <li><a href="#">horror</a></li>
                            <li><a href="#">kids Books</a></li>
                        </ul>
                    </div>
                     <div className='col-lg-3 col-md-6'>
                        <h3>useful links</h3>
                        <ul>
                            <li><a href="#">secure shopping</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">terms of use</a></li>
                            <li><a href="#">shopping policy</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-3 col-md-6'>
                        <h3>explore</h3>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">store locator</a></li>
                            <li><a href="#">kids club</a></li>
                            <li><a href="#">blogs</a></li>
                        </ul>
                    </div>
                </div>
                <div className={classes.line}></div>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <span>Copyright © 2024 Bokifa. All rights reserved</span>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <img src={payment} alt="payment" className={classes.payment}/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;