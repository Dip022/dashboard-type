import { Fragment, useState } from "react";
import logo from "../../assets/img/logo.png";
import { navItems } from "../../nav";
import { Link } from "react-router-dom";

const TypeOne = () => {
    const [isNavOpen, setIsNavOpen] = useState(null);
    const [activeNav, setActiveNav] = useState(0);
    console.log(isNavOpen);
    return (
        <div className="sidebar">
            <a className="logo">
                <img src={logo} alt="logo" />
            </a>
            <div className="sidebar-nav">
                <div className="top-nav">
                    <ul>
                        {navItems.map((item, index) => {
                            if (item?.path || item?.children) {
                                return (
                                    <li
                                        className={`sidebar-nav-item ${
                                            activeNav === index
                                                ? "active-sub-menu"
                                                : ""
                                        }`}
                                        style={{
                                            width: "100%",
                                            height: `${
                                                isNavOpen === index
                                                    ? "100%"
                                                    : "45px"
                                            }`,
                                        }}
                                        key={index}
                                    >
                                        {item?.children ? (
                                            <Fragment>
                                                <a
                                                    className="d-flex justify-content-between align-items-center nav-item"
                                                    onClick={() => {
                                                        setIsNavOpen(
                                                            isNavOpen === index
                                                                ? null
                                                                : index
                                                        );
                                                        setActiveNav(
                                                            activeNav === index
                                                                ? activeNav
                                                                : index
                                                        );
                                                    }}
                                                >
                                                    <div className="d-flex align-items-center">
                                                        <i
                                                            className={`${item.icon} icon`}
                                                        ></i>
                                                        {item.name}
                                                    </div>
                                                    <i
                                                        className={`${
                                                            isNavOpen === index
                                                                ? "fa-solid fa-angle-down"
                                                                : "fa-solid fa-chevron-right"
                                                        } arrow`}
                                                    ></i>
                                                </a>
                                                {item?.children &&
                                                isNavOpen === index ? (
                                                    <ul className="sub-menu">
                                                        {item?.children?.map(
                                                            (menu, index) => {
                                                                return (
                                                                    <li
                                                                        key={
                                                                            index
                                                                        }
                                                                    >
                                                                        <Link
                                                                            className="d-flex align-items-center"
                                                                            to=""
                                                                        >
                                                                            <i
                                                                                className={
                                                                                    menu?.icon
                                                                                }
                                                                            ></i>
                                                                            {
                                                                                menu.name
                                                                            }
                                                                        </Link>
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                ) : null}
                                            </Fragment>
                                        ) : (
                                            <Link
                                                to=""
                                                className="d-flex justify-content-between align-items-center nav-item"
                                                onClick={() => {
                                                    setIsNavOpen(
                                                        isNavOpen === index
                                                            ? null
                                                            : index
                                                    );
                                                    setActiveNav(
                                                        activeNav === index
                                                            ? activeNav
                                                            : index
                                                    );
                                                }}
                                            >
                                                <div className="d-flex align-items-center">
                                                    <i
                                                        className={`${item.icon} icon`}
                                                    ></i>
                                                    {item.name}
                                                </div>
                                                <span
                                                    className={`badge  bg-${item?.badge?.variant}`}
                                                >
                                                    {item?.badge?.text}
                                                </span>
                                            </Link>
                                        )}
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
                <div className="bottom-nav">2</div>
            </div>
        </div>
    );
};

export default TypeOne;
