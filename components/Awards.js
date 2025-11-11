const Awards = () => {
  const awardItems = [
    {
      id: 1,
      icon: "/assets/img/icons/gecrown.svg",
      title: "gecrown door hardware",
      date: "2025",
      award: "WordPress",
      url: "https://gecrown.net", // Add the specific URL
    },
    {
      id: 2,
      icon: "/assets/img/icons/dptile.svg",
      title: "DP Tile and Stone",
      date: "2024",
      award: "React, Gatsby",
      url: "https://dptile.ca", // Add the specific URL
    },
    {
      id: 3,
      icon: "/assets/img/icons/mountaintop.svg",
      title: "Mountaintop Burger",
      date: "2024",
      award: "WordPress, PHP",
      url: "https://github.com/htpwebdesign/mountaintop-theme", // Add the specific URL
    },
    {
      id: 4,
      icon: "/assets/img/icons/hackhub.svg",
      title: "HackHub",
      date: "2023",
      award: "HTML/CSS",
      url: "https://hackhub.com", // Add the specific URL
    },
  ];

  return (
    <div className="awards-recognitions">
      <h2 className="main-common-title">Live Websites I Built</h2>
      <div className="awards-recognitions-main">
        <ul className="list-unstyled">
          {awardItems.map((item) => (
            <li key={item.id}>
              <a href={item.url} className="d-block w-100" target="_blank" rel="noopener noreferrer">
                <div className="awards-item">
                  <div className="award-name">
                    <div className="icon">
                      <img src={item.icon} alt="award" />
                    </div>
                    <div className="text">
                      <h4 className="title">{item.title}</h4>
                      <p className="year">{item.date}</p>
                    </div>
                  </div>
                  <div className="winner-tag">
                    <h4 className="title">{item.award}</h4>
                  </div>
                  <div className="project-btn">
                    <span>
                      View Website
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
                        />
                        <path
                          d="M4.66699 4.5835H9.91699V9.8335"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Awards;
