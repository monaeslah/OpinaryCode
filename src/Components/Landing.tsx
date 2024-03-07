import React, { useEffect, useState } from "react";
import "../commons/Assets/styles/scss/index.scss";
import Main from "../commons/components/widgetCard";

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
  const [seconds, setSeconds] = useState<number>(0);
  const [showTime, setShowTime] = useState<boolean>(false);

  useEffect(() => {
    const startTime = Date.now();

    const intervalId = window.setInterval(() => {
      setSeconds(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const handleClick = () => {
    setShowTime(true);
  };
  return (
    <div>
      <h3>click the card</h3>
      <button onClick={handleClick}>Show Time Elapsed</button>
      {showTime && <p>Time elapsed since page load: {seconds} seconds</p>}
      <Main
        name="questions 1"
        title="Flying wings"
        ranking={1}
        popularity={1342}
        likes={4736}
        followed={136}
        color="blue"
        route="/widget"
      />
      <Main
        name="questions 2"
        title="Flying wings"
        ranking={2}
        popularity={7342}
        likes={4736}
        followed={136}
        color="orange"
        route="/sec-widget"
      />
    </div>
  );
};
export default UserCard;
function setElapsedTime(arg0: string) {
  throw new Error("Function not implemented.");
}
