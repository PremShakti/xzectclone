import React from "react";

import Techcard from "./Techcard";
import Btn from "./Btn";

const data = [
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/cpp.png",
    text: "C++",
    id:1
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/python.png",
    text: "Python",
    id:2
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/golang.png",
    text: "Golang",
    id:3
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/rust.png",
    text: "Rust",
    id:4
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/nodejs.png",
    text: "Nodejs",
    id:5
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/react.png",
    text: "Reactjs",
    id:6
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/angular.png",
    text: "Angular",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/vuejs.png",
    text: "Vuejs",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/android.png",
    text: "Android",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/swift.png",
    text: "Swift",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/wordpress.png",
    text: "Wordpress",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/magento.png",
    text: "Magento",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/laravel.png",
    text: "Laravel",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/codeigniter.png",
    text: "Codeigniter",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/codeigniter.png",
    text: "Django",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/solidity.png",
    text: "Solidty",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/flutter.png",
    text: "Flutter",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/mysql.png",
    text: "MySQL",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/mongodb.png",
    text: "MongoDB",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/graphql.png",
    text: "GraphQL",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/docker.png",
    text: "Docker",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/nginx.png",
    text: "Nginx",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/ubuntu.png",
    text: "Ubuntu",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/tensorflow.png",
    text: "Tensorflow",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/keras.png",
    text: "Keras",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/opencv.png",
    text: "OpenCV",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/arduino.png",
    text: "Arduino",
  },
  {
    src: "https://www.xzect.com/assets/images/icons/tech-stack/ros.png",
    text: "ROS",
  },
];

const Expertise = () => {
  return (
    <section className="expertise">
      <h2 className="expertiseHeading">
        Leverage our software & hardware expertise
      </h2>

      <p className="expertiseDetail">
        Use our services and tech expertise to create disruptive products &
        solutions that can revolutionize your business and stay ahead with
        evolving technological advancements.
      </p>

      <div className="teckStackContainer">
        {data.map((e,i) => (
          <Techcard key={i} {...e} />
        ))}
      </div>

      <div className="btncoverExpertise">
        <Btn
          sowIcon={false}
          text={"Explore Our Entire Tech Stack"}
          bg={""}
          border={"1px solid #ff5f08"}
          color={"#ff5f08"}
        />
      </div>
    </section>
  );
};

export default Expertise;
