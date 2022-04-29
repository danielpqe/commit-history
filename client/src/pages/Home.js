import React, { useState, useContext } from "react";
import LeftMenu from "../components/LeftMenu";
import Header from "../components/Header";
import Title from "../components/Title";
import Commits from "../components/Commits";
import Details from "../components/Details";
import CommitContext from "../context/commits/CommitContext";

const Home = () => {
  const { commits } = useContext(CommitContext);

  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="columns">
          <LeftMenu />
          <div className="column is-11">
            <Title />

            <div className="columns">
              <Commits />
              {commits.selectedCommit.commit && <Details />}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
