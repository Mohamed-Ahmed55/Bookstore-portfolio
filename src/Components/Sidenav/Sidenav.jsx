import { FaWindowClose } from "react-icons/fa";
import './Sidenav.css';



const Sidenav =(props)=>{
    return(
        <div className="sidenav">
            <div className="exit" onClick={props.close1nav}>
                <FaWindowClose className="window-close" />
            </div>
            <ul>
                <li><a href="#">home</a></li>
                <li><a href="#">about us</a></li>
                <li><a href="#">shop</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">contact</a></li>
            </ul>
        </div>
    )
}


export default Sidenav;