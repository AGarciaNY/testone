import React from 'react';
import './Nav.css';
function Nav() {
  return (
    <div className="navcontainer">
      <div>
        <h1 className="myname">Aldair's Portfolio</h1>
      </div>
      <div className="links">
          <div >
            <a className="linkspace">Home</a>
            <a className="linkspace">About</a>
            <a className="linkspace">Projects</a>
          </div>
          <div className="dropdown linkspace">
              <button className="dropbutton">Dropdown</button>
              <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
              </div>
          </div>
      </div>
    </div>
  );
}

export default Nav;
