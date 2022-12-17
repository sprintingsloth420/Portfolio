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
                <p>Material UI
                different font sizes, colors, and italicizing to create visual hierarchy
                unified color scheme of white, gray, and blue</p>
            <br/>   

    <div className='section_subtitle'>STEP 3: Implementing the webpage</div>
      <p>Out of the 5 users I observed, I conducted interviews with 3 users.</p>

    <div className='persona_interview'>
        <div><b>Questions</b>
        <ol>
          <li>Are you studying at the library?</li>
          <li>Do you usually use vending machines? </li>
          <li>Is this your first time using this coffee vending machine?</li>
          <li>If yes: Did you experience any difficulty in understanding what to do? If no: How was your first experience like? Did things get easier as you use it more? </li>
          <li>Why did you choose to use this machine?</li>
          <li>If there is an open café that is within a 5-minute walk, would you choose to walk and get your drinks there or still use this machine?</li>
          <li>How was your experience with navigating the screen?</li>
          <li>How was the payment process?</li>
          <li>Would you prefer to use your own mug? And why is that?</li>
          <li>Is there any other comment you’d want to mention about your experience?</li>
          <li>Would you use this machine again?</li>
        </ol></div>
        <div> <b>Responses</b>
        <ul>
          <li>All interviewees were studying at the library and liked the fact that the machine was right here and would hence keep using the machine in the future, even when nearby cafés are available.</li>
          <li>All interviewees had experience using other vending machines and generally agreed that navigating on the digital screen was relatively straightforward. Some pointed out there were too many options, which was a bit confusing.</li>
          <li>All interviewees indicated that they had some trouble understanding how the machine and the interface worked the first time using it. There was no overview of what they needed to do so they had to try things out along the way, e.g. knowing whether the machine would provide cups, or knowing when to pay.</li>
          <li>All interviewees pointed out that they had some difficulty with the payment process, either with swiping credit cards or using wrinkled bills.</li>
          <li>All interviewees preferred having the option of using single-use paper cups or their own mugs - mugs are eaiser to carry around and has better heat insulation, whereas cups are for cases when they don't have own mugs with them.</li>
        </ul></div>

       
    
    </div>
         </div>

         <div className='Project_deliverables'>
            <div className='section_title'>deliverables</div>
            <div className='section_subtitle'>Personas</div>
            <div className='persona_sketch'>
                <img src={process.env.PUBLIC_URL + "/" + "images/persona1.png"}></img>
                <div><b>Confused Anna</b>, a retired lady who is not very tech-savvy. She enjoys reading at the Rock a lot, and she just finds out about the new coffee vending machine in the lobby and would like a cup of coffee to warm herself up.<br/><br/>
                     Anna represents the group of users who are not familiar with the machine, possibly because they are first-time users or because they have little experience in using automatic vending machines in general. They are confused about what the whole process is like and what they are supposed to do at each stage. They reflect affordance problems of the interface:<br/>
                    <ul> <li>Lack of an overview of the whole process <br/></li>
                    <li>Instructions for each step are scattered around the screen <br/></li>
                    <li> No clear instruction on when the payment should be made<br/></li>
                    <li>No clear instruction on whether cups will be provided by the machine, and the lids on the counter can mislead users to search for cups on the counter too <br/></li>
               </ul>
                    </div>
            </div>
            <br/>
            <div className='persona_sketch'>
                 <div>
                    <b>Grinding Alex</b>, a Brown student concentrating in Psychology. He is pulling an all-nighter for a paper due the next morning and decides to get coffee at 2 am.<br/><br/>
                    Alex represents more regular users who have experience using this coffee machine so they have little trouble performing normal interactions. However, users who buy coffee at a library are likely to be mentally tired from academic work (or "grinding"). They hence reflect more nuanced problems that can further improve the usability of the interface once fixed:<br/>
                    <ul>
                    <li>Many options are offered but their differences are not shown<br/></li>
                    <li>No way for the users to directly observe how full the cup is unless they pull the cup out <br/></li>
                    </ul>

                 </div>
                 <img src={process.env.PUBLIC_URL + "/" + "images/persona2.png"}></img>
            </div>
            
            <br/><br/>

            <div className='section_subtitle'>Storyboard</div>
            <img id='persona_storyboard' src={process.env.PUBLIC_URL + "/" + "images/storyboard.jpg"}persona_storyboard></img>
        </div>

         <div className='Project_takeaways'>
            <div className='section_title'>Takeaways</div>
    
         </div>
        </div>

        <div className='footer'> SprintingSloth 2022<br/>Handcoded with &#9829;</div>

</div>
  );
}

export default Development;
