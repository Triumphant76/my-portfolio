import { useState, useEffect } from 'react';
import ProjectCards from "./ProjectCards";
import axios from "axios";
import Carousel from 'react-material-ui-carousel';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Projects() {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/projects")
      .then((response) => setProjectData(response.data.data))
      .catch((error) => console.error(`Error fetching project data: ${error.message}`))
  }, []);

  const myProjects = projectData.map((project) => {
    return <ProjectCards key={project._id} {...project} />;
  });

  return (
    <div id="project" className="container mx-auto p-6">
      <div className="flex space-x-3">
        <h2 className="font-bold text-2xl md:text-3xl mb-4">Projects</h2>
        <FontAwesomeIcon icon="fa-solid fa-laptop" size="2xl" color="hsl(39, 97%, 55%)" />
      </div>
      {/* Project Cards */}
      <div className="hidden md:flex md:flex-wrap">{myProjects}</div>

      {/* Carousel */}
      <div className="md:hidden">
        <Carousel showThumbs={false} showStatus={false}>
          {myProjects}
        </Carousel>
      </div>
    </div>
  );
}
