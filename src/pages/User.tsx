import Single from "../components/Single";
import { singleUser } from "../data";

const User = () => {
    return (
        <div className="h-full">
            <Single {...singleUser} />
        </div>
    );
};

export default User;
