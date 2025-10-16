const Experience = () => {
  const experiancesItems = [
    {
      id: 1,
      title: "TechPos",
      subTitle: "Web Designer",
      icon: "/assets/img/icons/techpos.svg",
      date: "2024.07-present",
    },
    {
      id: 2,
      title: "HackHub",
      subTitle: "UI/UX Designer",
      icon: "/assets/img/icons/hackhub.svg",
      date: "2021.05-2023.08",
    },
    {
      id: 3,
      title: "My GoodReal",
      subTitle: "UI/UX Designer",
      icon: "/assets/img/icons/mygoodreal.svg",
      date: "2020.09-2021.03",
    },
    {
      id: 4,
      title: "LCBO",
      subTitle: "Product Designer",
      icon: "/assets/img/icons/lcbo.svg",
      date: "2020.05-2020.08",
    },
  ];
  return (
    <ul className="work-experiance-slider list-unstyled">
      {experiancesItems.map((item) => (
        <li key={item.id}>
          <div className="date">
            <p>{item.date}</p>
          </div>
          <div className="info">
            <div className="icon">
              <img src={item.icon} alt="adobe" />
            </div>
            <div className="text">
              <h4 className="title">{item.title}</h4>
              <h6 className="subtitle">{item.subTitle}</h6>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const WorkExperience = () => {
  return (
    <div className="card">
      <div className="card-body work-experiance-card">
        <h3 className="card-title">Work Experience</h3>
        <div className="work-experiance-main">
          <Experience />
          <Experience />
        </div>
      </div>
    </div>
  );
};
export default WorkExperience;
