import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import SuperHeroService from "../../shared/api/services/SuperHeroService";
import "../../styles/herocard.css";
import { HeroStats } from "./HeroStats";

interface iProps {
  id: number;
  variant?: string;
}

export const HeroCard: React.FC<iProps> = ({ id, variant }) => {
  const [hero, setHero] = useState<AxiosResponse>() as any;
  const fetchHero = async () => {
    try {
      const { data } = await SuperHeroService.getCharacterbyId(id);
      console.log(data);
      setHero(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHero();
  }, []);

  return (
    <div className={`heroCardWrapper ${variant}`}>
      <div className="heroImageContainer">
        <img className="heroImage" src={hero?.image?.url} alt="" />
      </div>
      <div className="backgroundFiller"></div>
      <div className="heroTopHalf">
        <p className="heroName">{hero?.name}</p>
      </div>
      <div className="heroBottomHalf">
        <div className="heroDescription">
          <div className="descLeft">
            <span>
              Gender: <p>{hero?.appearance?.gender}</p>
            </span>
            <span>
              Height: <p>{hero?.appearance?.height?.[1]}</p>
            </span>
            <span>
              Race: <p>{hero?.appearance?.race}</p>
            </span>
            <span>
              Publisher: <p>{hero?.biography?.publisher}</p>
            </span>
          </div>
        </div>
        <div className="statsContainer">
          <HeroStats
            statsName={"int"}
            variant={"md"}
            statsValue={hero?.powerstats?.intelligence}
          />
          <HeroStats
            statsName={"str"}
            variant={"md"}
            statsValue={hero?.powerstats?.strength}
          />
          <HeroStats
            statsName={"spd"}
            variant={"md"}
            statsValue={hero?.powerstats?.speed}
          />
          <HeroStats
            variant={"md"}
            statsName={"dur"}
            statsValue={hero?.powerstats?.durability}
          />
          <HeroStats
            statsName={"pwr"}
            variant={"md"}
            statsValue={hero?.powerstats?.power}
          />
          <HeroStats
            statsName={"cmb"}
            variant={"md"}
            statsValue={hero?.powerstats?.combat}
          />
        </div>
      </div>
    </div>
  );
};
