import React from 'react';
import './Project.css';
import { useEffect } from 'react';

function Persona() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="Project">
        <div className='back_button'>
           <a href='/CS1300_Portfolio'><button> &lt;  Back to Projects</button><br/><br/></a> 
        </div>
        <div className='Project_intro'>
          <p style={{fontSize:'4rem',display:'inline'}}> Coffee Vending Machine <br/><br/> </p>
          <p style={{color:'#4682B4',display:'inline'}}><b>Understanding </b></p> different user journeys by creating personas and a storyboard for the offee vending machine located at a Brown library.
        </div>

        <div className='Project_content'>

        <div className='Project_context'>
            <div className='section_title'>Context & Aim</div>
                <p>In this project, I conducted user research on the coffee vending machine located at the Brown University Rockefeller Library. I observed real users' interactions with this selected interface, created relevant interview questions, and conducted interview with some of the users about their experiences. Based on the data collected, I then created two user personas with the four-quadrant empathy maps as well as a storyboard to depict the user journey.</p>
                <p>Through this project, I aim to really step into a user's shoes to emphasize with the users. I believe that a deep understanding of the user journey is the crucial first step in identifying design issues, tackling these issues, and improving <b>user experience</b>.</p>
         </div>

         <div className='Project_process'>
            <div className='section_title'>Process</div>

            <div className='section_subtitle'>STEP 1: Understanding the interface</div>
            <p>The coffee vending machine has an interactive digital screen to guide the user to purchase a selection of drinks (e.g. coffee, hot chocolate, etc.). It is an automatic vending machine that does not require the labor of a barista and operates 24/7. </p>
            <p>Here is a sketch of the interface:</p>
            <div className= 'persona_sketch'>
            <img src={process.env.PUBLIC_URL + "/" + "images/machine_sketch.png"}></img>
                <ol>
                <li><b>The interactive digital screen. </b> <br/>
                It displays the following series of screens (check out the storyboard for rough sketches of each screen!):
                <ul>
                    <li>Home page with a “TOUCH TO START” button</li>
                    <li>Menu & prices </li>
                    <li>Confirmation page with total price, payment options, and a pop-up button saying “MAKE MY DRINK”</li>
                    <li>“PREPARING YOUR DRINK” page </li>
                    <li>"ENJOY YOUR DRINK” page with a video of removing the cup</li>
                </ul>
                </li>
                <li><b>The payment section.</b> <br/>
                It includes a credit card swipe slot, a bill acceptor, a coin insert, and a contactless payment area. Everything is labeled with an instruction image except the coin insert.
                </li>
                <li><b>The pick-up port.</b> <br/>
                When the machine starts to make a drink, a cup automatically drops down and is held in the air by the clamp. When the drink is done, the cup hangs there until the user pulls the cup out.
                </li>
                <li><b>The counter. </b> <br/>
                It is right next to the machine where users can temporarily place their drinks. There is also a holder for cup lids.
    
                </li>
            </ol>
            </div>
            <br/>

            <div className='section_subtitle'>STEP 2: Observing user behaviors</div>
                <p>I observed 5 users who interacted with the interface and purchased drinks at the machine. Here are some objective observations of user behaviors:</p>

            <div className='persona_interview'>
                <div> <b>Common behaviors</b>
                <ul>
                    <li>Once users approached the machine, they immediately tapped the screen and started interacting with the machine</li>
                    <li>The majority of users observed interacting with the machine with no or very few pauses</li>
                    <li>They were all holding a credit card or a phone for Apple Pay throughout the whole purchase experience</li>
                    <li>The majority of users observed were not paying attention to the machine when the drink was made but instead were on their phones, chatting with friends, or using the nearby vending machines for snacks</li>
                    <li>All users were staring at the cup and walking slowly after getting their cup full of hot coffee</li>
                </ul></div>

                <div> <b>Individual behaviors</b>
                <ul>
                    <li>User A was looking for something on the counter near the lid holder as well as the cabinets and drawers below</li>
                    <li>User A got their own bottle from the bag, placed it below the pick-up port, and removed their own bottle when the machine started preparing the drink and a paper cup dropped out from the port. They then tried to get the cup out by wiggling it but stopped doing it when there was the sound of liquid dripping</li>
                    <li>User B swiped their credit card several times before the machine recognized their payment</li>
                    <li>User C was holding their own mug in one hand and the paper cup with the drink in the other hand</li>
                    <li>User C said, “it’s so hot.”</li>
                </ul></div>
            </div>
            <br/>   

    <div className='section_subtitle'>STEP 3: Interviewing the users</div>
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
                <ul style={{lineHeight:'2.8rem'}}>
                    <li>This is my first taste of user experience research. Important first step!</li>
                    <li>Even when the users are interacting with the exact same interface, there are very different ways of interaction and thoughts going on in their minds. Since users have different interactions and experiences, it is very important to understand each group and make proper accommodations to the design.</li>
                    <li>Although this project focuses on understanding the user journey, I already identified several affordance problems with the interface that I failed to notice when I personally interacted with the interface for the first time - just another example of how important it is to step into different users' shoes to improve a design.</li>
                    <li>For the future projects, trying to understand the users should always be the first step.</li>
                    <li>(Standing right next to the machine and staring at people when they were waiting for their coffee while pretending that I was not staring was fun and challenging XD)</li>
                </ul>
                <br/><br/><br/><br/>
         </div>
        </div>

        <div className='footer'> Juliana 2022<br/>Hand-coded with &#9829;</div>

</div>
  );
}

export default Persona;
