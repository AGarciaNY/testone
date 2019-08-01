import React from 'react';
import './Nav.css';

const Nav= () => (
    <div className="navcontainer">
      <div>
        <h1 className="myname">Aldair's Portfolio</h1>
      </div>
      <div className="links">
          <div >
            <a href="test" className="textfont linkspace">Home</a>
            <a href="test" className="textfont linkspace">About</a>
            <a href="test" className="textfont linkspace">Projects</a>
          </div>
          <div className="dropdown linkspace">
              <button className="dropbutton">Dropdown</button>
              <div className="dropdown-content">
                  <a href="test" className="textfont">Link 1</a>
                  <a href="test" className="textfont">Link 2</a>
                  <a href="test" className="textfont">Link 3</a>
              </div>
          </div>
      </div>
    </div>
  );

export default Nav;
