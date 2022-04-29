import React, { useEffect, useContext } from "react";
import CommitContext from "../context/commits/CommitContext";

const Commits = () => {
  const { commits, getCommits } = useContext(CommitContext);

  useEffect(() => {
    getCommits();
    console.log("Initial state", commits);
  }, []);

  return (
    <div className="column is-7">
      {commits[0]}
      {console.log("Final state", commits)}
      <div className="card events-card">
        <header className="card-header">
          <p className="card-header-title">Recent commits</p>
          <a
            href="/"
            className="card-header-icon"
            aria-label="more options"
            rel="noopener noreferrer"
          >
            <span className="icon">
              <i className="fa fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </header>

        <div className="card-table">
          <div className="content">
            <table className="table is-fullwidth is-striped">
              <thead>
                <tr>
                  <th>sha</th>
                  <th>message</th>
                  <th>author</th>
                  <th>date</th>
                </tr>
              </thead>
              <tbody>
                {commits.commits.map((commit) => (
                  <tr key={commit.node_id}>
                    <td>{commit.sha.substring(0, 4)}</td>
                    <td>{commit.commit.message}</td>
                    <td>{commit.commit.author.name}</td>
                    <td>{commit.commit.author.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            View All
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Commits;
