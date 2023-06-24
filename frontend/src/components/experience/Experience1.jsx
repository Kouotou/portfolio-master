import React from "react";
import "./experience.css";
//import { BsPatchCheckFill } from "react-icons/bs";
import ListExperiences from "./components/listExperiences";

export const Experience = () => {
  return (
    <section id="experience">
      <h5>What skills i have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        {/* <div className="experience_frontend">
          <h3> Frontend Development</h3>
          <div className="experience_content">
              <article className="experience_details">
                <BsPatchCheckFill />
                <h4>HTML</h4>
                <small className="text-light"> Experienced</small>
              </article>
          </div>
        </div> */}
        <ListExperiences />
      </div>
    </section>
  );
};
export default Experience;
