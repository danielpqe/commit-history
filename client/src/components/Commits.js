import React, { useEffect, useContext } from "react";
import CommitContext from "../context/commits/CommitContext";

const Commits = () => {
  const { commits, getCommits, getCommitDetails } = useContext(CommitContext);

  useEffect(() => {
    getCommits();
  }, []);

  return (
    <div className="column is-5">
      <div className="card events-card">
        <header className="card-header">
          <p className="card-header-title">Recent commits</p>
        </header>

        <div className="card-table">
          <div className="content">
            <table className="table is-fullwidth is-striped is-hoverable">
              <thead>
                <tr>
                  <th>sha</th>
                  <th>message</th>
                  {/* <th>author</th>
                  <th>date</th> */}
                </tr>
              </thead>
              <tbody>
                {commits.commits.map((commit) => (
                  <tr
                    key={commit.node_id}
                    onClick={() => {
                      getCommitDetails(commit.sha);
                    }}
                  >
                    <td>{commit.sha.substring(0, 7)}</td>
                    <td>{commit.commit.message}</td>
                    {/* <td>{commit.commit.author.name}</td>
                    <td>{commit.commit.author.date}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* <footer className="card-footer">
          <a href="#" className="card-footer-item">
            View All
          </a>
        </footer> */}
      </div>
    </div>
  );
};

export default Commits;
