import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { BattleView } from "../views/battle/BattleView";
import { HeroView } from "../views/heroes/HeroView";
import { HomeView } from "../views/home/HomeView";
import RoutingPath from "./RoutingPath";

export const Routes = ({ children }: any) => {
  return (
    <BrowserRouter>
      {children}
      <Switch>
        <Route path={RoutingPath.homeView} element={<HomeView />} />
        <Route path={RoutingPath.heroesView} element={<HeroView />} />
        <Route path={RoutingPath.battleView} element={<BattleView />} />
      </Switch>
    </BrowserRouter>
  );
};
