import Image from "next/image";
import Header from "../components/header";
import Navbar from "../components/navbar";
import SideNavbar from "../components/navbar/sidenav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container} style={{ background: "#fedede" }}>
      <Header></Header>
      <Navbar selected={"home"}></Navbar>
      <main className="container">
        <SideNavbar selected={"home"}></SideNavbar>
        <div className="row" id="herocontainer">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div id="frame">
              <img src="./assets/img/logofuntown.gif" alt="" width="179px"/>
            </div>

            <div className="heroimge" style={{}}>
              <div className="monsterimg"></div>
              <h1 id="Heroheading1">Where work</h1>
              <h1 id="Heroheading2">is Play</h1>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  return { props: { bodyClassName: "primary" } };
}
