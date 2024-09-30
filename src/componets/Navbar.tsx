import { useState } from "react";
import "../App.css"

 

const NavBar:React.FC=()=>  {

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false); // Sidebar toggle state

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle the sidebar state
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src='./logo.png'
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4">Null</span>
          
        </a> 
        <button className="toggle-btn" onClick={toggleSidebar}>
        <span className="navbar-toggler-icon" />
      </button>
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
        id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            <li>
</li>
          <li className="nav-item">Test</li>
          
            
          </ul>
          {/* <form className="d-flex me-3">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}


      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <h2>Sidebar Menu</h2>
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </div>

      {/* Overlay (optional, to dim the background when sidebar is open) */}
      {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
