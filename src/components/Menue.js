import React from "react";
import { motion } from "framer-motion";

function Menue() {
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "inherit" }}
      transition={{
        layout: { duration: 0.1 },
        type: "spring",
      }}
      className="menu show"
    >
      <a href="/">Home</a>
      {/* 	<a href="/zen">Party</a> */}
      <a href="/tub">My Tub</a>
      <a href="/rarity">Rarity</a>
      <a href="/freeze">The Freeze</a>
      <div className="line" />
      <a href="/art">Art</a>
      <a href="/music">Music</a>
      <a href="/moon">Missions</a>
      <a href="/drink">Games</a>
      <div className="line" />
      <a
        className="small"
        target="_blank"
        href="https://opensea.io/collection/rubber-duck-bath-party"
      >
        <img src="https://duck.art/img/icon-opensea.svg?2" />
        OpenSea
      </a>
      <a
        className="small"
        target="_blank"
        href="https://looksrare.org/collections/0x7A4D1b54dD21ddE804c18B7a830B5Bc6e586a7F6"
      >
        <img src="https://duck.art/img/icon-looksrare.svg" />
        LooksRare
      </a>
      <a
        className="small"
        target="_blank"
        href="https://twitter.com/rubberduckbp"
      >
        <img src="https://duck.art/img/icon-twitter.svg" />
        Twitter
      </a>
      <a
        className="small"
        target="_blank"
        href="https://instagram.com/rubberduckbp"
      >
        <img src="https://duck.art/img/icon-instagram.svg?4" />
        Instagram
      </a>
      <a className="small" target="_blank" href="/discord">
        <img
          src="https://duck.art/img/icon-discord.svg
"
        />
        Discord
      </a>
    </motion.div>
  );
}

export default Menue;
