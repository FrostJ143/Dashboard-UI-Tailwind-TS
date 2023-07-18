import { menu } from "../data";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className="flex h-full flex-col justify-between">
            {menu.map((category) => (
                <div key={category.id} className="flex flex-col ">
                    <h3 className="mb-1 text-xs font-extralight text-soft first-letter:uppercase">
                        {category.title.toLowerCase()}
                    </h3>
                    {category.listItems.map((item) => (
                        <Link
                            to={item.url}
                            key={item.id}
                            className="ml-1 flex items-center rounded-md px-2 py-2 text-sm hover:bg-soft"
                        >
                            <img src={item.icon} alt="" />
                            <span className="ml-3">{item.title}</span>
                        </Link>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Menu;
