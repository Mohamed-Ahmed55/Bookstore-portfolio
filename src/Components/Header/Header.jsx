
import "./Header.css"
import HeaderTop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderBottom from './HeaderBottom';
import Sidenav from '../Sidenav/Sidenav';
import { useState } from 'react';




const Header = ()=>{

    const [show1nav , setShow1nav] = useState(false)
    
      const show1navHandler = ()=>{
        setShow1nav(true)
      }
      const close1navHandler = ()=>{
        setShow1nav(false)
      }

    return(
<header>

    <HeaderTop />
    <HeaderMiddle  open1nav={show1navHandler} />
    <HeaderBottom/>
     {show1nav &&  <Sidenav close1nav={close1navHandler} /> }

</header>
    )
}
export default Header