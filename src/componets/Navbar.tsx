import { useState } from "react";
import "../App.css";

const NavBar: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar state
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid">
        
      <ul className="navbar-nav me-auto mb-2 mb-md-0 d-flex flex-row w-100 justify-content-between align-items-center">
  <li className="nav-item">
    <a className="navbar-brand" href="#">
      <img
        src="./logo.jpg"
        width="40"
        height="30"
        className="d-inline-block align-center"
        alt=""
      />
    </a>
  </li>

  <li className="nav-item">
    <span className="fw-bolder fs-4">VESA</span>
  </li>

 
  <li className="nav-item">
 
  <i className="fa-solid fa-cart-shopping" style={{marginRight:"20px", paddingTop:"7px"}}></i>
    <button className="toggle-btn" onClick={toggleSidebar}>
    <span className="navbar-toggler-icon" />
    </button>
  </li>
</ul>


        {/* <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        <div
          className="
         navbar-collapse"
          id="navbarSupportedContent"
        >
          {/* Sidebar  */}
          <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`}>
            <h2>Sidebar Menu</h2>
            <ul>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">Settings</a>
              </li>
              <li>
                <a href="#">Logout</a>
              </li>
            </ul>
          </div>

          {/* Overlay (optional, to dim the background when sidebar is open) */}
          {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
