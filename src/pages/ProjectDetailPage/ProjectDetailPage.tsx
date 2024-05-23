import React from 'react';
import { useParams } from 'react-router-dom';

export const ProjectDetailPage: React.FC = () => {
  const { id } = useParams();

  // Fetch project data using the id or pass it through state
  // For demonstration, assume we have a function fetchProjectById to get project data
  // const projectData = fetchProjectById(id);

  return (
    <div>
      <h1>Project Detail Page</h1>
      {/* Display project data here */}
      <p>Project ID: {id}</p>
      {/* <p>{projectData.title}</p>
      <p>{projectData.description}</p>
      <img src={projectData.image} alt={projectData.title} /> */}
    </div>
  );
};
