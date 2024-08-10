import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vitae
            asperiores numquam culpa in pariatur alias, quia incidunt officiis
            qui at sunt sed saepe neque blanditiis commodi repellendus vel et.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam
            dicta voluptatibus facere velit dolores animi esse molestiae ex
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            {" "}
            {/* Changed 'UL' to 'ul' */}
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 965-547-524</li>
            <li>john.tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright © 2024. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
