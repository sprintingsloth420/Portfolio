import React from 'react';
import "./HomeNav.css";
import ProjectItem from './ProjectItem.js';
import projectData from '../assets/project-data.json';

projectData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

function Home() {
  return (
    <div className="Home">

        <div className='intro'>
          <p style={{fontSize:'4rem',display:'inline'}}>Hi, I am SprintingSloth. <br/><br/> </p>
          An emerging UI/UX designer at Brown university aiming to improve user experience through both <p style={{color:'#4682B4',display:'inline'}}><b>logical</b></p> and <p style={{color:'#4682B4',display:'inline'}}><b>visual</b></p> oragnizations. <br/><br/>
          The following projects showcase this process of <b>understanding</b> the users,  <b>experimenting</b> different design alternatives,  <b>analyzing</b> user and peer feedback, and evetually <b>implementing</b> design concepts to tangible products.
          
        </div>
        <h1 className='project_title'>Projects</h1>
        <div id='projects'>
          <div className='projects_sub'>
            <div><ProjectItem item={projectData[0]}/></div>
            <div><ProjectItem item={projectData[1]}/></div>
          </div>
         
          <div className='projects_sub'>
            <div><ProjectItem item={projectData[2]}/></div>
            <div><ProjectItem item={projectData[3]}/></div>
          </div>
        </div>

        <div className='footer'> '</div>

    </div>
  );
}

export default Home;
