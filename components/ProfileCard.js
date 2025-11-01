"use client";
import ClipboardJS from "clipboard";
import { useEffect, useState } from "react";

const ProfileCard = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    new ClipboardJS(".btn-copy");
  }, []);

  const toggleBtn = () => {
    setToggle(true);
    const timerId = setTimeout(() => {
      setToggle(false);
    }, 700);
    return () => {
      clearTimeout(timerId);
    };
  };

  const socialItems = [
    { id: 1, url: "https://www.facebook.com/profile.php?id=100041670961919", name: "Facebook", icon: "fab fa-facebook" },
    { id: 2, url: "https://www.linkedin.com/in/carolynhh/", name: "LinkedIn", icon: "fab fa-linkedin" },
    { id: 3, url: "https://github.com/carolynhehe", name: "GitHub", icon: "fab fa-github" },
  ];

  return (
    <div className="card profile-card">
      <div className="card-body">
        <div className="image text-center">
          <img src="/assets/img/images/hhprofile.jpg" alt="profile" width="366"/>
        </div>
        <div className="text">
          <h3 className="card-title">Carolyn Ho 👋</h3>
          <p>
            A <span> Web Designer</span> 🖥️ {" "} having <span>4 years</span> of
            Experiences. Focused on executing intuitive designs with precision to detail.
          </p>
          <div className="common-button-groups">
            <button
              className={`btn btn-copy ${toggle ? "active" : ""}`}
              data-clipboard-text="carolynho0422@gmail.com"
              onClick={() => toggleBtn()}
            >
              <svg
                className="icon"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H10C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18V10Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Copy Email
            </button>
          </div>
          <div className="social-media-icon">
            <ul className="list-unstyled">
              {socialItems.map((item) => (
                <li key={item.id}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <i className={item.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
