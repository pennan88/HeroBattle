import { useNavigate } from "react-router-dom";
import RoutingPath from "../routes/RoutingPath";

export const Navigations = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p onClick={() => navigate(RoutingPath.homeView)}>Home</p>
    </div>
  );
};
