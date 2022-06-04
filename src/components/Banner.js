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
            <h2 className="my-3">PARTY TIME!</h2>
            <p>The zen bath party is now open!</p>
            <div className="flex">
              <a href="/zen" className="button red">
                GO PARTY
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bathParties block wrap flex">
        <div className="left">
          <h1>
            Bath
            <br />
            Parties
          </h1>
          <p>
            Every once in a while your duck will be invited to a bath party. As
            great parties go, your duck might come home with a third eye, a rare
            crown, a regrettable tattoo or a refreshed background.
          </p>
          <p>
            However, your duck might get too high and could lose that special
            pearl necklace in the bathroom, give their beanie to their crush, or
            even end up naked.
          </p>
          <p>
            As a responsible duck parent, the decision is yours. Keep your duck
            at home or take a chance and let them have a little fun.
          </p>
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
            GO PARTY!
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
