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
                  src="/assets/img/projects/dptile-project-cover.png"
                  alt="project-dptile-cover"
                />
              </div>
              <div className="portfolio-details-text">
                <div className="short-info">
                  <div className="info-item">
                    <p className="subtitle">Client For:</p>
                    <h4 className="card-title">DP Tile & Stone</h4>
                  </div>
                  <div className="info-item">
                    <p className="subtitle">Services:</p>
                    <h4 className="card-title">
                      Web Design and Development
                    </h4>
                    <a href="https://dptile.ca/" className="website">
                      dptile.ca
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
                  <h4 className="card-title">Overview</h4>
                  <p>
                    DP Tile is a local tile company based in Vancouver, specializing in high-quality tiles for residential and commercial projects. The company required a modern, visually appealing website that could showcase their tile collections and recent projects while allowing easy content management by their internal team.

The website was designed and developed using Gatsby and Contentful. Gatsby provided a fast and SEO-friendly static site framework, while Contentful served as a flexible headless CMS, enabling the client to easily update new products, tile collections, and featured projects without developer involvement.
                  </p>
                  {/* <p>
                    <b>Research:</b> Before starting the design, it's essential
                    to understand the target audience, their needs, and the
                    goals of the website.
                  </p>
                  <p>
                    <b>Information Architecture:</b> Organize and structure the
                    content to ensure a logical flow for users.
                  </p>
                  <p>
                    {" "}
                    <b>Wireframing and Prototyping:</b> Create skeletal outlines
                    and interactive prototypes to visualize the layout and
                    functionality.
                  </p> */}
                </div>
              </div>
              {/* <div className="inner-images">
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
              </div> */}
              <div className="more-info-block">
                <h3 className="more-info-title">Challenges</h3>
                <h5 className="more-info-subtitle">1. Product Hierarchy and User Navigation</h5>
                <ul className="list-unstyled">
                  <li>
                    <b>Challenge:</b> DP Tile offers a wide range of tile series, each containing multiple sizes, finishes, and color variations. The initial design made it difficult for users—especially interior designers—to quickly understand the structure and locate the exact product they needed.
                  </li>
                  <li>
                    <b>Solution:</b> Through two iterations of discussion and prototyping with the project manager, I refined the product hierarchy and navigation structure. The final layout emphasized a clear multi-level categorization, enabling users to filter and browse by collection, material, size, and color. This improved both usability and discoverability of products.
                  </li>
                </ul>
                <h5 className="more-info-subtitle">Instagram Feed API Maintenance</h5>
                <ul className="list-unstyled">
                  <li>
                    <b>Challenge:</b> During development, the homepage’s Instagram feed component encountered issues due to an expired access token. The original short-term API required manual refresh every two months, leading to inconsistent content display.
                  </li>
                  <li>
                    <b>Solution:</b> I researched and implemented a long-term Instagram API token solution, securely stored on the backend to prevent exposure on the client side. This eliminated downtime and ensured continuous synchronization between the website and DP Tile’s social media updates.
                  </li>
                </ul>
                {/* <h5 className="more-info-subtitle">User Experience (UX):</h5>
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
                </ul> */}
                <h3 className="more-info-title">Conclusion:</h3>
                <p>
              The new DP Tile website successfully delivered a fast, elegant, and scalable digital platform for the client. With a clean design, organized product hierarchy, and seamless integration with Contentful, the internal team can now manage updates independently. The combination of optimized performance, consistent Instagram integration, and user-focused design greatly enhanced the brand’s online presence and usability for design professionals.
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
