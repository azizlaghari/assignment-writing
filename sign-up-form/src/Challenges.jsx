import React from 'react'
import './Challenges.css'

const Challenges = () => {
  return (
    <div>
      <div className="container">
      <div className="challenges">
        <div className="challenge">
          <img src="https://shorturl.at/cemsL" alt="" />
          <div className="chall-text">
            <span>Music Player challenge</span>
            <span>83</span>
            <span>challengers</span>
            <span>16 Aug. 2018</span>
            <span>submission date</span>
          </div>
          <button>SUBMIT</button>
        </div>
        <hr />
        <div className="challenge">
          <img src="https://shorturl.at/hpBX4" alt="" />
          <div className="chall-text">
            <span>World Cup challenge</span>
            <span>104</span>
            <span>challengers</span>
            <span>24 Aug 2018</span>
            <span>submission date</span>
          </div>
          <button>SUBMIT</button>
        </div>
        <hr />
        <div className="challenge">
          <img src="https://shorturl.at/qstvQ" alt="" />
          <div className="chall-text">
            <span>Social Platform challenge</span>
            <span>67</span>
            <span>challengers</span>
            <span>29 Aug 2018</span>
            <span>submission date</span>
          </div>
          <button>SUBMIT</button>
        </div>
        <hr />
        <div className="challenge">
          <img src="https://shorturl.at/akpx6" alt="" />
          <div className="chall-text">
            <span>Email System challenge</span>
            <span>14</span>
            <span>challengers</span>
            <span>7 Sep 2018</span>
            <span>submission date</span>
          </div>
          <button>SUBMIT</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Challenges