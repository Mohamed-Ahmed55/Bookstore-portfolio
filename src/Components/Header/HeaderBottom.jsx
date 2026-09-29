
import {    Link } from "react-router-dom"

const HeaderBottom = ()=> {
    return (
        <div className="header-bottom">
            <nav>
                <ul>
                    <li> < Link to="/">home</Link> </li>
                    <li> < Link to="/about">about</Link> </li>
                    <li> < Link to="/shop">shop</Link> </li>
                    <li> < Link to="/blog">blog</Link> </li>
                    <li> < Link to="/contact">contact us</Link> </li>

                </ul>
            </nav>
        </div>
    )
}
export default HeaderBottom