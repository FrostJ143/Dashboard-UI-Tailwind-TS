import { topDealUsers } from "../data";

const Topdeal = () => {
    return (
        <div className="flex h-full flex-col px-3 py-4">
            <h2 className="text-2xl font-bold">Top Deals</h2>
            <ul className="ml-4 mt-4 flex flex-1 flex-col justify-between">
                {topDealUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between">
                        <div className="flex items-center justify-center">
                            <img
                                src={user.img}
                                alt=""
                                className="h-8 w-8 rounded-full object-cover"
                            />
                            <div className="ml-2 flex flex-col text-sm">
                                <span>{user.username}</span>
                                <span className="text-xs">{user.email}</span>
                            </div>
                        </div>
                        <span className="text-sm font-medium">${user.amount}</span>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Topdeal;
