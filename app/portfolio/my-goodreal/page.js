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
                  src="/assets/img/projects/project-1.png"
                  alt="project-details-1"
                />
              </div>
              <div className="portfolio-details-text">
                <div className="short-info">
                  <div className="info-item">
                    <p className="subtitle">Type:</p>
                    <h4 className="card-title">SaaS product in real estate industry</h4>
                  </div>
                  <div className="info-item">
                    <p className="subtitle">Skill:</p>
                    <h4 className="card-title"> 
                      Scrum / Interview / User Journey
                    </h4>
                    <a href="#" className="website">
                      mygoodreal.com
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
                  <h4 className="card-title">Design Context</h4>
                  <p>
                    My GoodReal is a platform designed to enable real estate brokers to create and customize their own websites. By connecting with MLS® Listings, it allows brokers to showcase their properties directly on their site, and also includes CRM and other functionalities.

Many brokers lack experience in website design, set up domain, and server management. Their main goal is to showcase their personal brand and provide clients with real-time updates on available properties. As a UX designer, my objective is to help brokers quickly and efficiently onboard this software where to design and launch their websites, and achieve their business goals.
                  </p>
                  
                </div>
              </div>
              <div className="inner-images">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="image-item">
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="more-info-block">
                <h3 className="more-info-title">2B Product - Minimum engage time</h3>
                    <p>
                      This project involves a deep understanding of the real estate industry, the unique needs and limitations of brokers, and the technical capabilities of the My GoodReal platform. By providing a streamlined and user-friendly design, I aim to simplify the complex process of website creation and empower brokers to establish a strong online presence.

Through effective communication and collaboration, I worked closely with brokers to ensure that they can quickly onboard the product, and ensure the design aligns with their vision. Ultimately, my goal is to enable brokers to leverage technology to drive their business forward.
                    </p>
                <h3 className="more-info-title">Challenges</h3>
                <h5 className="more-info-subtitle">a Quick Start Tour section</h5>
                <ul className="list-unstyled">
                  <li>
                    <b>Challenge:</b> In preparation for the design iteration, we integrated My GoodReal with Zendesk, a leading help desk management solution. Through user feedback, we gained valuable insights into the challenges that many realtors were experiencing, particularly when it came to purchasing or setting up their domain.
                  </li>
                  <li>
                    <b>Solution:</b> To address this challenge, we recognized the need for a more streamlined and user-friendly onboarding process. Our team worked to break down the process into smaller, more manageable goals, providing users with clear and measurable milestones to work towards. This approach was designed to help users stay focused and motivated, while also making the overall process less daunting and overwhelming.
                  </li>
                </ul>
                                    <div className="image-item">
                      <img
                        src="assets/img/projects/project-details-3.png"
                        alt="project-details-3"
                        className="img-fluid w-100"
                      />
                    </div>

                <h5 className="more-info-subtitle">Browser Compatibility:</h5>
                <ul className="list-unstyled">
                  <li>
                    <b>Challenge:</b> Different browsers may interpret code
                    differently, leading to inconsistencies in the website's
                    appearance.
                  </li>
                  <li>
                    <b>Solution:</b> Test the website on multiple browsers and
                    use compatibility libraries or polyfills when necessary.
                  </li>
                </ul>
                <h5 className="more-info-subtitle">User Experience (UX):</h5>
                <ul className="list-unstyled">
                  <li>
                    <b>Challenge:</b> Creating a seamless and intuitive user
                    experience that keeps visitors engaged.
                  </li>
                  <li>
                    <b> Solution:</b>
                    Conduct user testing, design user-friendly interfaces, and
                    prioritize accessibility to ensure a positive user
                    experience
                  </li>
                </ul>
                <h5 className="more-info-subtitle">
                  Compliance and Accessibility:
                </h5>
                <ul className="list-unstyled">
                  <li>
                    <b>Challenge:</b> Creating a seamless and intuitive user
                    experience that keeps visitors engaged.
                  </li>
                  <li>
                    <b>Solution:</b> Conduct user testing, design user-friendly
                    interfaces, and prioritize accessibility to ensure a
                    positive user experience
                  </li>
                </ul>
                <h3 className="more-info-title">Results/Conclusion:</h3>
                <p>
                  The website design and development for FlexiFlow successfully
                  achieved its objectives, leading to increased user engagement,
                  improved conversion rates, and positive feedback from the
                  target audience. The combination of user-centric design,
                  modern visuals, and a seamless shopping experience resulted in
                  a more competitive and appealing online presence for the
                  company. Ongoing monitoring and potential iterative
                  improvements will be crucial to maintaining and enhancing.
                </p>
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
