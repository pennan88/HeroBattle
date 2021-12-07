import { useNavigate } from "react-router-dom";
import RoutingPath from "../routes/RoutingPath";
import "../styles/navigation.css";
export const Navigations = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="innerHeader">
        <div className="brand">
          <h2 onClick={() => navigate(RoutingPath.homeView)}>HeroBattle</h2>
        </div>
        <div className="navList">
          <p
            className="navItem"
            onClick={() => navigate(RoutingPath.heroesView)}
          >
            Heroes
          </p>
          <p
            className="navItem"
            onClick={() => navigate(RoutingPath.battleView)}
          >
            Battle
          </p>
        </div>
      </div>
    </div>
  );
};
