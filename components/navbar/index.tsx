/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Link from "next/link";

const Navbar = ({ selected }: { selected: string }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container" style={{ paddingTop: "50px" }}>
        <button
          className="navbar-toggler shadow-none outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon">
            <img src="/assets/img/toggler.svg" />
          </span>
        </button>
        <Link href="/">
          <span className="navbar-brand">
            <img src="/assets/img/Funtown.png" alt="funtownlogo" />
          </span>
        </Link>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link href="shop">
                <span
                  className={`nav-link ${
                    selected === "shop" ? "selected" : ""
                  }`}
                >
                  Shop
                </span>
              </Link>
            </li> */}
            <li className="nav-item">
              <Link href="/aboutus">
                <span
                  className={`nav-link ${
                    selected === "aboutus" ? "selected" : ""
                  }`}
                >
                  About
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio">
                <span
                  className={`nav-link ${
                    selected === "portfolio" ? "selected" : ""
                  }`}
                >
                  Portfolio
                </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/gazatte">
                <span
                  className={`nav-link ${
                    selected === "gazatte" ? "selected" : ""
                  }`}
                >
                  Gazatte
                </span>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/contactus">
                <span
                  className={`nav-link ${
                    selected === "contactus" ? "selected" : ""
                  }`}
                >
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
