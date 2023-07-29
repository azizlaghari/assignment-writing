import React from "react";
import { FiPaperclip, FiCast, FiCalendar } from 'react-icons/fi';

import "./subscription.css";


const Subscription = () => {
  return (
    <>
      <div className="main">
        <div className="subscriptions_section">
          <h1 className="heading">Subscription</h1>
          <p>
            Support these creators by purchasing their monthly <br></br> subscriptions, and
            get access to premium content
          </p>
          <button title="Source files"><FiPaperclip></FiPaperclip>Source files</button>
          <button title="Live Streams"><FiCast></FiCast>Live Streams</button>
          <button title="Meetup"><FiCalendar></FiCalendar>Meetup</button>
        </div>
      </div>
    </>
  );
};

export default Subscription;
