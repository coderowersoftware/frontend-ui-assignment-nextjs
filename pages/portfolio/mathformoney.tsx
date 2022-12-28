import Image from "next/image";
import Footer from "../../components/footer";
import Header from "../../components/header";
import MasterLayout from "../../components/masterPage/masterLayout";
import PortfolioLayout from "../../components/masterPage/portfolioLayout";
import Navbar from "../../components/navbar";
import SideNavbar from "../../components/navbar/sidenav";
import styles from "../../styles/Home.module.css";

export default function MathForMoney() {
  return (
    <div className={styles.container}>
      <MasterLayout page={"portfolio"}>
        <PortfolioLayout>
          <div className="col-12 col-lg-7 mathsforfun-inner">
            <div className="row">
              <div className="col col-12">
                <div className="headings_h1">MathforMoney</div>
              </div>
              <div>
                <div className="row">
                  <div className="col-12 col-md-12 col-lg-8 pl-0">
                    MathforMoney is a math app that lets children solve math
                    problems to earn their pocket money. The aim was to provide
                    strong incentives for children to improve their financial
                    literacy skills and implement gamification techniques to
                    make the learning fun and engaging.
                  </div>
                </div>

                <div className="row">
                  <div className="col-6"></div>
                  <div className="col col-12 col-md-12 col-lg-6 col-xs-12 math_1image">
                    <img src="/assets/img/math_1.png" alt="" width="100%" />
                  </div>
                </div>

                <div className="row">
                  <div className="col col-md-6 col-lg-6 col-xs-12">
                    <img src="/assets/img/Money_save.png" alt="" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 col-xs-12 mt-4">
                    Because the app is designed for children, we wanted to keep
                    it as simple as possible, allowing children to reach their
                    desired outcome with ease and haste. After sketching out a
                    few low fidelity prototypes, we mocked it up to create a
                    quick click-through prototype which could be used to test
                    with early customers.
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col col-12 col-md-8 col-lg-6">
                  We conducted a series of interviews and workshops with
                  families and schools to create a product that supports parents
                  with the difficult task of teaching children about the value
                  of money.
                </div>
                <div className="col col-12 col-md-4 mathformoney-img2">
                  <img src="/assets/img/New homepoints.png" alt="" />
                </div>
              </div>

              <div className="row mathformoney-awesome-block">
                <div className="col col-12 col-md-7 col-lg-7">
                  Together, we discovered that children could quickly understand
                  the impact of compound interest through simple goals and
                  savings rewards. Small motivational techniques encouraged
                  children to overcome their math anxiety to unlock badges and
                  feel celebrated for solving complex word problems.
                </div>
                <div className="col col-12 col-md-5 col-lg-5">
                  <img src="/assets/img/awesome achievements.png" alt="" />
                </div>
              </div>

              <div className="row mathformoney-level-block">
                <div className="col"></div>
                <div className="col mathformoney-level-img">
                  <img src="/assets/img/adjust level.png" alt="" />
                </div>
                <div className="col-md-5 col-xs-12 mt-4">
                  Another solution to help children grow their math confidence
                  was to adjust the difficulty to the child’s ability and allow
                  them to build up slowly instead of forcing them into the level
                  of their school syllabus.
                </div>
              </div>

              <div className="row">
                <div className="col-12 col-md-4 col-xs-12 mathformoney-text-block">
                  Using a clean UI and playful colours we created an app that
                  can be enjoyed by both children and parents alike. Little math
                  monsters help children to stay on track and build the
                  confidence to tackle challenging problems.
                </div>
                <div className="col-12 col-md-6 col-xs-12"></div>
              </div>

              <div className="d-flex my-5 gap-4 three-images-container mathformoney-last-block">
                <img src="/assets/img/AppScreen1.png" alt="" />
                <img src="/assets/img/AppScreen2.png" alt="" />
                <img src="/assets/img/AppScreen3.png" alt="" />
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
