import React from 'react';

export function Navbar() {
  return <nav className="navbar navbar-expand-lg navbar-dark bg-primary-new fixed-top">
    <div className="container">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className="navbar-brand" href="#">
        <img src="https://assets.revolutionuc.com/email/revuc-logo-spring-2021.png" alt="RevolutionUC" />
        RevolutionUC Stats
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://revolutionuc.com/">Main website</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>;
}