const BootstrapComponent = ({ subtitle, children }) => {
  return (
    <div className="bg-light p-5 rounded-3">
      <div className="container text-center">
        <h1 className="display-4">BOOKS</h1>
        <p className="lead">{subtitle}</p>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BootstrapComponent;
