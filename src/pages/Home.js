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
          <p style={{fontSize:'4rem',display:'inline'}}>Hi, I am Juliana. <br/><br/> </p>
          An emerging UI/UX designer at Brown university aiming to improve <b> user experience</b>  through both <p style={{color:'#4682B4',display:'inline'}}><b>logical</b></p> and <p style={{color:'#4682B4',display:'inline'}}><b>visual</b></p> oragnizations. <br/>
          <p>This portfolio records my journey of becoming a designer by showcasing this process of <b>understanding</b> the users,  <b>experimenting</b> with different design alternatives,  <b>analyzing</b> user and peer feedback, and eventually <b>implementing</b> design concepts into functional webpages.</p>
          
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

        <div className='footer'> Juliana 2022<br/>Hand-coded with &#9829;</div>

    </div>
  );
}

export default Home;
