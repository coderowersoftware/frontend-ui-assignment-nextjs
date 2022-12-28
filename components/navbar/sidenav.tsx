import Link from "next/link";

const SideNavbar = ({ selected }: { selected: string }) => {
  return (
    <div className="navbar_vertical_container d-none d-md-none d-lg-block d-sm-block">
      <div className="navbar_vertical" id="navbarNavVertical">
        <ul className="navbar-nav">
          {/* <li className="nav-item">
            <Link href="shop">
              <span
                className={`nav-link ${selected === "shop" ? "selected" : ""}`}
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
  );
};

export default SideNavbar;
