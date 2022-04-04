import logo from "./images/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mx-0 my-0 ">
        <div className="container">
          <img src={logo} width={150} height={80} alt="imagesss"></img>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item py-2">
                <h4 className=" btn btn-primary py-2 active">
                  <Link className="text-white text-decoration-none py-2" to="/">
                    Home
                  </Link>
                </h4>
              </li>
              <li className="nav-item py-2">
                <h4 className="btn btn-primary py-2">
                  <Link
                    className="text-white text-decoration-none py-2"
                    to="/state"
                  >
                    State
                  </Link>
                </h4>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Header;
