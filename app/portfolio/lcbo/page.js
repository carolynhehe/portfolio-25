import WorkTogether from "@/components/WorkTogether";
import BentoFolioLayout from "@/layout/BentoFolioLayout";
const page = () => {
  return (
    <BentoFolioLayout>
      {" "}
      <div className="col-xl-8">
        <div className="card content-box-card">
          <div className="card-body portfolio-card">
            <div className="portfolio-details-area">
              <div className="main-image">
                <img
                  src="/assets/img/projects/lcbo-1.jpg"
                  alt="lcbo-1"
                />
              </div>
              <div className="portfolio-details-text">
                <div className="short-info">
                  <div className="info-item">
                    <p className="subtitle">Type:</p>
                    <h4 className="card-title">Mobile App resulted from my capstone project at LCBO|next</h4>
                  </div>
                  <div className="info-item">
                    <p className="subtitle">Skills:</p>
                    <h4 className="card-title">
                      UX Research / UI Design / Interaction Design / Project Management
                    </h4>
                    <a href="#" className="website">
                      www.lcbo.com
                      <svg
                        className="arrow-up"
                        width={14}
                        height={15}
                        viewBox="0 0 14 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.91634 4.5835L4.08301 10.4168"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M4.66699 4.5835H9.91699V9.8335"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="overview">
                  <h4 className="card-title">Project Brief</h4>
                  <p>
   The COVID/POST COVID environment has brought tectonic changes in the way we socialize. 
   Given social distancing and new conduits of interaction we now face the question of how to share and enjoy beverages in a post-COVID world.


                  </p>
                  <p>
                    <b>Vision:</b> Share product knowledge and support responsible enjoyment of products from a creative marketing approach
drive customer engagement using experiential, personalizaed methods
emphasize and design for the spirit of social interaction and inclusiveness that is currently being hindered in the COVID environment We also sought to produce a product that aligns with LCBO’s corporate vision:
                  </p>
                  <p>
                    <b>“To deliver remarkable experiences as the trusted destination for the world’s wines, beers and spirits.”</b> 
                  </p>
                </div>
              </div>
              <div className="inner-images">
                <div className="row g-3">
                  <div className="col-md-6">
                    {/* <div className="image-item">
                      <img
                        src="assets/img/projects/project-details-2.png"
                        alt="project-details-2"
                        className="img-fluid w-100"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image-item">
                      <img
                        src="assets/img/projects/project-details-3.png"
                        alt="project-details-3"
                        className="img-fluid w-100"
                      />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="more-info-block">
                                <h3 className="more-info-title">RESEARCH</h3>
                                            <p>
Our project has taken place in a groundbreaking time, and because of this, thorough research was even more essential. We completed a lot of secondary research covering beverage alcohol market analysis, pandemics & isolation, existing food & drink applications and more.
                </p>
                <h4>
                  Secondary Research
                </h4>
                
                  <ul>
  <li>Increased sales Sales of all alcohols have increased during this time (no surprise). Most notably there were increased sales in large format alcohol, “multi-packs, bag-in-box wine, and bottles over 750 mL”.</li>
  <li>Virtual bars and happy hours Platforms such as zoom, houseparty, and google hangouts are hosting virtual happy hours after work. For example the Newyork state brewers association launched a virtual happy hour that will take place on different brewery’s Facebook pages everyday, focusing on a particular topic or game.</li>
  <li>Leverage technology Young consumers need a platform or product experience to help them create instagrammable moments. Encouraging creativity at home. Luckily, we were also able to connect with Henry Cowie of Bartesian - a local startup that produces a one of a kind “Keurig for Cocktails”. He had a wealth of market knowledge from years of working in the beverage alcohol industry. And he gave us insights about upcoming trends with Millennial and Gen Z consumers, including beverage consumption preferences and behaviours.
</li>
</ul>
                
                <h4>Bartender's Input</h4>
                
                  <ul>
                    <li>Consumers had a lot of word of mouth spreading the brand.</li>
                    <li>Ready to drink mixes and cocktails were increasing in sales just before the lockdown.</li>
                    <li>Vast majority of cocktailes made at home are deconstructed cocktails. (Easy for consumers to understand the character of each ingredient and how it influences the cocktail)</li>
                    <li>Cocktails are not viable for party drinking - not going to get used or you’re going to be busy. We then deployed a survey that helped us fill in gaps in our knowledge about consumers attitudes and behaviours before COVID, and how things have changed since the pandemic began. This data confirmed our assumptions about drinking behaviours, and highlighted a lot of pain points around social interactions during the pandemic.</li>
                  </ul>
                <div className="image-item">
                      <img
                        src="/assets/img/projects/lcbo-research.gif"
                        alt="lcbo-research"
                        className="img-fluid w-100"
                      />
                    </div>
              </div>
              <div className="more-info-block">
                <h4>Survey Insights</h4>
                <p>
We received 81 responses from outreach done in our personal circles, personal posts on social media, and survey swap groups on Facebook.
                </p>
                <ul className="list-unstyled">
                  <li><b>Climate </b>Potentially unstable income and higher levels of stress.</li>
                  <li><b>Target Users</b> Ontarians age 19 - 35 who consume alcoholic beverages and have digital solutions permeating daily lives & routines.</li>
                  <li><b>Motivations </b>More drinks for dinner and stocking up. Less party drinks, more relaxing and casual drinks.</li>
                  <li><b>Behaviours  </b>Purchasing more online, and less often overall.</li>
                </ul>
                
                <h3 className="more-info-title">PROPOSALS & USER FLOW</h3>
                                <h4>Product Proposals</h4>
                <p>
                At the end of our initial ideation stage, we found the common goals of the users are
                </p>
                <ul>
                  <li>it’s more fun sharing a drink with friends or family</li>
                  <li>wide selection of products .. while the common frustrations are</li>
                  <li>it can be overwhelming to decide on a a product</li>
                  <li>virtual socializing can’t replace the real thing</li>
                </ul>
                                              <div className="image-item">
                      <img
                        src="/assets/img/projects/lcbo-2.png"
                        alt="lcbo-research"
                        className="img-fluid w-100"
                      />
                    </div>
                    <ol>
                      <li><b> Redesign & Revamp </b>
                      <ul>
                        <li>create a more comprehensive and efficient browsing experience</li>
                        <li>mobile platform that feels more intuitive, personalized an engaging</li>
                      </ul>
                      </li>
                       <li><b> Match, Mix & Meet </b>
                      <ul>
                        <li>help facilitate desired social interactions</li>
                        <li>increase user-engagement around product knowledge and empower users</li>
                      </ul>
                      </li>
                                         <li><b> Playful Products & Practice </b>
                      <ul>
                        <li>address lack of positive stimulation and desire to safely try new things</li>
                        <li>gamify product information and application (i.e. following recipes and practicing mixology skills)</li>
                      </ul>
                      </li>
                    </ol>
                    <h4>Value Proposition</h4>
                    <ul>
                      <li>Become the resident bartender for your social circle.</li>
                      <li>Effortlessly track, discover, and share your beverages with friends in a fun way.</li>
                      <li>Always know what you have in your home-bar collection and how to make the most of it.</li>
                    </ul>
                    <h4>User Flow</h4>
                <p>
                  We had three ideas that played to the needs and pain points. And then we jumped into creating wireframes and a flow that included all of these functions.
                </p>
                                <div className="image-item">
                      <img
                        src="/assets/img/projects/lcbo-3.png"
                        alt="lcbo-3"
                        className="img-fluid w-100"
                      />
                    </div>
                  <h4>Key Features</h4>
                                      <ol>
                      <li><b> Better Product Inforamtion & Access </b>
                      <br></br>
                      include more relevant and helpful information on product pages
                      </li>
                      <li><b> Beverage Discovery & Mixing </b>
                      <br></br>
                      explore mixology and recipes
                      </li>
                      <li><b> Easy Party Planning & Sharing of Beverages </b>
                      <br></br>
                     socialize over beverages digitally with social interactions in an app, and helpful planning tolls for meeting in person
                      </li>
                    </ol>
                       </div>
                       <br></br>
              <div className="more-info-block">
                    <h3 className="more-info-title">DESIGN CHALLENGES</h3>
                    <p>I approach design by proposing design questions at different points along the user flow. In this case, I’ll give three examples and how I iterated the designs.</p>
                      <h4>Design question 1: How to create a homepage of great user onboarding?</h4>
                      <p><b>Version 1</b>  This first design style was intended to immerse users in the idea of having their very own ‘home bar’ with displayed on a shelf accompanied by some snazzy furniture.</p>
                      <div className="image-item">
                      <img
                        src="/assets/img/projects/lcbo-v1.gif"
                        alt="lcbo-v1"
                        className="img-fluid w-100"
                      />
                    </div>
                    <p>One of the users said he liked these warm and unique visuals, reminding him of classic pub. However, in the testing, some users can not recognize the buttons to click and it took more time for them to clearly know the information structure, which made them feel lose control.</p>
              <p><b>Version 2</b> So, the design team decided to pivot to a more conventional design. Not only to meet the better usability for users, but also to cut down on the workload of the team’s graphic design as well as iterative process.</p>
                             <div className="image-item">
                      <img
                        src="/assets/img/projects/lcbo-v2.png"
                        alt="lcbo-v2"
                        className="img-fluid w-100"
                      />
                    </div>
              <p>Pivot was the right choice. The stakeholders liked this flat and neat design. In terms of content, they wanted a more creative homepage which introduces and emphasizes our distinctive feature, instead of an intended selling page with the featured products.</p>
             <p><b>Version 3</b> This version included more navigation such as the auxiliary navigation bar and featured collection in terms of occasions for users to quickly onboarding.</p>
                   <div className="image-item">
                      <img
                        src="/assets/img/projects/lcbo-v3.png"
                        alt="lcbo-v3"
                        className="img-fluid w-100"
                      />
                    </div>
              <p>Both users and stakeholder loved this version. One of the stakeholder said it was easier to find and explore our unique feature. From the test of 6 participants, we got mean of usability score 7.3/10, and mean of visual appeal rating 8.8/10.</p>
              <h4>Design question 2: How to improve effectiveness of browsing?</h4>
             <p><b>Version 1</b> Scroll vertically to see the four catergories of alcohol beverages. Scroll horizontally to see all the beverages of each catergory. Click “see all” to get a list view. List filtering by tag.</p>
                           <div className="image-item">
                      <img
                        src="/assets/img/projects/lcbo-d2v1.png"
                        alt="lcbo-d2v1"
                        className="img-fluid w-100"
                      />
                    </div>
                      <p>Most of the testing users could not tell good or bad of this version. The design team found scrolling vertically and horizontally not consistent. The information hierarchy is good but the page looks just nothing special or unique.</p>
 <p><b>Version 2</b>  Include a browse button on the bottom navigation bar. Categorize the alcoholic beverage into four image cards. Add a banner and show the category inside.</p>
                            <div className="image-item">
                      <img
                        src="/assets/img/projects/lcbo-d2v2.png"
                        alt="lcbo-d2v2"
                        className="img-fluid w-100"
                      />
                    </div>
                      <p>Both the design team and users liked this version. But the team found a single line of tags can not fulfill so many categories and subcategories of alcoholic beverages. One of the teammate was reminding that we need to include food pairing at the search bar.</p>
  <p><b>Version 3</b>  Scroll left and right to see the drink categories and food pairing categories. Include filter icons to visualize the subcategories. Detailed filters overlay.</p>
          <div className="image-item">
                      <img
                        src="/assets/img/projects/lcbo-d2v3.png"
                        alt="lcbo-d2v3"
                        className="img-fluid w-100"
                      />
                    </div>
<p> In the usability test, the average time for browsing task reduced. No confusions or usability issues were brought up. Both users and stakeholders were satisfied with this version.</p>
                            <h4>Design question 3: How to motivate users to mix and share?</h4>
              <p><b>Version 1</b>Click the button “Mixology” to directly get into the mixing process. The users can select the glass, mix material and decoration to DIY their cocktail.</p>
   <div className="image-item">
                      <img
                        src="/assets/img/projects/lcbo-d3v1.png"
                        alt="lcbo-d3v1"
                        className="img-fluid w-100"
                      />
                    </div>
              <p>This version is simple and clean. But most user found it confused without word description. One of the users said he preferred some visuals or words to tell what to do next and what mixology is for.</p>
              <p><b>Version 2</b>Add a mixology homepage “My Bar"to show the recipes and cocktails feed. The “My Bar” replaces the “Mixology” in the bottom navigation bar. Add an eye-catching “Mix Now!” button at the conspicuous location to start mixology. Give users two choices to make their own cocktail recipes or watch the animation showing the cocktail made by other users.</p>
                         <div className="image-item">
                      <img
                        src="/assets/img/projects/lcbo-d3v2.png"
                        alt="lcbo-d3v2"
                        className="img-fluid w-100"
                      />
                    </div>
              <p>This version included both gamification and education. Most users said this version was much better than the previous one. The design team still found it can be improved in terms of intuitiveness. However, due to the time constraints, we decided to come to a design freeze.</p>
                <h3 className="more-info-title">SOLUTION DEMO</h3>
                <ul>
  <li>
    A user browses new beverages with helpful information and reviews. <br />
    <a href="https://www.youtube.com/shorts/xkmFKQsEtrU" target="_blank">
      https://www.youtube.com/shorts/xkmFKQsEtrU
    </a>
  </li>
  <li>
    A user practices mixing cocktails and makes quality drinks that she can share with friends. <br />
    <a href="https://www.youtube.com/shorts/cHiXgQPCnOE" target="_blank">
      https://www.youtube.com/shorts/cHiXgQPCnOE
    </a>
  </li>
  <li>
    A user plans a social event with alcohol and yummy food. <br />
    <a href="https://www.youtube.com/shorts/-ZrQwbdEp6s" target="_blank">
      https://www.youtube.com/shorts/-ZrQwbdEp6s
    </a>
  </li>
</ul>

                <h3 className="more-info-title">REFLECTIONS</h3>
                  <h4>Next Steps</h4>
                      <ul>
                        <li>Improve and integrate the mixology feature.</li>
                        <li>Design for multi-platform, like iPad, etc.</li>
                        <li>Look for deeper digital lifestyle integration in Post-Covid world.</li>
                      </ul>
                  <h4>Take-aways</h4>
     <ul>
                        <li><b>Stand up for my own view.</b> I learned how to understand and respect teammates and their opinions, but not being shy about saying that I will be firm in standing up for my own views as well. And appreciate the need for cooperation and compromise in the interests of the overall project.</li>
                        <li><b>Keep testing, learning and iterating.</b> I iterated the project even after the capstone was finished. By collecting feedback and learning new skills, I found the product would never be “perfect”.</li>
                        <li><b>Balance between ideal and reality.</b>  Designed in a way that serves our learning goals and portfolio desires but also pursued valuable outcomes for users and all stakeholders.</li>
                      </ul>
              </div>
              <div className="prev-and-next-btn">
                <button className="btn btn-prev">Previous</button>
                <button className="btn btn-next">Next</button>
              </div>
            </div>
            <WorkTogether />
          </div>
        </div>
      </div>
    </BentoFolioLayout>
  );
};
export default page;
