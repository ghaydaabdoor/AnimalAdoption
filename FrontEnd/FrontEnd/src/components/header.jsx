import React from "react";

export const Header = (props) => {
  return (
    <header id="header" style={{ backgroundImage: 'url(images/fitness-background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 intro-text">
                <h1>
                  {props.data ? props.data.title : "Welcome to Fitness Tracker"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Track your workouts, set goals, and achieve more!"}</p>
                <a
                  href="#signup"
                  className="btn btn-custom btn-lg page-scroll"
                  style={{ marginRight: '10px' }}
                >
                  Get Started
                </a>
                <a
                  href="#login"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Log In
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
