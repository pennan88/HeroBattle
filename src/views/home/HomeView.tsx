import { HeroCard } from "../../components/hero/HeroCard";
import "../../styles/home.css";
export const HomeView = () => {
  const randomNumberGen = () => {
    return Math.floor(Math.random() * 731);
  };
  return (
    <div className="homeWrapper">
      <div className="homeHeader">
        <h1>EPIC BATTLE</h1>
      </div>
      <HeroCard id={randomNumberGen()} variant={"md"} />
    </div>
  );
};
