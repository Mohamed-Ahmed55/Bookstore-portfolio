import { FaWindowClose } from "react-icons/fa";
import './Sidenav.css';
import { Link } from "react-router-dom";


const Sidenav =(props)=>{
    return(
        <div className="sidenav">
            <div className="exit" onClick={props.close1nav}>
                <FaWindowClose className="window-close" />
            </div>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/about">about </Link></li>
                <li><Link to="/shop">shop</Link></li>
                <li><Link to="/blog">blog</Link></li>
                <li><Link to="/contact">contact</Link></li>
            </ul>
        </div>
    )
}


export default Sidenav;