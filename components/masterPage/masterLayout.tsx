import Header from "../header";
import Navbar from "../navbar";
import SideNavbar from "../navbar/sidenav";

const MasterLayout = ({ children, page, ...rest }: any) => {
  return (
    <>
      <Header></Header>
      <Navbar selected={page}></Navbar>
      <main className="container">
        <SideNavbar selected={page}></SideNavbar>
        {children}
      </main>
    </>
  );
};

export default MasterLayout;
