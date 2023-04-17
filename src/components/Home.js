// import { Container } from '@mui/material'
import React from "react";
import "../styles/home.css";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import { Avatar } from "@mui/material";
const Home = () => {
  return (
    <div className="container-fluid home-container ">
      <nav className="navbar navbar-dark navbar-expand-lg  ">
        <div className="container-fluid mt-4">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>

          <span class="navbar-brand d-flex  ">
            <Avatar sx={{ width: 56, height: 56 }} />
            <h2>Guruji</h2>
          </span>

          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarNav"
          >
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a className="nav-link  active " aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/">
                  Call with Astrologers
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-light" href="/">
                  Live(Coming soon)
                </a>
              </li>
            </ul>
          </div>
          <span class="navbar-brand  h1">
            <Avatar />
          </span>
        </div>
      </nav>
      <div className="container-fluid mt-4">
        <h1>" Astrology for Clarity "</h1>
        <p>
          Akash is a vedic Astrologer and has expertise in vaastu and Mantra
          Therapy
        </p>
        <button
          type="button"
          class=" mt-4 mb-4 px-2 py-1"
          style={{
            color: "white",
            background: "#a74800",
            borderRadius: "20px",
            border: "none",
          }}
        >
          Consult Now
        </button>
      </div>
      <div className="container-fluid d-flex mt-4 p-4">
        <div className="container-fluid">
          <SupportAgentIcon sx={{ fontSize: 40 }} />
          <p>24 x 7 Customer Support</p>
        </div>
        <div className="container-fluid">
          <CurrencyExchangeIcon sx={{ fontSize: 40 }} />
          <p>100% Refund if Unsatisfied</p>
        </div>
        <div className="container-fluid">
          <PrivacyTipIcon sx={{ fontSize: 40 }} />
          <p>Private & Confidential</p>
        </div>

        <div className="container-fluid">
          <VerifiedUserIcon sx={{ fontSize: 40 }} />
          <p>Verified Astrologers</p>
        </div>
        <div className="container-fluid">
          <AssuredWorkloadIcon sx={{ fontSize: 40 }} />
          <p>Secure Payment</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
