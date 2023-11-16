import avatar from "../../../assets/img/admin.jpg";

const TopbarTypeOne = ({ activePage, sidebarExpand, setSidebarExpand }) => {
    return (
        <div className="navbar-top d-flex justify-content-between align-items-center ">
            <div className="left-nav-item d-flex align-items-center gap-3">
                <h2>{activePage}</h2>
                <button
                    type="button"
                    className={`${!sidebarExpand ? "expand-btn" : ""}`}
                    onClick={() => setSidebarExpand(!sidebarExpand)}
                >
                    <span></span>
                </button>
            </div>
            <div className="right-nav-item d-flex align-items-center gap-3">
                <label className="search-bar">
                    <i
                        htmlFor="search"
                        className="fa-solid fa-magnifying-glass"
                    ></i>
                    <input id="search" type="text" placeholder="search..." />
                </label>
                <button type="button" className="user-avatar">
                    <img src={avatar} alt="avatar" />
                </button>
            </div>
        </div>
    );
};

export default TopbarTypeOne;
