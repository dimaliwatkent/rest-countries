import React from "react";

const Footer = () => {
  return (
    <div className=" bottom-0 left-0 right-0 flex text-sm m-10 text-light-text dark:text-dark-text justify-center items-center ">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        className="pl-1"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        href="https://github.com/dimaliwatkent/countdown-timer.git"
        className="px-1"
      >
        dimaliwatkent
      </a>
    </div>
  );
};

export default Footer;
