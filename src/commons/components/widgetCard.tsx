import React from "react";
import "../Assets/styles/scss/index.scss";

import { useNavigate } from "react-router-dom";
interface UserCardProps {
  name: string;
  title: string;
  ranking: number;
  popularity: number;
  likes: number;
  followed: number;
  color: "blue" | "orange";
  route: string; // Add 'route' prop to your interface
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  title,
  ranking,
  popularity,
  likes,
  followed,
  color,
  route, // Use this prop for navigation
}) => {
  const cardClass = `card card-${color}`;
  const rankingClass = `ranking-badge ranking-badge-${color}`;

  const navigate = useNavigate();
  const redirectToWidget = () => {
    navigate(route);
  };
  return (
    <div
      className={cardClass}
      onClick={redirectToWidget}
      style={{ cursor: "pointer" }}
    >
      <div className="card__header">
        <h2>{name}</h2>

        {/* <PollWidget questions={questionData} widgetId="widget1" /> */}

        <div className={rankingClass}></div>
        <div className="ranking">#{ranking}</div>
      </div>
      <div className="card__body">
        <div className="stats">
          <div className="value">{popularity}</div>
          <div className="label">Popularity</div>
        </div>
        <div className="stats">
          <div className="value">{likes}</div>
          <div className="label">Likes</div>
        </div>
        <div className="stats">
          <div className="value">{followed}</div>
          <div className="label">Followed</div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
