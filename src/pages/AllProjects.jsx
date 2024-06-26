import React, {useEffect, useState} from "react";
import ProjectDetailsCard from "../components/ProjectDetailsCard";
import MyNavBar from "../components/NavBar";
import MyFooter from "../components/Footer";
import "../css/ProjectDetailsCard.css";
import axios from "axios";

function AllProjects(props) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/project');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching paints:', error);
            }
        };

        fetchProjects();
        const intervalId = setInterval(fetchProjects, 1000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <div className="ProjectDetailsBack">
                <div className="content">
                    <MyNavBar/>
                    <h1 className="projectTitle">Palette of Projects</h1>
                    <h1 className="sentence mb-8">" Explore our curated collection of past painting projects, where creativity
                        meets craftsmanship "</h1>
                  <div className="lg:grid grid-cols-3 sm:flex-col">
                      {projects.map((item, index) => (
                          <div key={index} className="card-wrapper pcard">
                              <ProjectDetailsCard item={item}/>
                          </div>
                      ))}
                  </div>
                    {/*<MyFooter/>*/}
                </div>
                <MyFooter className="footer-p"/>
            </div>
        </>
    );
}

export default AllProjects;
