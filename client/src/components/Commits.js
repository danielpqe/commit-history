import React, { useState, useEffect } from "react";

const API = "http://localhost:8000/commits";

const Commits = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API);
      const data = await response.json();
      setCommits(data);
    }

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <ul>
        {commits.map((commit) => (
          <li key={commit.node_id}>{commit.commit.message}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Commits;
