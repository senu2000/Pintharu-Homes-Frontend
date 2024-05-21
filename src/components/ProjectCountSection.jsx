import React from 'react';
import '../css/projectcountedit.css';
import Icon1 from "../../public/Images/Icons/projects.png";
import Icon2 from "../../public/Images/Icons/painters.png";
import Icon3 from "../../public/Images/Icons/brands.png";
import Icon4 from "../../public/Images/Icons/user.png";


const ProjectSection = ({imageUrl, title, description}) => {
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

                <div className="projectscount">25+</div>
                <div className="projectcounttexts">
                    <h5 className="text-3xl font-bold text-black transition group-hover:text-secondary projectcounttexts">{title}</h5>
                </div>
            </div>
        </div>
    );
};

const ProjectCountSection = () => {
    return (
        <div className=" projectcountedit">
            {/*<div aria-hidden="true"*/}
            {/*     className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">*/}
            {/*    <div className="blur-[106px] h-56 bg-gradient-to-br  to-purple-400 from-blue-700"></div>*/}
            {/*    <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400  to-indigo-600"></div>*/}
            {/*</div>*/}
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ">
                <div
                    className="mt-16 grid divide-x divide-y  divide-gray-700 overflow-hidden  rounded-3xl border text-gray-600  sm:grid-cols-2 lg:grid-cols-4  lg:divide-y-0 xl:grid-cols-4 projectcountedit1">
                    <ProjectSection
                        imageUrl={Icon1}
                        title="Projects"
                        description="Platform to convert Domains into Content websites."
                    />
                    <ProjectSection
                        imageUrl={Icon2}
                        title="Painters"
                        description="Platform to create dynamic widgets for websites."
                    />
                    <ProjectSection
                        imageUrl={Icon3}
                        title="Brands"
                        description="API SaaS Platform that provides API Suit to help you ship fast."
                    />
                    <ProjectSection
                        imageUrl={Icon4}
                        title="Users"
                        description="Chrome Extension that lets you add ChatGPT on any website"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectCountSection;
