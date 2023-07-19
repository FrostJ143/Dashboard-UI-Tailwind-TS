import Single from "../components/Single";
import { singleProduct } from "../data";

const Product = () => {
    return (
        <div className="h-full">
            <Single {...singleProduct} />
        </div>
    );
};

export default Product;
