import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { HomeView } from "../views/home/HomeView";
import RoutingPath from "./RoutingPath";

export const Routes = ({ children }: any) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path={RoutingPath.homeView} element={<HomeView />} />
      </Switch>
    </BrowserRouter>
  );
};
