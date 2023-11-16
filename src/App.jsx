import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import TypeOne from "./components/types/TypeOne/TypeOne";
import TopbarTypeOne from "./components/adminTopbar/TopbarTypeOne.js/TopbarTypeOne";
import { Fragment, useState } from "react";

function App() {
    const [sidebarExpand, setSidebarExpand] = useState(false);
    const [sidebarMouseOver, setSidebarMouseOver] = useState();
    const [activePage, setActivePage] = useState("Dashboard");
    console.log(!sidebarMouseOver);
    return (
        <Fragment>
            <div className="admin-wrapper-one">
                <TypeOne
                    sidebarExpand={sidebarExpand}
                    setActivePage={setActivePage}
                    sidebarMouseOver={sidebarMouseOver}
                    setSidebarMouseOver={setSidebarMouseOver}
                />
                <div
                    className={`right-content ${
                        sidebarMouseOver === "dip" ? "hello" : ""
                    }`}
                    style={{
                        width: `${
                            sidebarExpand || sidebarMouseOver
                                ? "calc(100% - 256px)"
                                : "calc(100% - 56px)"
                        }`,
                    }}
                >
                    <TopbarTypeOne
                        activePage={activePage}
                        sidebarExpand={sidebarExpand}
                        setSidebarExpand={setSidebarExpand}
                    />
                </div>
            </div>
        </Fragment>
    );
}

export default App;
