import React from 'react';
import './Project.css';
import { useEffect } from 'react';

function Iterative() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="Project">
        <div className='back_button'>
           <a href='/CS1300_Portfolio'><button> &lt;  Back to Projects</button><br/><br/></a> 
        </div>
        <div className='Project_intro'>
          <p style={{fontSize:'4rem',display:'inline'}}> Circular  <br/><br/> </p>
          <p style={{color:'#4682B4',display:'inline'}}><b>Analyzing </b></p>  peer and user feedback on the webpage redesign prototype for a tech start-up to match design goals with actual user experiences.
        </div>

        <div className='Project_content'>
        <div className='Project_context'>
            <div className='section_title'>Context & Aim</div>
            <p>We’ve designed a web application for <a href="https://www.ycombinator.com/companies/circular" className='responsive_url'>Circular</a>, a startup that aims to democratize technology by allowing users to experience new technology before fully committing — users initially rent a product, and if they enjoy it, they can choose to buy the product. </p>
            <p>We’ve targeted two types of users: ones who are new to the website, and ones who are current users. The website is designed to be comprehensive enough to lead a potential user to explore all of Circular’s offerings and find a product that they would love to experience. Once a steady base of users has been built up, the website begins to serve a second purpose: to allow current users to manage their current products, continue finding new products to try, and to configure their desires in the most effective way.</p>
            <p>This is a group project and I am mainly responsible for organizing and analyzing peer and user feedback. Through this project, I aim to gain experience in the iterative design process, with a focus on collecting feedback from design peers and interpreting results from user testing experiments, and eventually actualizing the feedback to changes in the design product to improve <b>user experience</b>.</p>
            </div>

         <div className='Project_process'>
            <div className='section_title'>Process</div>

            <div className='section_subtitle'>STEP 1: Ideating through sketches</div>
                <p>We created 4 different possible designs for circular below, trying to capture a broad range of design alternatives for circular.</p>
                <p>An attached pdf with our sketches are shown below:</p>

              <iframe className='iframe' src={process.env.PUBLIC_URL + "/" + "images/iterative_sketches.pdf"}></iframe>
            <br/><br/>

            <div className='section_subtitle'>STEP 2: Prototyping (Low-Fi)</div>
            <p>We then developed a series of wireframes integrating the best design ideas from our sketches.</p>
            <p>We wanted to emphasize that the key idea of Circular is that it is a marketplace with unconventional means of renting the products. Our sketches were made of pages needed to create a functioning marketplace, and from there we created a flow that covered two use cases, first time users and returning customers.</p>
            <p>Here are some of the ideas that guided our wireframing process:</p>
            <ul>
                <li>We decided on having the users first go through a landing page because Circular’s company mission serves as a guide to how the marketplace works, as well as setting them apart from other marketplaces.</li>
                <li>A logged out state and logged in state exist for certain pages, to both prevent new users from being overwhelmed with information irrelevant in deciding to join the marketplace, and making the flow of information more efficient to returning users. E.g the explore page showcasing rental information in the logged in state, but is missing in the logged out state.</li>
                <li>We wanted to make sure users are aware of the actions they can take when renting a rental, so information regarding it was included in multiple areas, such as the Landing page in “HERE’S HOW IT WORKS” and the Product page in “What happens then?”.</li>
            </ul>
            <p>An attached pdf with our wireframes are shown below:</p>
                <iframe className='iframe' src={process.env.PUBLIC_URL + "/" + "images/iterative_wireframe.pdf"}></iframe>
            <br/><br/>

    <div className='section_subtitle'>STEP 3: Prototyping (Hi-Fi)</div>
    <br/>
    <iframe className='iframe' src={"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FOCjo8lVwty9xodJxQsX54j%2FCircular%253A-Initial-High-Fidelity-Mockups%3Fnode-id%3D1%253A99%26t%3D6hUOivWMhTGj7ZBT-1"}></iframe><br/>
    <a className='figma_link' href="https://www.figma.com/proto/OCjo8lVwty9xodJxQsX54j/Circular%3A-Initial-High-Fidelity-Mockups?node-id=1%3A99&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A99&fbclid=IwAR2tHjtlL-tSsfecCNyjQ0dKjvnCk_WXrvwwNm1wfTG7zdTSAhrbjnf-g80" target="_blank">Accessing the protoype</a>
    <br/>
    <b>Design Considerations</b>
    <p>We then proceeded to convert our wireframes into high-fidelity prototypes. During this stage, we continued to refine our design with a few key principles in mind:</p>
    <ul>
        <li>We decided on an accent color of a bright pinkish red and roundness across our elements to convey a sense of newness, energy, and friendliness against more conventional, wholesale tech retailers, as circular is meant to widen the accessibility of technology through unconventional rentals.</li>
        <li>We used our accent color sparingly with mostly-white backgrounds to encourage emphasis on the most important elements of each page, in addition to applying hierarchy to text.</li>
    </ul>
    <br/>

    <div className='section_subtitle'>STEP 4: Analyzing peer feedback</div>
        <div id="critiques">
        <p>After reviewing our feedback, we broke down the issues our peers brought up before designing new solutions based on their suggestions. All of the solutions we describe were then implemented in an updated high-fidelity prototype, featured further down.</p>
        <div class="critique-section">
        <div class="critique-title">
                  <h4 class="subtitle">General</h4>
                  This section features problems and solutions that span across several pages
                </div>
        <div class="critique-content">

                  <div class="critique-problems">
                    <b>Problems Identified</b>
                    <div class="critique-problem">
                      <p>
                        Information/instructions on how renting works should be more accessible throughout the whole website instead of being on the landing page only
                      </p>
                    </div>
                    <div class="critique-problem">
                      <p>
                        Some peers have trouble navigating to the desired page using breadcrumbs; some wish that there is a back button that goes back to the previous page that they were on
                      </p>
                    </div>

                  </div>

                  <div class="critique-solutions">
                    <b>Solutions</b>
                    <div class="critique-solution">
                      <p>
                        Add renting information on the product page
                      </p>
                    </div>

                    <div class="critique-solution">
                      <p>
                        Gray out the breadcrumb that corresponds to the current page that the user is on
                      </p>
                    </div>

                    <div class="critique-solution">
                      <p>
                        (We agreed that a back button is not necessary because users generally use the browser’s back button)
                      </p>
                    </div>

                  </div>


                </div>
              </div>

              <div class="critique-section">

                <div class="critique-title">
                  <h4 class="subtitle">Landing Page</h4>
                </div>

                <div class="critique-content">

                  <div class="critique-problems">
                    <b>Problems Identified</b>
                    <div class="critique-problem">
                      <p>
                        This page includes important information such as a brief introduction of the start-up and an explanation of the rental process, but there is no way of going back to this page once users click the “CHOOSE NOW” button because the logo on the navbar currently links to explore page
                      </p>
                    </div>

                    <div class="critique-problem">
                      <p>
                        Information on how renting works is very important and should have a higher priority than the product display section
                      </p>
                    </div>

                    <div class="critique-problem">
                      <p>
                        The wording of the “Choose Now” button is confusing - peers expect it to lead to a page where they can browse and choose from available products, but it just leads to the exploration page instead
                      </p>
                    </div>
                  </div>

                  <div class="critique-solutions">
                    <b>Solutions</b>
                    <div class="critique-solution">
                      <p>
                        Reorganize navbar: link the logo to the landing page, add an “Explore” tab next to the “Rentals” tab
                      </p>
                    </div>

                    <div class="critique-solution">
                      <p>
                        Put the “How It Works” section above the “Popular products” section
                      </p>
                    </div>

                    <div class="critique-solution">
                      <p>
                        Change the button from “Choose Now” to “Explore Now”
                      </p>
                    </div>
                  </div>


                </div>

                


              </div>

              <div class="critique-section">

                <div class="critique-title">
                  <h4 class="subtitle">Explore Page</h4>
                </div>

                <div class="critique-content">

                  <div class="critique-problems">
                    <b>Problems Identified</b>
                    <div class="critique-problem">
                      <p>
                        The layout is very different when logged in and when logged out, confusing returning users before they log in
                      </p>
                    </div>

                  </div>

                  <div class="critique-solutions">
                    <b>Solutions</b>
                    <div class="critique-solution">
                      <p>
                        Add a section telling users to log in to see current rentals with a “Log In” action button, indicating how returning users can view rentals if they log in
                      </p>
                    </div>

                  </div>


                </div>
              </div>

              <div class="critique-section">

                <div class="critique-title">
                  <h4 class="subtitle">Categories Page</h4>
                </div>

                <div class="critique-content">

                  <div class="critique-problems">
                    <b>Problems Identified</b>

                    <div class="critique-problem">
                      <p>
                        The category icons are unnecessarily big such that the page conveys little information yet requires scrolling
                      </p>
                    </div>

                    <div class="critique-problem">
                      <p>
                        Lacks hierarchy - the three featured categories are not emphasized enough
                      </p>
                    </div>

                    <div class="critique-problem">
                      <p>
                        Categories are arbitrarily sorted
                      </p>
                    </div>

                  </div>

                  <div class="critique-solutions">
                    <b>Solutions</b>
                    <div class="critique-solution">
                      <p>
                        Shrink the icons and fit more icons in one row
                      </p>
                    </div>

                    <div class="critique-solution">
                      <p>
                        Invert the color of the three curated categories to emphasize them</p>
                    </div>

                    <div class="critique-solution">
                      <p>
                        Sort the categories by popularity </p>
                    </div>

                  </div>


                </div>
              </div>

              <div class="critique-section">

                <div class="critique-title">
                  <h4 class="subtitle">Product Page</h4>
                </div>

                <div class="critique-content">

                  <div class="critique-problems">
                    <b>Problems Identified</b>
                    <div class="critique-problem">
                      <p>
                        Information on how renting works is too short, more explanation is needed
                      </p>
                    </div>

                  </div>

                  <div class="critique-solutions">
                    <b>Solutions</b>
                    <div class="critique-solution">
                      <p>
                        Add a section explaining the rental process; include a link next to where users select the rental period that scrolls to this section
                      </p>
                    </div>

                  </div>


                </div>
              </div>

              <div class="critique-section">

                <div class="critique-title">
                  <h4 class="subtitle">My Rentals Page (feedback from guest critic)</h4>
                </div>

                <div class="critique-content">

                  <div class="critique-problems">
                    <b>Problems Identified</b>
                    <div class="critique-problem">
                      <p>
                        Users should be able to know immediately what they can do and what options they have about the current rentals, especially the option to end the rental, so they do not feel anxious about paying money for so many products
                      </p>
                    </div>

                  </div>

                  <div class="critique-solutions">
                    <b>Solutions</b>
                    <div class="critique-solution">
                      <p>
                        Change layout from two products per row to one product per row to include more information
                      </p>
                    </div>

                    <div class="critique-solution">
                      <p>
                        Add three action buttons for each rental
                      </p>
                    </div>

                  </div>


                </div>
              </div>

              <div class="critique-section">

                <div class="critique-title">
                  <h4 class="subtitle">Rental Details Page (feedback from guest critic)</h4>
                </div>

                <div class="critique-content">

                  <div class="critique-problems">
                    <b>Problems Identified</b>
                    <div class="critique-problem">
                      <p>
                        The layout looks too similar to the shopping product page and users might get confused about whether it is a product that they are about to rent or a product that they are currently renting
                      </p>
                    </div>

                    <div class="critique-problem">
                      <p>
                        More information, such as the cumulative amount paid, the last payment date, etc. should be available
                      </p>
                    </div>

                    <div class="critique-problem">
                      <p>
                        The three options (extend, buy, end) should be emphasized and placed next to relevant information such as corresponding dates and prices 
                      </p>
                    </div>

                  </div>

                  <div class="critique-solutions">
                    <b>Solutions</b>
                    <div class="critique-solution">
                      <p>
                        Redesign the layout to differentiate from the shopping product page (smaller photo, less product information, more information on next steps)
                      </p>
                    </div>

                    <div class="critique-solution">
                      <p>
                        Include information: shipping, payment method, address, upcoming payments, etc.
                      </p>
                    </div>

                    <div class="critique-solution">
                      <p>
                        Use three cards corresponding to three actions, each with information and an action button
                      </p>
                    </div>

                  </div>
                  </div>
                  </div>
                </div>

                <br/><br/>

                <div className='section_subtitle'>STEP 5: Updating Hi-Fi prototype</div>
                <p>
                After our critique feedback, we then implemented all the above solutions towards a revision of our initial mockup.
              </p>
                <iframe className='iframe' src={"https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FK7SHNKZf5nZClK20VV4FFr%2FCircular%253A-Updated-High-Fidelity-Mockups%3Fnode-id%3D1%253A98%26t%3DqSttu9A9EuBSZqen-1"}></iframe><br/>
                <a className='figma_link' href="https://www.figma.com/proto/K7SHNKZf5nZClK20VV4FFr/Circular%3A-Updated-High-Fidelity-Mockups?node-id=1%3A98&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A98&fbclid=IwAR0_rRgceDHtxL_gZPN3l1jpFmt0Uz7SB9XVXeVftDZ4612h5drFGQn9pN8" target="_blank">Accessing the protoype</a>
                <br/> <br/>

                <div className='section_subtitle'>STEP 6: Analyzing user testing results</div>
                <p><b>Methodology</b></p>
                <p>For user testing, we first identified the two main functionalities of the interface that we would want users to explore:</p>
                <ol>
                    <li>To start new rentals</li>
                    <li>To manage current rentals</li>
                </ol>
                <p>These resulted in the following introduction prompt for users testing our mockup:</p>
                <p><b>"This is an interactive mockup website made on prototyping software. The website allows users to try out tech products before either buying or returning them. Imagine you're looking to buy and try out some new electronics."</b></p>
                <p>We then set up 4 sub-tasks that guide the users through the user flow:</p>
                <ol>
                    <li>Check out available categories</li>
                    <li>Select a category, browse the products, and select a specific product</li>
                    <li>Read about how renting works</li>
                    <li>Buy a product that they are currently renting</li>
                </ol>
                <p>After each sub-task, we also asked our users the following:</p>
                <ol>
                    <li>To describe whether they felt they successfully completed the subtask</li>
                    <li>To rate the difficulty of the subtask from 1 to 5 (1 = Very Difficult, 5 = Very Easy)</li>
                </ol>
                <p><b>Task Breakdown</b></p>
                <p>For each of the 4 sub-tasks, you can find the task description, our expectation on how the user would complete the task, and a summary of what each user actually did and their responses to the post-task questions.</p>
                <p>Furthermore, we have marked, with a number (e.g. "(1)"), when a specific user's experience relates with a potential change we came up with after looking over our data, covered in the next section.</p>
                
                <div className='subtasks'>
                <div class="subtask">

                    <div class="subtask-title">
                    <h4 class="subtitle">Subtask 1</h4>
                    </div>


                    <div class="subtask-description">
                    <p>
                        <b>Prompt: </b>
                        Imagine you want to find out what types of products the website offers. Now use this website to find this information. Stop when you feel like you have seen a complete list of what products are available.
                    </p>
                    </div>

                    <div class="subtask-expected">
                    <p>
                        <b>Expected Taskflow: </b>
                        Click the “Explore now” button on the landing page to go to the explore page; see the selected categories and click the “View all categories” below.
                    </p>
                    </div>

                    <div class="subtask-results">

                    <div class="subtask-result subtask-result-a">
                        <b>User A - Completed</b>
                        <p>First action was clicking the search bar, then used breadcrumbs to go to the correct categories page
                    
                        (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                        </p>
                    </div>

                    <div class="subtask-result subtask-result-b">
                        <b>User B - Completed</b>
                        <p>Navigated to the correct categories page but did not recognize it as the correct page, then went back to the explore page
                    
                        (Reported they were sure that they completed the task successfully, and rated it 5/5.)
                        </p>
                        
                    </div>

                    <div class="subtask-result subtask-result-c">
                        <b>User C - <i>Incomplete</i></b>
                        <p>Thought the categories on the explore page were a complete list, did not see the “View all categories” link (1)

                        (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                        </p>
                    </div>

                    </div>

                    </div>

                    <div class="subtask">

                    <div class="subtask-title">
                    <h4 class="subtitle">Subtask 2</h4>
                    </div>


                    <div class="subtask-description">
                    <p>
                        <b>Prompt: </b>
                        Imagine that you are looking to try out a new tablet. Try to browse the tablet section and then rent a tablet using the website. Go as far as you can with the prototype before moving on to the next task.
                    </p>
                    </div>

                    <div class="subtask-expected">
                    <p>
                        <b>Expected Taskflow: </b>
                        Click the tablet icon on the categories page to go to the browse page, then click the image or the title of a product to go to the product page.
                    </p>
                    </div>

                    <div class="subtask-results">

                    <div class="subtask-result subtask-result-a">
                        <b>User A - <i>Incomplete</i></b>
                        <p>Clicked the rental button on the browse page but did not check product specifics (2)
                        (Reported they were sure that they completed the task successfully, and rated it 5/5.)
                        </p>
                    </div>

                    <div class="subtask-result subtask-result-b">
                        <b>User B - <i>Incomplete</i></b>
                        <p>Clicked the rental button on the browse page but did not check product specifics (2)

                        (Reported they were sure that they completed the task successfully, and rated it 5/5.)
                        </p>
                    </div>

                    <div class="subtask-result subtask-result-c">
                        <b>User C - Completed</b>
                        <p>Had some trouble finding the tablet category but completed successfully, only realized that this was a charged rental service instead of free trials until seeing the “rent” button (3)
                    
                        (Reported they were NOT sure that they completed the task successfully, and rated it 3/5.)
                        </p>
                    </div>

                    </div>

                    </div>

                    <div class="subtask">

                    <div class="subtask-title">
                    <h4 class="subtitle">Subtask 3</h4>
                    </div>


                    <div class="subtask-description">
                    <p>
                        <b>Prompt: </b>
                        Imagine you want to rent this tablet but you are confused about how the renting process works. Try to find more information about what you will need to do after trying out a product. Stop when you think you have found the corresponding section.
                    </p>
                    </div>

                    <div class="subtask-expected">
                    <p>
                        <b>Expected Taskflow: </b>
                        At the product page, click “How does renting work?” or scroll down to the section.
                    </p>
                    </div>

                    <div class="subtask-results">

                    <div class="subtask-result subtask-result-a">
                        <b>User A - Completed</b>
                        <p>Looked for information on the browse page at first before going to the correct product page (3)
                    
                        (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                        </p>
                        
                    </div>

                    <div class="subtask-result subtask-result-b">
                        <b>User B - <i>Incomplete</i></b>
                        <p>Looked for a separate “about” or “terms & conditions” page and ended with the “How it works” section on the landing page (3)

                        (Reported they were NOT sure that they completed the task successfully, and rated it 5/5.)
                        </p>
                    </div>

                    <div class="subtask-result subtask-result-c">
                        <b>User C - Completed</b>
                        <p>Already on the product page and found the correct section, but asked for a more detailed explanation

                        (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                        </p>
                    </div>

                    </div>

                    </div>

                    <div class="subtask">

                    <div class="subtask-title">
                    <h4 class="subtitle">Subtask 4</h4>
                    </div>


                    <div class="subtask-description">
                    <p>
                        <b>Prompt: </b>
                        Imagine you rented a pair of Sennheiser headphones to try out from this website a while ago. Now use this website to see how much it would cost to buy the headphones now.
                    </p>
                    </div>

                    <div class="subtask-expected">
                    <p>
                        <b>Expected Taskflow: </b>
                        Click the “Rentals” tab on the navbar to go to the manage rentals page then the “view rental” button, or “Your rentals” section on the explore page, to go to the rental details pages, find the corresponding section.
                    </p>
                    </div>

                    <div class="subtask-results">

                    <div class="subtask-result subtask-result-a">
                        <b>User A - Completed</b>
                        <p>Had some confusion understanding the task but completed successfully

                        (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                        </p>
                    </div>

                    <div class="subtask-result subtask-result-b">
                        <b>User B - Completed</b>
                        <p>First clicked the “Your rentals” under the account drop-down menu, which was not implemented

                        (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                        </p>
                    </div>

                    <div class="subtask-result subtask-result-c">
                        <b>User C - Completed</b>
                        <p>Asked for a more detailed explanation of the price (4)
                        (Reported they were sure that they completed the task successfully, and rated it 4/5.)
                        </p>
                    </div>

                    </div>
                    </div>
                    </div>
                    <br/>
                    
                    <p><b>Overall analysis</b></p>
                    <p>Overall, the three users were able to complete the tasks successfully and through the expected task flows. Most of their confusion came either from some incomplete functionalities (e.g. dummy buttons) of the interface as a prototype, or from how the task descriptions were worded. At the same time, some of their confusion does reflect certain problems with our interface, and we have come up with a list of potential changes in response to these problems as well as the users’ oral feedback.</p>          
                    <br/>
                    
                    <div className='section_subtitle'>STEP 7: Looking forward</div>
                    <p>Based on our results, we came up with a list of proposed changes to address the issues we found during user testing. We have marked, in the previous section, how specific results from our user testing link to our proposed changes.</p>
                    <ol>
                  <li>
                    Change the wording of “view all categories” to “view more categories” and increase visibility with the scale of view button on the explore page
                  </li>
                  <li>
                    Make the whole card for a product clickable instead of only the image and the title
                  </li>
                  <li>
                    Add more information on how renting works throughout the website
                    <ul>
                      <li>
                        Change the wording on the landing page from “try” to “rent”
                      </li>
                      <li>
                        Include a question mark icon on the browse page explaining the renting process
                      </li>
                      <li>
                        Include a separate “about” page, with a button displayed on the top nav bar
                      </li>
                    </ul>
                  </li>
                  <li>
                    Provide infographic/texts on buy price breakdown and how the buy price changes based on months rented (e.g. price if buy next month, how this month’s rent is calculated)
                  </li>
                  <li>
                    (General) Add more intended functionality to our prototype
                    <ul>
                      <li>
                        Make the “Your Rentals” button in account dropdown menu link to the manage rentals page
                      </li>
                      <li>
                        Make “Rent”, “Buy”, “Extend”, and “End” buttons lead to new functional pages linked to those actions
                      </li>
                    </ul>
                  </li>

                </ol>
              </div>


     

         <div className='Project_deliverables'>
            <div className='section_title'>deliverables</div>
            <div className='section_subtitle'>User testing results</div>
            <br/>
            <div class="gifs">

                <div class="gif">
                  <img src={process.env.PUBLIC_URL + "/" + "images/GifA.gif"}></img><br/>
                  Preview of User A: &nbsp; &nbsp;
                  <a href={process.env.PUBLIC_URL + "/" + "images/UserTestingA.mp4"} target="_blank" download>Click here to download User A's experience</a>
                </div>
                <br/>

                <div class="gif">
                  <img src={process.env.PUBLIC_URL + "/" + "images/GifB.gif"}></img><br/>
                  Preview of User B: &nbsp; &nbsp;
                  <a href={process.env.PUBLIC_URL + "/" + "images/UserTestingB.mp4"}  target="_blank" download>Click here to download User B's experience</a>
               
                </div>
                <br/>

                <div class="gif">
                  <img src={process.env.PUBLIC_URL + "/" + "images/GifC.gif"}></img><br/>
                    Preview of User C: &nbsp; &nbsp;
                  <a href={process.env.PUBLIC_URL + "/" + "images/UserTestingC.mp4"}  target="_blank" download>Click here to download User C's experience</a>
                </div>
                <br/>

                </div>
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

        <div className='footer'> Juliana & Shaun 2022<br/>Hand-coded with &#9829;</div>

    </div>
  );
}

export default Iterative;
