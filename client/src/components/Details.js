import React from "react";

const Details = () => {
  return (
    <div className="column is-5">
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">Commit Details</p>
          <a href="#" className="card-header-icon" aria-label="more options">
            <span className="icon">
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>
        <div className="card-content">
          <div className="content">
            <div className="control has-icons-left has-icons-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
