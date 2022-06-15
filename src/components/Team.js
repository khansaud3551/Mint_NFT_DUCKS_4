import React from "react";
import img1 from "../assets/Nfts/pigoen-1.png";
import img2 from "../assets/Nfts/pigoen-2.png";
import img3 from "../assets/Nfts/pigoen-6.png";
import img4 from "../assets/Nfts/pigoen-5.png";
import { Link } from "react-router-dom";

function Team({ home, setHome }) {
  return (
    <>
      <div className="block">
        <h1>TEAM</h1>
        <p className="p_team">
          We are 4 frens staying up all night exploring how to combine art,
          music, game play and community. We are kinda ambitious about building
          a new type of digital experience. Please send us hate mail when you
          get bored of us.
        </p>

        <div className="teamGrid">
          <a
            className="member"
            data-aos="zoom-out"
            target="_blank"
            href="https://twitter.com/jishai"
          >
            <img className="avatar" src={img1} />
            <h2>JISHAI</h2>
            <p className="m-0">Tech</p>
            <div className="handle">
              @jishai
              <img
                src="https://duck.art/img/verified.svg
"
              />
            </div>
          </a>
          <a
            className="member"
            data-aos="zoom-out"
            target="_blank"
            href="https://twitter.com/thegalshir"
          >
            <img className="avatar" src={img2} />
            <h2>Gal</h2>
            <p className="m-0">Art</p>
            <div className="handle">@thegalshir</div>
          </a>
          <a
            className="member"
            data-aos="zoom-out"
            target="_blank"
            href="https://twitter.com/lazylizzyyyy"
          >
            <img className="avatar" src={img3} />
            <h2>Lizzy</h2>
            <p className="m-0">Community</p>
            <div className="handle">@lazylizzyyy</div>
          </a>
          <a
            className="member"
            data-aos="zoom-out"
            target="_blank"
            href="https://twitter.com/rafaelfrost"
          >
            <img className="avatar" src={img4} />
            <h2>Rafael</h2>
            <p className="m-0">Music</p>
            <div className="handle">
              @rafaelfrost
              <img
                src="https://duck.art/img/verified.svg
"
              />
            </div>
          </a>
        </div>
      </div>

      <div className="footer wrap block__footer">
        <span>
          Verified contract :
          <a
            className="lin"
            target="_blank"
            href="https://etherscan.io/address/0x7a4d1b54dd21dde804c18b7a830b5bc6e586a7f6"
          >
            0x7a4d1b54dd21dde804c18b7a830b5bc6e586a7f6s
          </a>
        </span>
        <Link
          onClick={() => setHome(true)}
          to="/termsandconditions"
          className="st__Link"
        >
          Terms &amp; Conditions
        </Link>
      </div>
    </>
  );
}

export default Team;
