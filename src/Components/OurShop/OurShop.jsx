import Data from '../../Data/Data';
import BItem from './BItem/BItem';
import './OurShop.css';


const OurShop = ()=>{


    const BookItem = Data.map((The1book)=>{
        return(
            <div className='col-lg-3 col-md-6'>
                <BItem The1book={The1book} key={The1book.id}/>
            </div>
        )
    })

    return(
        <section className="our1shop">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <h2>This week's highlights</h2>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <button><a href="#">browse all</a></button>
                    </div>
                </div>
                <div className="row">
                    {BookItem}
                </div>
            </div>
        </section>
    )
}

export default OurShop