import React from 'react';
//import styled from '@emotion/styled';
import './Footer.css';
function Footer() {
  return (
    <div id="Footer">
      <div id="HeadingCon">
        <h1 id="Footerheading">More Informtion</h1>
      </div>
      <div>
        <div >
          <h1 class="Contact">Contact Informtion</h1>
          <ul class="ContactI" id="Information">
            <li className="Conlist">
              <img src="/img"/>
              <h1 class="ContactI">Aldairgarcia360@gmail.com</h1>
            </li>
            <li className="Conlist">
              <img src="/img"/>
              <h1 class="ContactI">AGarciaNY</h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
