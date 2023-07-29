import React from "react";
import { FiPaperclip, FiCast, FiCalendar } from "react-icons/fi";

import "./subscription.css";

const Subscription = () => {
  const unsplashMan = "https://source.unsplash.com/featured?face-portrait-man";
  const unsplashWoman = "https://source.unsplash.com/featured?face-portrait-woman";
  const unsplash = "https://source.unsplash.com/featured?face-portrait";
  return (
    <>
      <div className="main">
        <div className="subscriptions_section">
          <h1 className="heading">Subscription</h1>
          <p>
            Support these creators by purchasing their monthly <br></br>{" "}
            subscriptions, and get access to premium content
          </p>
          <button title="Source files">
            <FiPaperclip></FiPaperclip>Source files
          </button>
          <button title="Live Streams">
            <FiCast></FiCast>Live Streams
          </button>
          <button title="Meetup">
            <FiCalendar></FiCalendar>Meetup
          </button>
          <div className="cards">
            <div className="card">
              <img
                src={unsplashMan}
                alt=""
              />
              <h2>Abdul</h2>
              <p>Web Developer</p>
              <button className="content-btn">View content</button>
            </div>
            <div className="card">
              <img
                src={unsplashWoman}
                alt=""
              />
              <h2>Candace Ashley</h2>
              <p>UX/UI Designer</p>
              <button className="content-btn">View content</button>
            </div>
            <div className="card">
              <img
                src={unsplash}
                alt=""
              />
              <h2>Ahmed</h2>
              <p>Finance Manegar</p>
              <button className="content-btn">View content</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
