const PortfolioLayout = ({ children, ...rest }: any) => {
  return (
    <div
      className="row"
      id="herocontainer"
    >
      <div
        className="col col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 top_container"
      >
        {children}
      </div>
    </div>
  );
};

export default PortfolioLayout;
