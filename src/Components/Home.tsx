import React from "react";
import "../commons/Assets/styles/scss/index.scss";
import Main from "./widgetCard";

import { useNavigate } from "react-router-dom";
interface UserCardProps {
  name: string;
  title: string;
  ranking: number;
  popularity: number;
  likes: number;
  followed: number;
  color: "blue" | "orange";
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  title,
  ranking,
  popularity,
  likes,
  followed,
  color,
}) => {
  const cardClass = `card card-${color}`;
  const rankingClass = `ranking-badge ranking-badge-${color}`;

  const navigate = useNavigate();
  const redirectToWidget = () => {
    navigate("/widget");
  };
  return (
    <div>
      <Main
        name="David Borg"
        title="Flying wings"
        ranking={1}
        popularity={1342}
        likes={4736}
        followed={136}
        color="blue"
        route="/sec-widget"
      />
      <Main
        name="Lucy"
        title="Flying wings"
        ranking={2}
        popularity={7342}
        likes={4736}
        followed={136}
        color="orange"
        route="/widget"
      />
    </div>
  );
};
export default UserCard;
