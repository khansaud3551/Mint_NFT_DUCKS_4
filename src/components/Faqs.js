import React, { Component } from "react";
import Faq from "react-faq-component";

const data = {
  title: "FAQS",
  rows: [
    {
      title: "What are rubber ducks?",
      content:
        "Ducks are randomly generated and constructed from over 200 different components. Each duck is unique and minted as an NFT on the Ethereum blockchain. Rubber ducks are dynamic NFTs and can change their traits over time by attending parties! ",
    },
    {
      title: "What the tech?",
      content:
        "Rubber Ducks are stored as ERC-721 tokens on the Ethereum blockchain. After each party, the updated metadata and image will be uploaded to IPFS. The metadata includes all the historical versions of your duck, and all previous versions will be hosted on IPFS.",
    },

    {
      title: "What are bath parties?",
      content:
        "Rubber Ducks are stored as ERC-721 tokens on the Ethereum blockchain. After each party, the updated metadata and image will be uploaded to IPFS. The metadata includes all the historical versions of your duck, and all previous versions will be hosted on IPFS.",
    },
    {
      title: "Wen party?",
      content: "Should I send my duck to a party?",
    },
    {
      title: "Do parties cost gas?",
      content:
        "Rubber Ducks are stored as ERC-721 tokens on the Ethereum blockchain. After each party, the updated metadata and image will be uploaded to IPFS. The metadata includes all the historical versions of your duck, and all previous versions will be hosted on IPFS.",
    },
    {
      title: "Should I send my duck to a party?",
      content:
        "Rubber Ducks are stored as ERC-721 tokens on the Ethereum blockchain. After each party, the updated metadata and image will be uploaded to IPFS. The metadata includes all the historical versions of your duck, and all previous versions will be hosted on IPFS.",
    },
    {
      title: "My duck didn’t change after a party, help?",
      content:
        " Rubber Ducks are stored as ERC-721 tokens on the Ethereum blockchain. After each party, the updated metadata and image will be uploaded to IPFS. The metadata includes all the historical versions of your duck, and all previous versions will be hosted on IPFS.",
    },
  ],
};

export default class Faqs extends Component {
  render() {
    return (
      <div className="block">
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
