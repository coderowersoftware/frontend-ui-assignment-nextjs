/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top footer-main"
      style={{ backgroundColor: "#FEDEDE" }}
    >
      <div className="row" style={{ margin: "auto", width: "100%" }}>
        <h2
          className="col-12 col-md-7 mb-0 m-lg-4 text-dark fw-bold"
          style={{
            fontSize: "40px",
            fontFamily: " Abril Fatface",
          }}
        >
          Funtown
        </h2>

        <ul
          className="nav col-md-3 flex-column fw-bold"
          style={{
            width: "fit-content",
          }}
        >
          <li className="nav-item align-self-start">
            <Link href="aboutus" className="nav-link px-2 text-dark">
              About
            </Link>
          </li>
          <li className="nav-item align-self-start">
            <a href="portfolio" className="nav-link px-2 text-dark">
              Portfolio
            </a>
          </li>
          <li className="nav-item align-self-start">
            <Link href="gazatte" className="nav-link px-2 text-dark">
              Gazatte
            </Link>
          </li>
          <li className="nav-item align-self-start">
            <Link href="contactus" className="nav-link px-2 text-dark">
              Contact
            </Link>
          </li>
        </ul>
        <a className="col-md-3 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <img
            src="/assets/img/Group.png"
            className="img-fluid"
            style={{ height: "270px" }}
          />
        </a>
        <div className="col-md-4 d-flex">
          <a
            className="fw-bold text-dark"
            href="mailto:hello@funtownstudio.com"
            style={{ marginLeft: "5%" }}
          >
            <h2>hello@funtownstudio.com</h2>
          </a>
          <div style={{ position: "relative", bottom: "12px", right: "2px" }}>
            <img
              src="/assets/img/mail_arrow.png"
              alt=""
              style={{ width: "15px", height: "15px" }}
            />
          </div>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="#"></a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#"></a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="#"></a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
