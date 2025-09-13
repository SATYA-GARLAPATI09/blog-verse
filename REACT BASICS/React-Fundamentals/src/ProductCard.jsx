// take 3 varible and run in jsx htnml
import app from 'App.jsx';
function ProductCard({name,age}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
        </div>
    );
}
export default ProductCard;
// export in another method
// export {ProductCard};
    