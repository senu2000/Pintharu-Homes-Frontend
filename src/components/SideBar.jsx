import { Sidebar } from "flowbite-react";
import "../css/Sidebar.css";
import {useLocation,Link} from "react-router-dom";

export default function Categorysidebar() {
    const toggleSidebar = () => {
        const sidebar = document.getElementById('default-sidebar');
        const content = document.getElementById('content');
        sidebar.classList.toggle('sidebar-visible');
        content.classList.toggle('blur-background');
    };
    const location = useLocation();

    const isLinkActive = (pathname) => {
        return location.pathname === pathname ? 'active' : '';
    };

    return (
        <div>
            {/* Toggle button for smaller screens */}
            <button
                onClick={toggleSidebar}
                aria-controls="default-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 togglebtnSidebar"
            >
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            {/* Sidebar */}
            <Sidebar id="default-sidebar" aria-label="Sidebar with multi-level dropdown example" className="editsidebar">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <h1 className="sidebarheading">Category</h1>
                        <Link to="/allPaintItemsWall"><Sidebar.Item className={`sidebaritemsEdit ${isLinkActive('/allPaintItemsWall')}`}>
                            Wall Paints
                        </Sidebar.Item></Link>
                        <Link to="/allPaintItemsFloor"><Sidebar.Item className={`sidebaritemsEdit ${isLinkActive('/allPaintItemsFloor')}`}>
                            Floor Paints
                        </Sidebar.Item></Link>
                        <Link to="/allPaintItemsWood"><Sidebar.Item className={`sidebaritemsEdit ${isLinkActive('/allPaintItemsWood')}`}>
                            Wood and Furniture
                        </Sidebar.Item></Link>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
}
