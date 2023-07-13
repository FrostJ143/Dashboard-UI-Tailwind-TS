const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex-center">
                <img src="../../public/conversionicon.svg" alt="" />
                <span>Sangadmin</span>
            </div>
            <div className="flex-center">
                <div className="flex-center">
                    <img src="../../public/search.svg" alt="" />
                    <img src="../../public/app.svg" alt="" />
                    <img src="../../public/expand.svg" alt="" />
                    <img src="../../public/notifications.svg" alt="" className=""/>
                </div>
                <div className="flex-center">
                    <img src="../../public/noavatar.png" alt="admin avatar" className="w-5 h-5 rounded-full"/>
                    <span>Sang</span>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Navbar;