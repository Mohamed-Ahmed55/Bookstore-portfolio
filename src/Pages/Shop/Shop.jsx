

import Data from "../../Data/Data";
import BItem from "../../Components/OurShop/BItem/BItem";
import "./Shop.css";

const Shop = () => {
    
  const allBooks = Data.map((The1book) => {
    return (
      <div className="col-lg-3 col-md-6 mb-4" key={The1book.id}>
        <BItem The1book={The1book} />
      </div>
    );
  });

  return (
    <div className="shop-page">
      <div className="container">
        <div className="shop-header">
          <h2>Explore All Books</h2>
          <p>Discover your next favorite read from our complete bookstore collection.</p>
        </div>
        <div className="row">
          {allBooks}
        </div>
      </div>
    </div>
  );
};

export default Shop;