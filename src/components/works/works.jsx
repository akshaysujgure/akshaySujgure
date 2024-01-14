import React from 'react';
import './works.scss';
import chat from "../../assets/chatApp.jpg"
import news from "../../assets/blog.jpg"
import hrm from "../../assets/hrm.jpg"
import conferance from "../../assets/conf.jpg"
import workoutTrack from "../../assets/workoutTracker.png"
import ecom from "../../assets/ecom.jpg"
import workManag from "../../assets/workManage.png"

const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="workDesc">With around 4 years of working experience in JavaScript ES6, I also have hands-on experience in Python and practice various cloud-based and CI/CD technologies. I am curently working on Data Encryption and Decryption platforms.</span>
        <div className="worksImgs">
            <img src={news} alt="newsApp" className="worksImg" />
            <img src={chat} alt="chatApp" className="worksImg" />
            <img src={hrm} alt="hrmApp" className="worksImg" />
            <img src={conferance} alt="conferanceApp" className="worksImg" />
            <img src={workoutTrack} alt="workoutTrackApp" className="worksImg" />
            <img src={ecom} alt="ecomApp" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works;