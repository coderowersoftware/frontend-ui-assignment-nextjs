import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MasterLayout from "../../components/masterPage/masterLayout";
import PortfolioLayout from "../../components/masterPage/portfolioLayout";
import Navbar from "../../components/navbar";
import SideNavbar from "../../components/navbar/sidenav";
import styles from "../../styles/Home.module.css";

export default function KinkyKimchi() {
  return (
    <div className={styles.container}>
      <MasterLayout page={"portfolio"}>
        <PortfolioLayout>
          <div className=" col-lg-7 col-12 mathsforfun-inner">
            <div className="row">
              <div className="col ">
                <div className="headings_h1">Kinky Kimchi</div>
              </div>
              <div>
                <div className="row">
                  <div className="col-lg-8 col-12">
                    Kinky Kimchi is a South African-owned business that sells
                    homemade Kimchi with organically-produced ingredients that
                    are sustainably grown by local farmers. By sypporting the
                    local community and bringing delicious goodness to markets
                    and restaurants around Cape Town, this was a brand we
                    couldn’t wait to be involved in.s
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-5"></div>
                  <div className="col col-12 col-md-12">
                    <img
                      src="/assets/img/Rectangle 211.png"
                      height="100%"
                      width="100%"
                      alt=""
                      style={{ minWidth: "100%" }}
                    />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col col-12 col-lg-5 col-md-5">
                    <img src="/assets/img/amplov2 1.png" alt="" width="100%" />
                  </div>
                  <div className="col col-12 col-lg-7 col-md-7">
                    We used a bold type to represent the flavour in the jar and
                    sexy icon that is as provocative as the tingling of the
                    spicy chilli on your tongue. It is a product that is as fun
                    for the eye as it is for the gut.
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col col-12 col-md-5 col-lg-5">
                  The concept of the branding, with it’s name, colours and
                  imagery, was create something that resonates with it’s
                  audience and makes for an enjoyable and lasting experience.
                </div>
                <div className="col col-12 col-md-7 col-lg-7">
                  <img
                    src="/assets/img/kk3.png"
                    width="100%"
                    height="100%"
                    alt=""
                  />
                </div>
              </div>

              <div className="row mt-4 kk4-row">
                <div className="col col-12 col-lg-5 col-md-5">
                  <img src="/assets/img/kk4.png" alt="" className="kk4" />
                </div>
                <div className="col col-12 col-lg-7 col-md-7">
                  All the produce used in the products is sustainable and
                  locally sourced and so using illustrations of the ingredients
                  in the branding of both the packaging and advertising shows
                  transparency, rooted in authenticity, community and trust.
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4 col-12"></div>
                <div className="col-md-6 col-12 ">
                  <img src="./assets/img/kk5.png" alt="" className="kk5" />
                </div>
              </div>

              <div className="d-flex my-5 gap-4 three-images-container">
                <img src="/assets/img/kk6.png" alt="" />
                <img src="/assets/img/kk7.png" alt="" />
                <img src="/assets/img/kk8.png" alt="" />
              </div>
            </div>
          </div>
        </PortfolioLayout>
      </MasterLayout>
      <Footer></Footer>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { bodyClassName: "secondary" } };
}
