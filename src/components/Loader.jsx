const Loader = ({ width = 100}) => {
  return (
    <div
      className="loader"
      style={{ width: width + "%"}}
    >
      Данные загружаются...
    </div>
  );
};

export default Loader;
