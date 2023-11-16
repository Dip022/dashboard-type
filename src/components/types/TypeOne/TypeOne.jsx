import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../../nav";
import logo from "../../../assets/img/logo.png";
import mini_logo from "../../../assets/img/mini-logo.png";

const TypeOne = ({
    setActivePage,
    sidebarExpand,
    sidebarMouseOver,
    setSidebarMouseOver,
}) => {
    const [isNavOpen, setIsNavOpen] = useState(null);
    const [activeNav, setActiveNav] = useState(0);
    const [menuActive, setMenuActive] = useState(null);
    console.log(sidebarMouseOver, "==>");
    return (
        <div
            className={`sidebar ${
                sidebarExpand ? "sidebar-expand" : "sidebar-mini"
            }`}
            onMouseOver={() => setSidebarMouseOver(true)}
            onMouseOut={() => setSidebarMouseOver(false)}
        >
            <a className="logo">
                <img
                    src={`${
                        sidebarExpand || sidebarMouseOver ? logo : mini_logo
                    }`}
                    alt="logo"
                />
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
                                        key={index}
                                    >
                                        {item?.children ? (
                                            <Fragment>
                                                <a
                                                    className="nav-item"
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
                                                        setMenuActive(null);
                                                        setActivePage(
                                                            item.name
                                                        );
                                                    }}
                                                >
                                                    <div className="icon-wrapper d-flex align-items-center">
                                                        <i
                                                            className={`${item.icon} icon`}
                                                        ></i>
                                                        <span>{item.name}</span>
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
                                                                        className={`${
                                                                            isNavOpen &&
                                                                            menuActive ===
                                                                                index
                                                                                ? "sub-menu-active"
                                                                                : ""
                                                                        }`}
                                                                    >
                                                                        <Link
                                                                            className="d-flex align-items-center"
                                                                            to=""
                                                                            onClick={() => {
                                                                                setMenuActive(
                                                                                    menuActive ===
                                                                                        index
                                                                                        ? isNavOpen
                                                                                        : index
                                                                                );
                                                                                setActivePage(
                                                                                    menu.name
                                                                                );
                                                                            }}
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
                                                className="nav-item"
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
                                                    setMenuActive(null);
                                                    setActivePage(item.name);
                                                }}
                                            >
                                                <div className="icon-wrapper d-flex align-items-center">
                                                    <i
                                                        className={`${item.icon} icon`}
                                                    ></i>
                                                    <span>{item.name}</span>
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
                <div className="bottom-nav">
                    <ul>
                        <li>
                            <Link
                                to=""
                                type="button"
                                className="d-flex align-items-center nav-item"
                            >
                                <i className="fa fa-bell"></i>
                                <span>Notification</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to=""
                                type="button"
                                className="d-flex align-items-center nav-item"
                            >
                                <i className="fa-solid fa-envelope"></i>
                                <span>Message</span>
                            </Link>
                        </li>
                        <li>
                            <a
                                type="button"
                                className="d-flex align-items-center nav-item"
                            >
                                <i className="fa-solid fa-file-lines"></i>
                                <span>Documentation</span>
                            </a>
                        </li>
                        <li>
                            <a
                                type="button"
                                className="d-flex align-items-center nav-item"
                            >
                                <i className="fa fa-shopping-cart"></i>
                                <span>Purchase</span>
                            </a>
                        </li>
                        <li>
                            <a
                                type="button"
                                className="d-flex align-items-center nav-item"
                            >
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TypeOne;
