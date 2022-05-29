import React, { useEffect, useState } from "react";
import "../css/Header.css";
import Menue from "./Menue";
import onClickOutside from "react-onclickoutside";

function Header() {
  const [menue, setMenue] = useState(false);

  //play sound on click button
  const playSound = () => {
    const audio = new Audio("/audio/squeak.mp3");
    audio.play();
    setMenue(!menue);
  };

  Header.handleClickOutside = () => {
    setMenue(false);
  };

  console.log(menue);

  return (
    <>
      <div className="header">
        <div className="left">
          <div onClick={playSound} className="button small hamburger">
            <span className="symbol">☰</span>
          </div>
          <a href="/" className="logo">
            <img src="https://duck.art/img/duck-head.svg" />
          </a>
          <div className="nav">
            <a page="home" href="/">
              HOME
            </a>
            <a page="tub" href="/tub" status="current">
              TUB
            </a>
            <a page="tub" href="/tub" status="current">
              ART
            </a>
            <a page="party" href="/zen">
              MUSIC
            </a>
            {/* 			<a page="art" href="/art">ART</a>
			<a page="music" href="/music">MUSIC</a> */}
          </div>
          <div className="player">
            <div className="icon">
              <img
                alt=""
                icon="on"
                src="	https://duck.art/img/icon-sound-on.svg"
              />
              <img
                alt=""
                icon="off"
                src="https://duck.art/img/icon-sound-on.svg
"
              />
            </div>
            <div className="info">
              <div className="title">
                <span>
                  HIGH TEA <span className="new-badge">NEW</span>
                </span>
              </div>
              <div className="artist">
                BY{" "}
                <a rel="noopener noreferrer" target="_blank" href="#">
                  RAFAËL FROST
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <a
            className="icon"
            href="https://opensea.io/collection/rubber-duck-bath-party"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="" src="/images/icon-opensea.svg" />
          </a>
          <a
            className="icon"
            href="https://looksrare.org/collections/0x7A4D1b54dD21ddE804c18B7a830B5Bc6e586a7F6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="" src="/images/icon-looksrare.svg" />
          </a>
          <a
            className="icon"
            href="https://twitter.com/rubberduckbp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="" src="/images/icon-twitter.svg" />
          </a>
          <a
            className="icon"
            href="https://instagram.com/rubberduckbp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/icon-instagram.svg?4" alt="" />
          </a>
          <a
            rel="noopener noreferrer"
            className="icon"
            href="/discord"
            target="_blank"
          >
            <img src="/images/icon-discord.svg" alt="" />
          </a>
        </div>
      </div>

      {/* //nav */}
      {menue ? <Menue /> : null}
    </>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Header.handleClickOutside,
};

export default onClickOutside(Header, clickOutsideConfig);
