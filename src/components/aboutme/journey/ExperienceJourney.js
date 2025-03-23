import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Building Foundations in Web Development
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Skills Developed: HTML, CSS, JavaScript, ReactJS, NodeJS
          </h6>
          <p>Journey: In 2024, I delved into full-stack development, learning front-end technologies like ReactJS and back-end tools like NodeJS. During this period, I developed a strong understanding of building dynamic, scalable web applications.
          </p>
          <p></p>
          <p> </p>
          <p></p>
          <p></p>
          <p></p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date=""
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Solving Real-World Challenges
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Skills Developed: Preblem-solvinng, Hazardous Wast Management, Innovative solutions.
          </h6>
          <p>Journey: As I continue to grow as a developer, I'm passionate about solving real-world challenges. One of my key areas of interest is hazardous medical waste management. I'm exploring how AI and machine learning can optimize solutions to address this crucial problem.
          </p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
