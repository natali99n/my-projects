import React, { Fragment, Component } from 'react';


export default class Header extends Component {

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" width="39" height="43"></img>
          </a>
          <h2 className="navbar-item"><strong>Checkup</strong></h2>

          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Home
            </a>

            <a className="navbar-item" href="/dashboard">
              Dashboard
            </a>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                Reports
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item" href="/child-care">
                  Child Daily Care Reports
                </a>
                <a className="navbar-item" href="/elevation-chart">
                  Elevation Chart
                </a>
                <a className="navbar-item" href="/pressure-relief">
                  Pressure Relief Positioning Chart
                </a>
                <a className="navbar-item" href="/paediatric-checklist">
                  Paediatric Tracheostomy Safety Checklist
                </a>
                <a className="navbar-item"  href="/body-map">
                  Body Map
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-info is-inverted" href="/register">
                  <strong>Sign up</strong>
                </a>
                <a className="button is-info" href="/login">
                  <strong>Log in</strong>
                </a>

              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
