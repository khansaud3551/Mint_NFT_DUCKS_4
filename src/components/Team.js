import React from "react";

function Team() {
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
            target="_blank"
            href="https://twitter.com/jishai"
          >
            <img
              className="avatar"
              src="	https://duck.art/img/team-jishai.png"
            />
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
            target="_blank"
            href="https://twitter.com/thegalshir"
          >
            <img
              className="avatar"
              src="https://duck.art/img/team-jishai.png"
            />
            <h2>Gal</h2>
            <p className="m-0">Art</p>
            <div className="handle">@thegalshir</div>
          </a>
          <a
            className="member"
            target="_blank"
            href="https://twitter.com/lazylizzyyyy"
          >
            <img className="avatar" src="	https://duck.art/img/team-gal.png?2" />
            <h2>Lizzy</h2>
            <p className="m-0">Community</p>
            <div className="handle">@lazylizzyyy</div>
          </a>
          <a
            className="member"
            target="_blank"
            href="https://twitter.com/rafaelfrost"
          >
            <img
              className="avatar"
              src="	https://duck.art/img/team-rafael.png"
            />
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

      <div className="footer wrap">
        <span>
          Verified contract:{" "}
          <a
            target="_blank"
            href="https://etherscan.io/address/0x7a4d1b54dd21dde804c18b7a830b5bc6e586a7f6"
          >
            0x7a4d1b54dd21dde804c18b7a830b5bc6e586a7f6s
          </a>
        </span>
        <a href="/terms">Terms &amp; Conditions</a>
      </div>
    </>
  );
}

export default Team;
