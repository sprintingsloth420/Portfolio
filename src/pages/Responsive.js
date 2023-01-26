import React from 'react';
import './Project.css';
import { useEffect } from 'react';

function Responsive() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <div className="Project ">
        <div className='back_button'>
           <a href='/CS1300_Portfolio'><button> &lt;  Back to Projects</button><br/><br/></a> 
        </div>
        <div className='Project_intro'>
          <p style={{fontSize:'4rem',display:'inline'}}> HENG Thai Rotisserie  <br/><br/> </p>
          <p style={{color:'#4682B4',display:'inline'}}><b>Experimenting </b></p> ways to improve a local restaurant's webpage by identifying current problems and enhancing visual and logical organization.
            
        </div>

        <div className='Project_content'>
        <div className='Project_context'>
            <div className='section_title'>Context & Aim</div>
                 <p>In this project, I redesigned the home webpage of Heng Thai & Rotisserie, a popular (and personal favorite!) Thai restaurant on college hill. By evaluating the webpage against the following criteria of usability, learnability, and memorability as well as with <a className="responsive_url" href="https://wave.webaim.org/">WebAIM WAVE</a>, a web accessibility evaluation tool, I was able to identify existing problems with the webpage. </p>
                 <p>In response to these problems, I redesigned the webpage with lo-fi prototypes, high-fi prototypes, and a visual design style guide, and finally implemented the redesign into a responsive webpage with suitable layouts for the varying mobile, tablet, and desktop screen sizes.</p>
                <p>Through this project, I aim to focus on reorganizing the existing webpage to present information in a more visually and logically cohesive way. I believe that clarity in structure is the most important element for a page conveying a large amount of information for the users to easily navigate and hence improve <b>user experience</b>.</p>
            </div>

         <div className='Project_process'>
            <div className='section_title'>Process</div>

            <div className='section_subtitle'>STEP 1: Identifying usability problems</div>
                <p>Click <a className="responsive_url" href="https://www.hengpvd.com/home">HERE</a> to view the original website. </p>
                <p>This HOME page of the restaurant includes information on hours, how to order and make reservations, contact information, and images to showcase Thai streetfood.</p>
                <div className= 'responsive_half'>
                <div>
                    <b>Usability</b>
                    <ul class="sublist">
                        <li>The sequence of information is confusing - information on open hours is sandwiched by instructions to make a reservation or make an order</li>
                        <li>Open hours are center aligned, making it difficult to separate weekdays and hours</li>
                        <li>Information about open hours is conveyed in two ways. <br/> The top one says “11.30 pm – 3.00 pm and 4.30 pm – 9.30 pm”, whereas the bottom one (in the VIST US section) says “11.30 AM – 9.30 PM, …, We’re closed for a break from 3.00 – 4.30 PM everyday”. Users might spend some time and mental energy comparing these blocks of information</li>
                        <li>Inconsistency in information - no instruction on how to use "curbside service"</li>

                        <li>The purpose of the contact us form is unclear</li>
                    </ul>
                <b>Learnability</b>
                    <ul class="sublist">
                        <li> Poor organization of the top nav bar - menus are not grouped together, and the important contact information is hidden is "MORE"</li>
                        <li>No section title or sub-menus, difficult for users to learn about what information is included on this HOME page</li>
                        <li>The in-page navigation buttons on the right do work, but no indication of which section it links to</li>
                        <li>The label for the first button just says “Online Order” but does not specify what type of order (pick-up or delivery), so users have to click the button to check </li>
                    </ul>
                <b>Memorability</b>
                    <ul class="sublist">
                        <li>Repetition in information about open hours, both on the first page and in the VISIT US section at the bottom of the page, makes it difficult for users to remember which section to check for hours</li>
                    </ul>

                <b>Styling</b>
                <ul class="sublist">
                    <li>The grey block in the center does not align with the background image</li>
                    <li>Two buttons have different formats and do not align </li>
                    <li>Inconsistency in typography – three slogans with three different fonts</li>
                    <li>The footnote takes up a whole page</li>
                </ul>
                <b>Accessibility - WAVE results</b>
                <ul class="sublist">
                    <li>Contrast errors from the grey block and the white texts on top. <br/> - I do not think the contrast is too low, but I would consider using larger font sizes.</li>
                    <li>Contrast errors from the "DELIVERY" button with yellow background and blue texts. <br/> - I agree that the contrast is very low, epescially in grayscale.</li>
                    <li> Redudant links from the in-page navigation buttons on the right. <br/> - I think it is important to have some anchors on one page, but I do agree that these buttons should be labeled with the section on the page that they link to.</li>
                    <li> Good ARIA functionality. <br/> - I believe that this page was developed with an online template, and I agree that the accessibility functionality is good.</li>
                 </ul>
                </div>

                <div className='responsive_problem'>
                    <img src={process.env.PUBLIC_URL + "/" + "images/website1.jpeg"}></img>
                    <img src={process.env.PUBLIC_URL + "/" + "images/website2.jpeg"}></img>
                </div>
            </div>
            <br/>

            <div className='section_subtitle'>STEP 2: Prototyping (Low-Fi)</div>
               <p>I created wireframes using Balsamiq as the low fidelity prototypes for logical oragnization.</p>
               <b>Desktop version:</b><br/>
               <div className='responsive_wireframe'>
                    <img src={process.env.PUBLIC_URL + "/" + "images/lowfi1.jpeg"}></img>
                    <img src={process.env.PUBLIC_URL + "/" + "images/lowfi2.jpeg"}></img>
               </div>
               <br/>
               <b>Tablet version:</b><br/>
               <img className='responsive_img' src={process.env.PUBLIC_URL + "/" + "images/lowfi3.jpeg"}></img><br/>
               <b>Mobile version:</b><br/>
               <img className='responsive_img' src={process.env.PUBLIC_URL + "/" + "images/lowfi4.jpeg"}></img>
            <br/>   

    <div className='section_subtitle'>STEP 3: Creating visual style guide</div>
        <br/>
        <img className='responsive_img' src={process.env.PUBLIC_URL + "/" + "images/guide.jpeg"}></img>
        <br/>

    <div className='section_subtitle'>STEP 4: Prototyping (Hi-Fi)</div>
    <p>I created a mockup website using Figma as the high fidelity prototypes for visual oragnization.</p>
        <b>Desktop version:</b><br/>
        <img className='responsive_hifi' src={process.env.PUBLIC_URL + "/" + "images/highweb.jpeg"}></img><br/>
        <b>Tablet version:</b><br/>
        <img className='responsive_hifi' src={process.env.PUBLIC_URL + "/" + "images/hightablet.jpeg"}></img><br/>
        <b>Mobile version:</b><br/>
        <img className='responsive_hifi' src={process.env.PUBLIC_URL + "/" + "images/highphone.jpeg"}></img>
     </div>

         <div className='Project_deliverables'>
            <div className='section_title'>deliverables</div>
            <p> Check out my redesign: <a className="responsive_url" href="https://sprintingsloth420.github.io/CS1300_redesign/"> HOME | hengpvd</a>!</p>
            <iframe className='iframe' src={"https://sprintingsloth420.github.io/CS1300_redesign/"}></iframe>
            <br/>
        </div>

         <div className='Project_takeaways'>
            <div className='section_title'>Takeaways</div>
            <ul style={{lineHeight:'2.8rem'}}>
                    <li>I learned about the workflow of redesigning a simple website: identifying problems, experimenting with low-fi and high-fi prototypes, and then creating the webpage.</li>
                    <li>I gained familiarity with a variety of design tools: Balsamiq, Figma, and responsive HTML elements such as flexbox.</li>
                    <li>I discovered my expertise as a designer - I usually pay extra attention to the "flow" of a website, and I ask questions like "does it have a smooth overall logical flow" and "does this part of the content belong here". I hence focus on organizing information in a logical way, with visual elements to reinforce the structure.</li>
                    <li>(It is my first time hand-coding a complete website. The experience is invaluable, but the struggle with flexboxes [AHHH...] and just HTML in general is TOO real ;) )</li>
                </ul>
                <br/><br/><br/><br/>
         </div>
        </div>

        <div className='footer'> Juliana 2022<br/>Hand-coded with &#9829;</div>

    </div>
  );
}

export default Responsive;
