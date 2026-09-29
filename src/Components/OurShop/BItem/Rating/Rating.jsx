

const Rating = ({BookRate})=>{

    return(
        <div className="rating">
        {
            BookRate >= 1 ? <i className="bi bi-star-fill"></i>:
            BookRate >= 0.5 ? <i className="bi bi-star-half"></i>:
             <i className="bi bi-star"></i>
        }
         {
            BookRate >= 2 ? <i className="bi bi-star-fill"></i>:
            BookRate >= 1.5 ? <i className="bi bi-star-half"></i>:
             <i className="bi bi-star"></i>
        }
         {
            BookRate >= 3 ? <i className="bi bi-star-fill"></i>:
            BookRate >= 2.5 ? <i className="bi bi-star-half"></i>:
             <i className="bi bi-star"></i>
        }
         {
            BookRate >= 4 ? <i className="bi bi-star-fill"></i>:
            BookRate >= 3.5 ? <i className="bi bi-star-half"></i>:
             <i className="bi bi-star"></i>
        }
         {
            BookRate >= 5 ? <i className="bi bi-star-fill"></i>:
            BookRate >= 4.5 ? <i className="bi bi-star-half"></i>:
             <i className="bi bi-star"></i>
        }
</div>

    )
} 
export default Rating