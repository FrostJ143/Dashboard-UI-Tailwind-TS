const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-5 py-2">
            <div className="flex-center">
                <img src="../../public/conversionicon.svg" alt="" />
                <span>Sangadmin</span>
            </div>
            <div className="flex-center gap-x-20">
                <div className="flex-center">
                    <img className="cursor-pointer " src="../../public/search.svg" alt="" />
                    <img className="cursor-pointer ml-5" src="../../public/app.svg" alt="" />
                    <img className="cursor-pointer ml-5" src="../../public/expand.svg" alt="" />
                    <div className="cursor-pointer relative">
                        <img className="ml-5" src="../../public/notifications.svg" alt="" />
                        <span className="h-3.5 w-3.5 bg-red-600 rounded-full absolute flex-center -top-1 -right-2 text-xs">1</span>
                    </div>
                </div>
                <div className="flex-center cursor-pointer">
                    <img src="../../public/noavatar.png" alt="admin avatar" className="w-6 h-6 rounded-full object-cover" />
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
