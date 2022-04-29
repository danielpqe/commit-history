import React from "react";

const LeftMenu = () => {
  return (
    <div className="column is-2 ">
      <aside className="menu is-hidden-mobile">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <a className="is-active">Commits</a>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default LeftMenu;
