import { useEffect, useState } from "react";
import SuperHeroService from "../shared/api/services/SuperHeroService";
import "../styles/herocard.css";
import removeImageLater from "../shared/images/1169.jpg";
import { HeroStats } from "./HeroStats";
import axios, { AxiosResponse } from "axios";

export const HeroCard = () => {
  const [hero, setHero] = useState<AxiosResponse>();
  const fetchHero = async () => {
    try {
      const { data } = await SuperHeroService.getCharacter("Spider-man");
      console.log(data.results);
      setHero(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHero();
    console.log(hero);
  }, []);
  return (
    <div className="heroCardWrapper">
      <div className="heroImageContainer">
        <img className="heroImage" src={removeImageLater} alt="" />
      </div>
      <div className="heroTopHalf">
        <p className="heroName">Spiderman</p>
      </div>
      <div className="heroBottomHalf">
        <div className="heroDescription">
          <p>description</p>
        </div>
        <div className="statsContainer">
          <HeroStats statsName={"int"} statsValue={88} />
          <HeroStats statsName={"str"} statsValue={100} />
          <HeroStats statsName={"spd"} statsValue={79} />
          <HeroStats statsName={"dur"} statsValue={100} />
          <HeroStats statsName={"pwr"} statsValue={100} />
          <HeroStats statsName={"cmb"} statsValue={100} />
        </div>
      </div>
    </div>
  );
};
