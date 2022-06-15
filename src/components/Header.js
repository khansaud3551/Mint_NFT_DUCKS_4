import React, { useRef, useEffect, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import img1 from "../assets/Nfts/pigoen-1.png";
import "../css/Header.css";
import $ from "jquery";
import { ethers } from "ethers";

function Header({ home, setHome }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const navbarLinks = useRef(null);
  const handleNavbarButton = (e) => {
    navbarLinks.current.classList.toggle("menu-collapse");
  };

  const hideNavMenu = () => {
    if (!navbarLinks.current.classList.contains("menu-collapse")) {
      navbarLinks.current.classList.add("menu-collapse");
    }
  };

  const connectWalletHandler = () => {
    if (window.ethereum && window.ethereum.isMetaMask) {
      console.log("MetaMask Here!");

      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
          setConnButtonText("Wallet Connected");
          getAccountBalance(result[0]);
          $(".mint-btn").addClass(
            "buttons col-md-5 btn my-3 py-2 bg-white my-2"
          );
          $(".connect-btn").hide();
          $(".mint-btn").removeClass("hidden-btn");
          chainChangedHandler();
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getAccountBalance(newAccount.toString());
  };

  const getAccountBalance = (account) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [account, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const chainChangedHandler = () => {
    window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x1" }],
    });
  };

  // listen for account changes

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", accountChangedHandler);
      window.ethereum.on("chainChanged", chainChangedHandler);
    }
  }, []);

  return (
    <div>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
        className="navbars"
      >
        <div className="navbar-container ">
          <Link
            to=""
            className="d-flex align-items-center brand-title "
            rel="noopener noreferrer"
          >
            <motion.img
              initial={{ x: -1000 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                // damping: 20,
                // mass: 0.3,
              }}
              className="logo img_vc"
              src={img1}
              alt=""
            />

            <motion.h1
              initial={{ y: 1000 }}
              animate={{ y: 0 }}
              transition={{
                type: "spring",
                stiffness: 120,
                // damping: 20,
                // mass: 0.3,
              }}
              className="m-0 logo__title text-black"
            >
              Edhi-Pige
            </motion.h1>
          </Link>

          <button
            onClick={(e) => {
              handleNavbarButton(e);
            }}
            className="navbar-toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div ref={navbarLinks} className="navbar-links menu-collapse">
            <ul className="links-lists m-0">
              {home ? (
                <>
                  <motion.a
                    href="/"
                    whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
                    initial={{ y: 1000 }}
                    animate={{ y: 0 }}
                    transition={{
                      type: "spring",

                      stiffness: 120,
                    }}
                    className="nav-items nav-links"
                  >
                    Home
                  </motion.a>
                </>
              ) : (
                ""
              )}

              <motion.li
                whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",

                  stiffness: 120,
                }}
                className="nav-items"
              >
                <Link
                  activeClass="is-active"
                  className="nav-links"
                  to="roadmap"
                  offset={-88}
                  spy={true}
                  smooth={true}
                  onClick={(e) => {
                    handleNavbarButton(e);
                  }}
                >
                  RoadMap
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="nav-items"
              >
                <Link
                  activeclassname="is-active"
                  className="nav-links"
                  offset={-70}
                  spy={true}
                  smooth={true}
                  to="showcase"
                  onClick={(e) => {
                    handleNavbarButton(e);
                  }}
                >
                  Collection
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="nav-items"
              >
                <Link
                  activeclassname="is-active"
                  className="nav-links"
                  to="faqs"
                  offset={-100}
                  spy={true}
                  smooth={true}
                  onClick={(e) => {
                    handleNavbarButton(e);
                  }}
                >
                  FAQ
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="nav-items"
                onClick={(e) => {
                  handleNavbarButton(e);
                }}
              >
                <a
                  href="https://discord.gg/82vaX56W2v"
                  target="_blank"
                  className="nav-links"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-discord nav__icon" />
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.2, color: "#f8e112", originX: 0 }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="nav-items"
              >
                <a
                  href="https://twitter.com/EdhiPige"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-twitter nav__icon" />
                </a>
              </motion.li>

              <motion.li
                whileHover={{ scale: 1.2, originX: 0 }}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                }}
                className="nav-items"
              >
                <a
                  href="https://opensea.io/collection/cryptofkers"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={50}
                    height={50}
                    viewBox="0 0 90 90"
                    fill="var(--primary)"
                  >
                    <path
                      d="M90 45C90 69.8514 69.8514 90 45 90C20.1486 90 0 69.8514 0 45C0 20.1486 20.1486 0 45 0C69.8566 0 90 20.1486 90 45Z"
                      fill="#2081E2"
                      style={{ fill: "rgb(255 223 186)" }}
                    />
                    <path
                      d="M22.2011 46.512L22.3953 46.2069L34.1016 27.8939C34.2726 27.6257 34.6749 27.6535 34.8043 27.9447C36.76 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3948 44.4593 35.3545 46.2069C35.2204 46.4612 35.0725 46.7109 34.9153 46.9513C34.8413 47.0622 34.7165 47.127 34.5824 47.127H22.5432C22.2196 47.127 22.0301 46.7756 22.2011 46.512Z"
                      fill="var(--text)"
                    />
                    <path
                      d="M74.38 49.9149V52.8137C74.38 52.9801 74.2783 53.1281 74.1304 53.1928C73.2242 53.5812 70.1219 55.0052 68.832 56.799C65.5402 61.3807 63.0251 67.932 57.4031 67.932H33.949C25.6362 67.932 18.9 61.1727 18.9 52.8322V52.564C18.9 52.3421 19.0803 52.1618 19.3023 52.1618H32.377C32.6359 52.1618 32.8255 52.4022 32.8024 52.6565C32.7099 53.5072 32.8671 54.3764 33.2693 55.167C34.0461 56.7435 35.655 57.7283 37.3934 57.7283H43.866V52.675H37.4673C37.1391 52.675 36.9449 52.2959 37.1345 52.0277C37.2038 51.9214 37.2824 51.8104 37.3656 51.6856C37.9713 50.8257 38.8358 49.4895 39.6958 47.9684C40.2829 46.9421 40.8516 45.8463 41.3093 44.746C41.4018 44.5472 41.4758 44.3438 41.5497 44.1449C41.6746 43.7936 41.804 43.4653 41.8965 43.1371C41.9889 42.8597 42.0629 42.5684 42.1369 42.2956C42.3542 41.3617 42.4467 40.3723 42.4467 39.3459C42.4467 38.9437 42.4282 38.523 42.3912 38.1207C42.3727 37.6815 42.3172 37.2423 42.2617 36.8031C42.2247 36.4147 42.1554 36.031 42.0814 35.6288C41.9889 35.0416 41.8595 34.4591 41.7115 33.8719L41.6607 33.65C41.5497 33.2478 41.4573 32.864 41.3278 32.4618C40.9626 31.1996 40.5418 29.9698 40.098 28.8186C39.9362 28.3609 39.7512 27.9217 39.5663 27.4825C39.2935 26.8213 39.0161 26.2203 38.7619 25.6516C38.6324 25.3927 38.5214 25.1569 38.4105 24.9165C38.2857 24.6437 38.1562 24.371 38.0268 24.112C37.9343 23.9132 37.8279 23.7283 37.754 23.5434L36.9634 22.0824C36.8524 21.8836 37.0374 21.6478 37.2546 21.7079L42.2016 23.0487H42.2155C42.2247 23.0487 42.2294 23.0533 42.234 23.0533L42.8859 23.2336L43.6025 23.437L43.866 23.511V20.5706C43.866 19.1512 45.0034 18 46.4089 18C47.1116 18 47.7496 18.2866 48.2073 18.7536C48.665 19.2206 48.9517 19.8586 48.9517 20.5706V24.935L49.4787 25.0829C49.5204 25.0968 49.562 25.1153 49.599 25.143C49.7284 25.2401 49.9133 25.3835 50.1491 25.5591C50.3341 25.7071 50.5329 25.8874 50.7733 26.0723C51.2495 26.4561 51.8181 26.9508 52.4423 27.5194C52.6087 27.6628 52.7706 27.8107 52.9185 27.9587C53.723 28.7076 54.6245 29.5861 55.4845 30.557C55.7249 30.8297 55.9607 31.1071 56.2011 31.3984C56.4415 31.6943 56.6958 31.9856 56.9177 32.2769C57.209 32.6652 57.5233 33.0674 57.7961 33.4882C57.9256 33.687 58.0735 33.8904 58.1984 34.0892C58.5497 34.6209 58.8595 35.1711 59.1554 35.7212C59.2802 35.9755 59.4097 36.2529 59.5206 36.5257C59.8489 37.2608 60.1078 38.0098 60.2742 38.7588C60.3251 38.9206 60.3621 39.0963 60.3806 39.2535V39.2904C60.436 39.5124 60.4545 39.7482 60.473 39.9886C60.547 40.756 60.51 41.5235 60.3436 42.2956C60.2742 42.6239 60.1818 42.9336 60.0708 43.2619C59.9598 43.5763 59.8489 43.9045 59.7056 44.2143C59.4282 44.8569 59.0999 45.4996 58.7115 46.1006C58.5867 46.3225 58.4388 46.5583 58.2908 46.7802C58.129 47.016 57.9626 47.238 57.8146 47.4553C57.6112 47.7327 57.3939 48.0239 57.172 48.2828C56.9732 48.5556 56.7697 48.8284 56.5478 49.0688C56.2381 49.434 55.9422 49.7808 55.6324 50.1137C55.4475 50.331 55.2487 50.5529 55.0452 50.7517C54.8464 50.9736 54.643 51.1724 54.4581 51.3573C54.1483 51.6671 53.8894 51.9075 53.6721 52.1063L53.1635 52.5733C53.0896 52.638 52.9925 52.675 52.8908 52.675H48.9517V57.7283H53.9079C55.0175 57.7283 56.0716 57.3353 56.9223 56.6141C57.2136 56.3598 58.485 55.2594 59.9876 53.5997C60.0384 53.5442 60.1032 53.5026 60.1771 53.4841L73.8668 49.5265C74.1211 49.4525 74.38 49.6467 74.38 49.9149Z"
                      fill="var(--text)"
                    />
                  </svg>
                </a>
              </motion.li>
              <motion.button
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  duration: 0.1,
                }}
                whileTap={{ scale: 0.8 }}
                className="bn__header "
                onClick={connectWalletHandler}
              >
                {connButtonText}
              </motion.button>

              {/* <div>
                  <Wallet />
                </div> */}
            </ul>
          </div>
        </div>
      </motion.nav>
      <div className="container">
        <AllRoutes
          hideMenu={() => {
            hideNavMenu();
          }}
        ></AllRoutes>
      </div>
    </div>
  );
}

function AllRoutes({ hideMenu }) {
  let location = useLocation();
  useEffect(() => {
    hideMenu();
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
}

function Home() {
  return <h1 className="m-0"></h1>;
}

export default Header;
