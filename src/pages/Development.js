import React from 'react';
import './Project.css';

function Development() {
  return (
    <div className="Project">
        <div className='back_button'>
           <a href='/CS1300_Portfolio'><button> &lt;  Back to Projects</button><br/><br/></a> 
        </div>
        <div className='Project_intro'>
          <p style={{fontSize:'4rem',display:'inline'}}> Sloth's Virtual Gallery <br/><br/> </p>
          <p style={{color:'#4682B4',display:'inline'}}><b>Implementing </b></p> an interactive gallery webpage using components and updated data state while incorporating visual design principles.
        </div>

        <div className='Project_content'>
        <div className='Project_context'>
            <div className='section_title'>Context & Aim</div>
                <p>In this project, I implemented a gallery webpage using <a href={"https://reactjs.org/"} id="react">React</a>, a JavaScript library for an interactive user interface. In this virtual gallery, I have selected 12 of my personal favorite paintings and displayed information including the artist, year of production, media, current location, and dimension, along with a sentence about what I like about the art piece. The virtual gallery allows the user to sort, filter, and aggregate the dimensions of selected artworks.</p>
                <p>Through this project, I aim to gain familiarity with developing functional websites using a common JS framework to accompany all the design concepts and methods that I have learned in previous projects, while still incorporating necessary visual design principles. I hope to improve <b>user experience</b> through both practical and aesthetic elements.</p>
         </div>

         <div className='Project_process'>
            <div className='section_title'>Process</div>

            <div className='section_subtitle'>STEP 1: Getting familiar with React & JS</div>
            <p>I began with learning some basic concepts, functions, and syntax of JavaScript and React. These include: </p>
            <ul>
                <li>Components</li>
                <li>Props</li>
                <li>State and useState()</li>
                <li>filter(), sort(),map(),etc.</li>
            </ul>
            <br/>
            

            <div className='section_subtitle'>STEP 2: Deciding on visual design choices</div>
                <p>I chose to use a simple layout for the webpage, with panels of filters and sorting buttons on the left and the list of artworks on the right. The webpage has a unified color scheme with white, gray, and blue for a clean and concise look. I used the Material UI library for the action buttons to have a consistent theme. Each artwork takes up a card with different font sizes, colors, and italicizing to create a visual hierarchy.</p>
            <br/>   

    {/* <div className='section_subtitle'>STEP 3: Implementing the webpage</div>
      <p>Out of the 5 users I observed, I conducted interviews with 3 users.</p> */}




         </div>

         <div className='Project_deliverables'>
            <div className='section_title'>deliverables</div>
            
            Check out my gallery: <a className="responsive_url" href={"https://sprintingsloth420.github.io/CS1300_Development/"}>Sloth's virtual gallery</a>
            <br/> <br/>
            <iframe className='iframe' src={"https://sprintingsloth420.github.io/CS1300_Development/"}></iframe>
            <br/><br/>

           
        </div>

         <div className='Project_takeaways'>
            <div className='section_title'>Takeaways</div>
            <ul style={{lineHeight:'2.8rem'}}>
                    <li>I learned about the workflow of the iterative design process, including sketching ideas, creating low-fidelity and high-fidelity prototypes, collecting peer feedback, revising the design, and finally conducting user testings and further revising the design.</li>
                    <li>I gained experience in working in a design team and learned about how to brainstorm and then gather design ideas, how to express my own ideas while understanding others, how to distribute tasks, etc. Communication is the key!</li>
                    <li>Since my work focused on analyzing the feedback, it is interesting seeing how users' actual interactions with our prototype differed from our design goals and expectations. </li>
                    <li>Never assume that there is a "right" way of using a design product - always center around the users' experience!</li>
                    <li>(We were so excited when we got the email from the start-up saying that our design was forwarded to the product design team! But it is sad that we never heard back since... ;( )</li>
                </ul>
                <br/><br/><br/><br/>
         </div>
        </div>

        <div className='footer'> SprintingSloth 2022<br/>Handcoded with &#9829;</div>

</div>
  );
}

export default Development;
