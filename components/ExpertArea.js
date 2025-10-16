const ExpertArea = () => {
  const expertItems = [
    { id: 1, icon: "assets/img/icons/figma.svg", name: "Figma" },
    { id: 2, icon: "assets/img/icons/react.svg", name: "React" },
    { id: 3, icon: "assets/img/icons/wordpress.svg", name: "WordPress" },
    { id: 4, icon: "assets/img/icons/webflow.svg", name: "Webflow" },
    { id: 5, icon: "assets/img/icons/framer.svg", name: "Framer" },
    { id: 6, icon: "assets/img/icons/notion.svg", name: "Notion" },
  ];
  return (
    <div className="card expertise-card">
      <div className="card-body">
        <h3 className="card-title">My Expert Area</h3>
        <div className="expertise-main mt-24">
          <div className="row g-3">
            {expertItems.map((item) => (
              <div className="col-xl-4 col-md-4 col-sm-6 col-6" key={item.id}>
                <div className="expertise-item">
                  <div className="image text-center">
                    <img src={item.icon} alt={item.name} />
                  </div>
                  <div className="text">
                    <h4 className="title">{item.name}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpertArea;
