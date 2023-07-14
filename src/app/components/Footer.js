import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="footer">
      <div className="innerFootrdiv">
        <ul className="footerul1">
          <h2 className="footerheading1">Xzect Labs Pvt. Ltd.</h2>
          <li className="footerparaagraf">
            Xzect provides a diverse array of services that enable both
            businesses and individuals to bring their vision to life . Our
            specialties include software development, website design and SEO,
            cloud services, robotics and automation, 3D printing and
            prototyping, data science and analytics, AI and machine learning,
            IOT, AR and VR, blockchain, and other tech-related services. Our
            team of experienced professionals is available to assist with the
            design and development of new products, exploration of robotics and
            automation possibilities, or any other requirements.
          </li>
          <li>Registered Address: 203, 2-A/3, Asaf Ali Road, Delhi - 110002</li>
          <li>CIN: U72200DL2022PTC408714</li>
          <li>GST: 07AAACX4373J1Z2</li>
          <li>GST: 07AAACX4373J1Z2</li>
          <li className="icons">
            <BsFacebook />
            <BsInstagram />
            <BsLinkedin />
            <BsTwitter />
            <BsYoutube />
          </li>
        </ul>

        <ul className="footerUl2">
          <p className="footerheader2">Services</p>
          <li>Software & App Development</li>
          <li>Website Development & SEO</li>
          <li>Cloud Services</li>
          <li>Robotics & Automation</li>
          <li>3D Printing & prototyping</li>
          <li>Data Science & Analytics</li>
          <li>AI & Machine Learning</li>
          <li>IOT, AR & VR</li>
          <li>Blockchain</li>
          <li>Tech Consultancy</li>
          <li>Research & Development</li>
          <li>View all Services</li>
        </ul>

        <ul className="footerUl2">
          <p className="footerheader2">Industries</p>
          <li>eCommerce</li>
          <li>Hyperlocal</li>
          <li>Finance</li>
          <li>Education</li>
          <li>Gaming</li>
          <li>Social Networking</li>
          <li>Agriculture</li>
          <li>Travel & Aviation</li>
          <li>Logistics</li>
          <li>Restaurant</li>
          <li>Real Estate</li>
          <li>View all Industries</li>
        </ul>

        <ul className="footerUl2">
          <p className="footerheader2">Resources</p>
          <li>About</li>
          <li>Tech Stack</li>
          <li>Contact Us</li>
          <li>Careers</li>
          <li>Webinars</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Legal Information</li>
          <li>Blog</li>
          <li>Youtube (@xzect_labs)</li>
          <li>Github (@xzect)</li>
        </ul>
      </div>
      <div className="copyright">
        <p>© 2018 - 2023. Xzect Labs Pvt. Ltd. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
