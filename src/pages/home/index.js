import React from "react";
import Header from "../../components/common/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <p className="title">
          We offer local + offshore resources to <br /> hire and build custom
          softwares.
          <br />
          <a
            className="btn btn-light button"
            href="https://www.linkedin.com/in/aamitmit/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="text-bold">I am hiring</span>
          </a>
        </p>

        <div className="description">
          <p className="des-title">You will never have to worry about..</p>
          <hr className="hr-line" />
          <div className="bullet-point">
            <ul>
              <li>
                You will never have to talk to a recruiter who doesn&#39;t
                understand technology.
              </li>
            </ul>
            <p className="ms-5">{`( All our recruiters has engineering background )`}</p>

            <ul>
              <li>
                You will never have to worry about you not being our priority.
              </li>
            </ul>
            <p className="ms-5">{` ( We work with only 8 companies at any given point to provide the attention you deserve )`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
