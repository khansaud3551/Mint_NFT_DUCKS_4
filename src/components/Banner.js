import React from "react";

function Banner() {
  return (
    <>
      <div>
        <div className="videoContainer wrap">
          <video
            className="mainVideo"
            height="auto"
            autoPlay
            loop
            playsInline
            __idm_id__={442369}
          >
            <source src="/videos/party.mp4" type="video/mp4" />
          </video>

          <div className="mainText block wrap mt-0">
            <h2 className="my-3">PARTY TIME!</h2>
            <p>The zen bath party is now open!</p>
            <div className="flex">
              <a href="/zen" className="button orange">
                GO PARTY
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bathParties block wrap flex">
        <div className="left">
          <h1>
            BATH
            <br />
            PARTIES
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
            <img
              className="duck"
              src="https://duck.art/img/party-simulation/rdbp-simulation-21.png"
            />
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
