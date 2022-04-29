import React from "react";

const LeftMenu = () => {
  return (
    <div className="column is-1.5 ">
      <aside className="menu is-hidden-mobile">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <a className="is-active">Commits</a>
          </li>
          <li>
            <a>Branches</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default LeftMenu;
