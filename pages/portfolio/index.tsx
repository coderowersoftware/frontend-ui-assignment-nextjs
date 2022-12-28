import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MasterLayout from "../../components/masterPage/masterLayout";
import PortfolioLayout from "../../components/masterPage/portfolioLayout";
import Navbar from "../../components/navbar";
import SideNavbar from "../../components/navbar/sidenav";
import styles from "../../styles/Home.module.css";

export default function Portfolio() {
  return (
    <div className={styles.container}>
      <MasterLayout page={"portfolio"}>
        <PortfolioLayout>
          <section className="hero col-12">
            <div id="portfoliohero">
              <div className="headings_h1 portfolio_h1">Our current</div>
              <div className="headings_h2 portfolio_h2">exhibition</div>
            </div>
          </section>
          <div style={{ height: "170px" }}></div>

          <section className="portfoliopage_card">
            <div className="d-flex justify-content-evenly">
              <div className="row">
                <div className="col col-12 col-md-12 col-lg-6">
                  <img
                    src="/assets/img/portimg2.png"
                    alt=""
                    className="portfolio-img d-flex align-self-center m-auto"
                  />
                </div>
                <div className="col col-12 col-md-12 col-lg-6">
                  <div className="headings ml-10 mt-10 ">
                    <div
                      className="d-none d-sm-block"
                      style={{
                        position: "relative",
                        left: "-60px",
                        bottom: "50px",
                      }}
                    >
                      <img src="/assets/img/star_big.svg" alt="" />
                    </div>
                    01
                    <br />
                    <Link href="/portfolio/mathformoney">MathForMoney</Link>
                    <div
                      className="d-none d-sm-block"
                      style={{
                        position: "relative",
                        left: "160px",
                        bottom: "-60px",
                      }}
                    >
                      <img src="/assets/img/star.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="portfoliopage_card">
            <div className="d-flex justify-content-evenly flex-row-reverse text-center">
              <div className="row">
                <div className="col col-12 col-md-12 col-lg-6">
                  <div
                    className="headings mr-10 mt-10"
                    style={{ textAlign: "left" }}
                  >
                    <div
                      className="d-none d-sm-block"
                      style={{
                        position: "relative",
                        left: "850px",
                        bottom: "140px",
                      }}
                    >
                      <img src="/assets/img/star.svg" alt="" />
                    </div>
                    <div
                      className="d-none d-sm-block"
                      style={{
                        position: "relative",
                        left: "150px",
                        bottom: "20px",
                      }}
                    >
                      <img src="/assets/img/star_big.svg" alt="" />
                    </div>
                    <div
                      className="d-none d-sm-block"
                      style={{ marginBottom: "80px" }}
                    >
                      02
                      <br />
                      <Link href="/portfolio/kinkykimchi">Kinky Kimchi</Link>
                    </div>

                    <div
                      className="d-none d-sm-block"
                      style={{
                        position: "relative",
                        top: "80px",
                      }}
                    >
                      <img src="/assets/img/star.avg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col col-12 col-md-12 col-lg-6">
                  <div className="monster1">
                    <img
                      src="/assets/img/monster.png"
                      alt=""
                      className="portfolio-img kimchi d-flex align-self-center m-auto"
                    />
                  </div>
                </div>
                <div className="headings d-sm-none d-block">
                  <br />
                  <br />
                  <Link href="/portfolio/kinkykimchi">
                    02 <br />
                    Kinky Kimchi
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="portfoliopage_card">
            <div className="d-flex justify-content-evenly ">
              <div className="row">
                <div className="col col-12 col-md-12 col-lg-6">
                  <img
                    src="/assets/img/portimg3.png"
                    className="portfolio-img d-flex align-self-center m-auto"
                  />
                </div>
                <div className="col col-12 col-md-12 col-lg-6">
                  <div className="headings mr-10 mt-10">
                    <div
                      className="d-none d-sm-block"
                      style={{
                        position: "relative",
                        right: "60px",
                        bottom: "80px",
                      }}
                    >
                      <img src="/assets/img/star_big.svg" alt="" />
                    </div>
                    03
                    <br />
                    <Link href="/portfolio/amplo">Amplo</Link>
                    <div
                      className="d-none d-sm-block"
                      style={{
                        position: "relative",
                        left: "170px",
                        top: "130px",
                      }}
                    >
                      <img src="/assets/img/star.svg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </PortfolioLayout>
      </MasterLayout>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { bodyClassName: "secondary" } };
}
