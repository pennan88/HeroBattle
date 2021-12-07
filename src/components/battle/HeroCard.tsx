import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import SuperHeroService from "../../shared/api/services/SuperHeroService";
import "../../styles/herocard.css";
import { HeroStats } from "./HeroStats";

export const HeroCard = () => {
  const [hero, setHero] = useState<AxiosResponse>() as any;
  const fetchHero = async () => {
    try {
      const { data } = await SuperHeroService.getCharacterbyName("Spider");
      console.log(data.results);
      setHero(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHero();
  }, []);

  return (
    <div className="heroCardWrapper">
      <div className="heroImageContainer">
        <img className="heroImage" src={hero?.[0]?.image?.url} alt="" />
      </div>
      <div className="backgroundFiller"></div>
      <div className="heroTopHalf">
        <p className="heroName">{hero?.[0]?.name}</p>
      </div>
      <div className="heroBottomHalf">
        <div className="heroDescription">
          <div className="descLeft">
            <span>Gender: {hero?.[0]?.appearance?.gender}</span>
            <span>Height: {hero?.[0]?.appearance?.height?.[1]}</span>
            <span>Race: {hero?.[0]?.appearance?.race}</span>
          </div>
          <div className="descRight">test</div>
        </div>
        <div className="statsContainer">
          <HeroStats
            statsName={"int"}
            statsValue={hero?.[0].powerstats.intelligence}
          />
          <HeroStats
            statsName={"str"}
            statsValue={hero?.[0]?.powerstats?.strength}
          />
          <HeroStats
            statsName={"spd"}
            statsValue={hero?.[0]?.powerstats?.speed}
          />
          <HeroStats
            statsName={"dur"}
            statsValue={hero?.[0]?.powerstats?.durability}
          />
          <HeroStats
            statsName={"pwr"}
            statsValue={hero?.[0]?.powerstats?.power}
          />
          <HeroStats
            statsName={"cmb"}
            statsValue={hero?.[0]?.powerstats?.combat}
          />
        </div>
      </div>
    </div>
  );
};
