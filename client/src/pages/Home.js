import React, { useState } from "react";
import LeftMenu from "../components/LeftMenu";
import Header from "../components/Header";
import Title from "../components/Title";
import Commits from "../components/Commits";
import Details from "../components/Details";

const Home = () => {
  const [user, setUser] = useState([]);
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
              <Details />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
