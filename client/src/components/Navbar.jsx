import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation()
  const isActive = (path) => {
    console.log(path, location.pathname);
    return location.pathname === path;
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isMobile ? (
        // Render sidebar for mobile
        <header className="text-gray-600 body-font bg-gray-200 shadow-md sticky top-0 z-10">
          <div className="container mx-auto p-5">
            <div className="flex items-center justify-between">
              <a className="flex title-font font-medium items-center text-gray-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl font-bold">DialogBot</span>
              </a>
              <button
                className="md:hidden focus:outline-none"
                onClick={toggleSidebar}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {isSidebarOpen ? (
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  )}
                </svg>
              </button>
            </div>
            {isSidebarOpen && (
              <nav className="mt-4 space-y-4" >
                <NavLink
                  className="block hover:text-gray-900"
                  activeClassName="font-semibold"
                  exact="true"
                  to="/"
                  onClick={toggleSidebar}
                >
                  Home
                </NavLink>
                <NavLink
                  className="block hover:text-gray-900"
                  activeClassName="font-bold"
                  exact="true"
                  to="/about"
                  onClick={toggleSidebar}
                >
                  About
                </NavLink>
                <NavLink
                  className="block hover:text-gray-900"
                  activeClassName="font-bold"
                  exact="true"
                  to="/guide"
                  onClick={toggleSidebar}
                >
                  Steps
                </NavLink>
                <NavLink
                  className="block hover:text-gray-900"
                  activeClassName="font-bold"
                  exact="true"
                  to="/demo"
                  onClick={toggleSidebar}
                >
                  Demo
                </NavLink>
              </nav>
            )}
          </div>
        </header>
      ) : (
        // Render regular navbar for larger screens
        <header className="text-gray-600 body-font bg-gray-200 shadow-md sticky top-0 z-10">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-purple-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl font-bold">DialogBot</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <NavLink
                className={`mr-5 hover:text-gray-900 ${
                  isActive("/") ? "font-bold" : ""
                }`}
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={`mr-5 hover:text-gray-900 ${
                  isActive("/about") ? "font-bold" : ""
                }`}
                to="/about"
              >
                About
              </NavLink>

              <NavLink
                className={`mr-5 hover:text-gray-900 ${
                  isActive("/steps") ? "font-bold" : ""
                }`}
                to="/steps"
              >
                Steps
              </NavLink>

              <NavLink
                className={`mr-5 hover:text-gray-900 ${
                  isActive("/demo") ? "font-bold" : ""
                }`}
                to="/demo"
              >
                Demo
              </NavLink>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
