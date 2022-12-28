import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MasterLayout from "../../components/masterPage/masterLayout";
import PortfolioLayout from "../../components/masterPage/portfolioLayout";
import Navbar from "../../components/navbar";
import SideNavbar from "../../components/navbar/sidenav";
import styles from "../../styles/Home.module.css";

export default function Amplo() {
  return (
    <div className={styles.container}>
      <MasterLayout page={"portfolio"}>
        <PortfolioLayout>
          <div className="col-lg-7 col-12 mathsforfun-inner">
            <div className="row">
              <div className="col ">
                <div className="headings_h1">Amplo</div>
              </div>
              <div>
                <div className="row mt-4">
                  <div className="col-lg-8 col-12">
                    Amplo’s smart maintenance platform connects industrial
                    machines and allows you to monitor and manage your assets.
                    The power of the solution comes from linking machine data
                    with human knowledge to resolve issues faster.
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col col-5"></div>
                  <div className="col col-12 col-lg-7">
                    <img src="/assets/img/amplo12.png" width="100%" alt="" />
                  </div>
                </div>

                <div className="row mt-4">
                  <div className="col-lg-6 col-12">
                    <img src="/assets/img/amplo2.png" alt="" />
                  </div>
                  <div className="col-lg-6 col-12">
                    The goal was to remove the frustrating machine data
                    management process of excel spreadsheets and annoying VPN
                    terminals and as a result created a platform where all the
                    information you need can be discovered quickly, simply and
                    with limited techinical know-how.
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col col-12 col-lg-4">
                  The incredible Amplo team discovered that the most valuable
                  asset of a company is their institutional knowledge in the
                  mind of your employees. Their solution allows you to capture
                  and share this expert knowledge.
                </div>
                <div className="col col-12 col-lg-8">
                  <img src="/assets/img/amplo3.png" width="100%" alt="" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col col-12 col-lg-8">
                  <img src="/assets/img/amplo4.png" width="100%" alt="" />
                </div>
                <div className="col col-12 col-lg-4">
                  We conducted customer interviews to bring the system to life
                  in way that is second nature to the service team. They can
                  easily document machine behaviour and link this knowledge to
                  machine data, training the system understand the machine and
                  notify you of potential issues that may arise.
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4 col-xs-12">
                  Bceause most issues happen more than once, the platform can
                  speed up the root cause analysis process and make your
                  machines more resilient, allowing the team focus on things
                  that matter most.
                </div>
                <div className="col-md-6 col-xs-12"></div>
              </div>

              <div className="d-flex my-5 gap-4 three-images-container">
                <img src="/assets/img/amplo6.png" alt="" />
                <img src="/assets/img/amplo7.png" alt="" />
                <img src="/assets/img/amplo8.png" alt="" />
              </div>
              <div className="row mb-5">
                <div className="col col-12 col-lg-6">
                  The brand was designed to match their innovative platform and
                  simplicity of it’s use, with clean lines, minimalist
                  composition and a logo and design system that will be easily
                  recognised across all of their channels.
                </div>
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
