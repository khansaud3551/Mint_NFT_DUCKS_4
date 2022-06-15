import React from "react";
import img1 from "../assets/Nfts/pigoen-2.png";
import { motion } from "framer-motion";

function Banner() {
  return (
    <>
      <div>
        <div className="videoContainer wrap">
          {/* <video
            className="mainVideo"
            height="auto"
            autoPlay
            loop
            playsInline
            __idm_id__={442369}
          >
            <source src="/videos/party.mp4" type="video/mp4" />
          </video> */}

          <motion.img
            initial={{ y: -1000 }}
            animate={{ y: 0 }}
            transition={{ duration: 4 }}
            className="w-100 mt-5"
            src="/videos/banner.png"
            alt=""
          />

          <div className="party__time mainText block wrap mt-0 mb-4 ">
            <h2 className="my-3">
              {" "}
              Building a strong community with a motive of giving back to the
              world and community.
            </h2>
            <p>
              Win a whitelist spot by taking part to one of our conte¬sts
              (twitter / Instagram / Discord).
            </p>
            <div className="flex">
              <a
                href="https://discord.gg/82vaX56W2v"
                target="__blank"
                className="button red"
              >
                GO PARTY
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bathParties block wrap flex">
        <div className="left">
          <h1>
            Edhi-Pige Message
            <br />
          </h1>
          <p>
            We have a simple goal in mind; to adopt a community first approach
            that holds a safe-space for all members. The process is simple but
            efficient. Peace, love, and kindness toward others is a big part of
            who we are. That’s why our main objective is built around “how much
            value can we bring to our community?”.
          </p>
          <p>
            As this is a community driven project, we will be onboarding
            enthusiastic members of the community from day one. we plan on
            hosting AMA’s, organizing events, and always maintaining 100%
            transparency.
          </p>
          <p></p>
        </div>
        <div className="simulationImages">
          <div className="images">
            <img className="duck" src={img1} />
            <div className="bubbles">
              <div className="bubble" />
              <div className="bubble" />
              <div className="bubble" />
              <div className="bubble" />
              <div className="bubble" />
              <div className="bubble" />
              <div className="bubble" />
            </div>
            {/* <img
              className="foam"
              src="	https://duck.art/img/party-simulation/rdbp-simulation-foam.png"
            /> */}
          </div>
          <div className="button red party" status="active">
            JOIN PARTY!
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
