// take 3 varible and run in jsx htnml
// import "./ProductCard.css";
function ProductCard({ Name, Price, isAvailable }) {
    return (
        <div className="product-card">
            {/* diclare a class for css */}
            <p>{Name}</p>
            <p>{Price}</p>
            <p>{isAvailable ? <p className="available">IS available</p> : <p className="not-available">Not Available</p>}</p>
        </div>
    );
}
export default ProductCard;
// export in another method
// export {ProductCard};

            {/* <p>Price: {product.price}</p> */}

          
    