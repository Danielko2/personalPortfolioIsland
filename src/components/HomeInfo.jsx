import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
const InfoBox = ({ text, link, btnText }) => {
  return (
    <div className="info-box">
      <p className="font-medium sm:text-xl text center selection:">{text}</p>
      <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      </Link>
    </div>
  );
};
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hello there, I am <span className="font-semibold">Daniel</span>👋
      <br />A undergraduate student at the University of Hull.
    </h1>
  ),
  2: (
    <InfoBox
      text="Gaining valuable knowledge and experience as an undergraduate student, with a focus on Software Engineering and Web Development."
      link="/about"
      btnText="Learn more about me"
    />
  ),
  3: (
    <InfoBox
      text="My personal Projects Coming Soon."
      link="/projects"
      btnText=" My Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Looking for a Software Engineer? I am currently available for hire."
      link="/contact"
      btnText="Contact Me"
    />
  ),
};

function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}

export default HomeInfo;
