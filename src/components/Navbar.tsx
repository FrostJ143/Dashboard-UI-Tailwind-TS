const Navbar = () => {
    return (
        <div className="flex h-[var(--navbar-height)] items-center justify-between px-5 py-2">
            <div className="flex-center">
                <img src="../../public/conversionicon.svg" alt="" />
                <span>Sangadmin</span>
            </div>
            <div className="flex-center gap-x-20">
                <div className="flex-center">
                    <img className="cursor-pointer " src="../../public/search.svg" alt="" />
                    <img className="ml-5 cursor-pointer" src="../../public/app.svg" alt="" />
                    <img className="ml-5 cursor-pointer" src="../../public/expand.svg" alt="" />
                    <div className="relative cursor-pointer">
                        <img className="ml-5" src="../../public/notifications.svg" alt="" />
                        <span className="flex-center absolute -right-2 -top-1 h-3.5 w-3.5 rounded-full bg-red-600 text-xs">
                            1
                        </span>
                    </div>
                </div>
                <div className="flex-center cursor-pointer">
                    <img
                        src="../../public/noavatar.png"
                        alt="admin avatar"
                        className="h-6 w-6 rounded-full object-cover"
                    />
                    <span className="ml-3">Sang</span>
                </div>
                <div className="cursor-pointer">
                    <img src="../../public/settings.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
