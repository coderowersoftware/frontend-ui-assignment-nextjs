import Marquee from "react-fast-marquee";

const GazatteLayout = ({ children, ...rest }: any) => {
  return (
    <div className="row" id="herocontainer">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <div className="mathsforfun" style={{ marginTop: 0 }}>
          <div className="gazzete-container col-lg-8 col-xs-12">
            <div className="row ">
              <div className="col ">
                <div className="funtown_heading1">Funtown Gazette</div>

                <div className="subheading_gazate d-flex justify-content-between align-items-center">
                  <Marquee gradient={false}>
                    <div className="gazette-vol">VOL I...No.1 </div>
                    <div
                      className="gazette-title"
                      style={{ padding: "0px 20px" }}
                    >
                      DESIGN NEWS, INFO & COOL STUFF
                    </div>
                    <div
                      className="gazette-vol"
                      style={{ padding: "0px 20px" }}
                    >
                      SEPT 2022
                    </div>
                  </Marquee>
                </div>


              </div>
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GazatteLayout;
