import React from "react";

const Loader = () => {
  return (
    <div id="loader-wrapper">
      <div id="loading">
        <div className="cssload-loader">
          <div className="cssload-ball cssload-ball-1"></div>
          <div className="cssload-ball cssload-ball-2"></div>
          <div className="cssload-ball cssload-ball-3"></div>
          <div className="cssload-ball cssload-ball-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
