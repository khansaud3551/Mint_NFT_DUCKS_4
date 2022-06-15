import React, { Component } from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQS",
  rows: [
    {
      title: "WHAT IS THE MAIN GOAL HERE?",
      content:
        "The goal of this collection is to help families in a way that they can earn a passive income on monthly basis by starting a small business.",
    },
    {
      title: "WHO WILL MONITOR THE BUSINESS?",
      content:
        "We are not just distributing the earned money away, there will be a 100% transparency of the businesses and collection on monthly basis on our website. There will be managers managing each businesses line.",
    },

    {
      title: "HOW DO I EARN WITH EDHI-PIGE?",
      content:
        "Despite the great art and fantastic community Edhi-pige is enabling holders earning monthly passive income by the % returned from the businesses of all families.",
    },
    {
      title: "WHAT ARE EDHI-PIGE?",
      content:
        "Edhi-Pige are randomly generated and constructed from over X different components. Each pigeon is unique and minted as an NFT on the Ethereum blockchain. ",
    },
    {
      title: "WHAT THE TECH?",
      content:
        "Edhi-Pige is purely a block chained network, hosted on blockchain domain and are stored as ERC-721 tokens on the Ethereum blockchain. All the metadata are uploaded to IPFS.",
    },
    {
      title: "HOW TO BUY?",
      content: "Minting will be only on our official website. ",
    },
    {
      title: "WILL THERE BE PUBLIC SALE?",
      content:
        "Join our discord  be whitelisted there will be 5,000 whitelisted spots, for now we are keeping 1,666 spots for public minting, but this number may change based on community response.",
    },
  ],
};

export default class Faqs extends Component {
  render() {
    return (
      <div className="block faqs">
        <Faq
          data={data}
          animate={true}
          styles={{
            bgColor: "#ffe233",
            titleTextColor: "#ffff",
            rowTitleColor: "#ffff",
            rowTitleTextSize: "large",
            rowContentColor: "#ffff",
            rowContentTextSize: "16px",
            rowContentPaddingTop: "10px",
            rowContentPaddingBottom: "10px",
            rowContentPaddingRight: "150px",
            arrowColor: "black",
          }}
        />
      </div>
    );
  }
}
