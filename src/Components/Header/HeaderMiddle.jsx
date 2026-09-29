import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import { FaList } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../CartContext/CartContext';


const HeaderMiddle = (props)=>{

    const {cartItemLength} =  useContext(CartContext)

    return(
        <div className="header-middle">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="logo">
                            <a href="#"><img src={logo} alt="logo" /></a>
                        </div>
                    </div>
                    <div className='col-lg-6'>
                        <div className='search-form'>
                            <input type='text' placeholder='search...'/>
                            <button>
                                <FaSearch/>
                                search
                            </button>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='icons'>
                            <li><Link><FaUser /></Link></li>
                            <li><Link><FaHeart /></Link></li>
                            <li>
                                <span>{cartItemLength}</span>
                                <Link to="/cart"><FaShoppingCart /></Link>
                            </li>
                        </div>
                        <div className='mobile-icon' onClick={props.open1nav}>
                            <FaList />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMiddle;