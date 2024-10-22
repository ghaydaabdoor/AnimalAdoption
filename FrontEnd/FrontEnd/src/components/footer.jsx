import React from "react";

export const Footer = (props) => {
  return (
    <footer id="footer">
      <div className="container text-center">
        {/* Footer Links */}
        <div className="footer-links">
          <a href={props.data ? props.data.termsOfService : "#"}>Terms of Service</a>
          {" | "}
          <a href={props.data ? props.data.privacyPolicy : "#"}>Privacy Policy</a>
          {" | "}
          <a href={props.data ? props.data.support : "#"}>Support</a>
        </div>
        
        {/* Social Media Icons */}
        <div className="social">
          <ul className="social-icons">
            <li>
              <a href={props.data ? props.data.facebook : "/"}>
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href={props.data ? props.data.twitter : "/"}>
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={props.data ? props.data.instagram : "/"}>
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <p>&copy; 2023 Fitness Tracker. Design by{" "}
          <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a>
        </p>
      </div>
    </footer>
  );
};
