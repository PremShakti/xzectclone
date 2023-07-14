import React from "react";

import Card from "./Card";

const data = [
  {
    text: "Software & App Devlopment",
    src: "https://www.xzect.com/assets/images/services/software-and-app-dev.jpg",
    link: "",
  },
  {
    text: "Website Devlopment & SEO",
    src: "https://www.xzect.com/assets/images/services/website-dev-and-seo.jpg",
    link: "",
  },
  {
    text: "Cloud Service",
    src: "https://www.xzect.com/assets/images/services/cloud-services.jpg",
    link: "",
  },
  {
    text: "Robotics & Automation",
    src: "https://www.xzect.com/assets/images/services/robotics.jpg",
    link: "",
  },

  {
    text: "3D Printing & Prototyping",
    src: "https://www.xzect.com/assets/images/services/3d-printing-and-prototyping.jpg",
    link: "",
  },
  {
    text: "Data Science & Analytics",
    src: "https://www.xzect.com/assets/images/services/data-science.jpg",
    link: "",
  },
  {
    text: "AI & Machine Learning",
    src: "https://www.xzect.com/assets/images/services/machine-learning.jpg",
    link: "",
  },
  {
    text: "IOT, AR & VR",
    src: "https://www.xzect.com/assets/images/services/ar-vr.jpg",
    link: "",
  },
  {
    text: "Blockchain",
    src: "https://www.xzect.com/assets/images/services/blockchain.jpg",
    link: "",
  },
  {
    text: "Tech Consaltansy",
    src: "https://www.xzect.com/assets/images/services/tech-consultancy.jpg",
    link: "",
  },
  {
    text: "Reserch & Devlopment",
    src: "https://www.xzect.com/assets/images/services/research-and-dev.jpg",
    link: "",
  },
];

const Services = () => {
  return (
    <section className="servicesContainer">
      <h2 className="serviceHeading">
        Customised Solutions for All Your Business Needs
      </h2>

      <p className="serviceDetail">
        Take Your Business to the Next Level with Our Industry-Leading Services
      </p>

      <div className="cardContainer">
        {data.map((e) => (
          <Card {...e} />
        ))}
      </div>
    </section>
  );
};

export default Services;
