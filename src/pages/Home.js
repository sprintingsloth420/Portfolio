import React from 'react';
import "./Home.css";
import ProjectItem from './ProjectItem.js';
import projectData from '../assets/project-data.json';

projectData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function Home() {
  return (
    <div className="Home">
  
        <div className='intro'>
          <p>Welcome!! <br/>
          I am SprintingSloth, a coming-to-be UI/UX designer at Brown university. <br/><br/>
          My goal as a designer is to improve user experience through both logic and visual oragnizations.<br/>
          The following projects showcase this process of <b>understanding</b> the users,  <b>experimenting</b> different design alternatives,  <b>analyzing</b> user and peer feedback, and evetually <b>implementing</b> design concepts to tangible products.
          </p>
        </div>
        <h1 className='project_title'>Projects</h1>
        <div className='projects'>
         <div><ProjectItem item={projectData[0]}/></div>
          <div><ProjectItem item={projectData[1]}/></div>
          <div><ProjectItem item={projectData[2]}/></div>
          <div><ProjectItem item={projectData[3]}/></div>
        </div>

        <div className='footer'> '</div>

    </div>
  );
}

export default Home;
