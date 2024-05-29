import React from "react";
import ProjectDetailsCard from "../components/ProjectDetailsCard";
import MyNavBar from "../components/NavBar";
import MyFooter from "../components/Footer";
import "../css/ProjectDetailsCard.css";

function AllProjects(props) {
  return (
    <>
      <div className="ProjectDetailsBack">
        <div className="content">
          <MyNavBar />
          <h1 className="projectTitle">Palette of Projects</h1>
          <h1 className="sentence">"Explore our curated collection of past painting projects, where creativity meets craftsmanship."</h1>
          <div className="card-container">
            <div className="card-wrapper">
              <ProjectDetailsCard />
            </div>
            <div className="card-wrapper">
              <ProjectDetailsCard />
            </div>
            <div className="card-wrapper">
              <ProjectDetailsCard />
            </div>
            <div className="card-wrapper">
              <ProjectDetailsCard />
            </div>
          </div>
          <MyFooter />
        </div>
      </div>
    </>
  );
}

export default AllProjects;
