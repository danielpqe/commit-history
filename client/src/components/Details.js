import React, { useContext } from "react";
import CommitContext from "../context/commits/CommitContext";

const Details = () => {
  const { commits } = useContext(CommitContext);
  console.log(commits);
  return (
    <div className="column is-7">
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
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">sha</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="field-label is-small">
                    {commits.selectedCommit.sha}
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">message</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="field-label is-small">
                    {commits.selectedCommit.commit.message}
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">author name</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="field-label is-small">
                    {commits.selectedCommit.commit.author.name}
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">author email</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="field-label is-small">
                    {commits.selectedCommit.commit.author.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">date</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="field-label is-small">
                    {commits.selectedCommit.commit.author.date}
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label is-small">
                <label className="label">url</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="field-label is-small">
                    {commits.selectedCommit.url}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
