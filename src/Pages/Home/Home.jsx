
import OurShop from "../../Components/OurShop/OurShop"
import Slider from "../../Components/Slider/Slider"
import WrapHeader from "../../Components/WrapHeader/WrapHeader"
import { Fragment } from "react"

const Home = ()=> {
    return (
        <Fragment>
            <WrapHeader />
            <Slider />
            <OurShop />

        </Fragment>
    )
}
export default Home