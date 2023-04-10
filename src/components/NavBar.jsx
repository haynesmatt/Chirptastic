import './NavBar.css'
import { Outlet, Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li className="home-link" key="home-button">
            <Link to="/">
              Create New Bird
            </Link>
          </li>
          <li className="gallery-link" key="gallery-button">
            <Link to="/gallery">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default NavBar;