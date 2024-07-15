import React, { useEffect, useState } from 'react';
import '../css/projectcountedit.css';
import Icon1 from "../../public/Images/Icons/projects.png";
import Icon2 from "../../public/Images/Icons/painters.png";
import Icon3 from "../../public/Images/Icons/brands.png";
import Icon4 from "../../public/Images/Icons/user.png";
import axios from "axios";

const ProjectSection = ({ imageUrl, title, description, actCount }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let currentCount = 0;

        const interval = setInterval(() => {
            currentCount += 1;
            if (currentCount >= actCount) {
                clearInterval(interval);
                setCount(actCount);
            } else {
                setCount(currentCount);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [actCount]);

    return (
        <div className="group relative bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10 projectcountedit2">
            <div className="relative p-8 projectcountedit1">
                <div className="countsectionicon">
                    <img
                        src={imageUrl}
                        loading="lazy"
                        alt="Logo"
                    />
                </div>

                <div className="projectscount">{count}+</div>
                <div className="projectcounttexts">
                    <h5 className="text-3xl font-bold text-black transition group-hover:text-secondary projectcounttexts">{title}</h5>
                </div>
            </div>
        </div>
    );
};

const ProjectCountSection = () => {
    const [paintCount, setPaintCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [projectCount, setProjectCount] = useState(0);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const response1 = await axios.get("http://localhost:8080/api/paint/count");
                setPaintCount(response1.data);

                const response2 = await axios.get("http://localhost:8080/api/user/count/USER");
                setUserCount(response2.data);

                const response3 = await axios.get("http://localhost:8080/api/project/count");
                setProjectCount(response3.data);
            } catch (error) {
                console.error("Error fetching counts:", error);
            }
        };

        fetchCounts();
        const intervalId = setInterval(fetchCounts, 60000); // Update counts every 60 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="projectcountedit">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ">
                <div
                    className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600  sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4 projectcountedit1">
                    <ProjectSection
                        imageUrl={Icon1}
                        title="Projects"
                        description="Platform to convert Domains into Content websites."
                        actCount={projectCount}
                    />
                    <ProjectSection
                        imageUrl={Icon2}
                        title="Painters"
                        description="Platform to create dynamic widgets for websites."
                        actCount={40}
                    />
                    <ProjectSection
                        imageUrl={Icon3}
                        title="Paints"
                        description="API SaaS Platform that provides API Suit to help you ship fast."
                        actCount={paintCount}
                    />
                    <ProjectSection
                        imageUrl={Icon4}
                        title="Users"
                        description="Chrome Extension that lets you add ChatGPT on any website"
                        actCount={userCount}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectCountSection;
