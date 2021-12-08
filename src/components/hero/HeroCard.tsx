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
  const [powerLevel, setPowerLevel] = useState() as any;
  const fetchHero = async () => {
    try {
      const { data } = await SuperHeroService.getCharacterbyId(id);
      console.log(data);
      setHero(data);
      setPowerLevel(data.powerstats);
    } catch (error) {
      console.log(error);
    }
  };

  const powerlevel = (
    STR: string,
    INT: string,
    SPD: string,
    DUR: string,
    PWR: string,
    CMB: string
  ) => {
    const int = parseInt(INT);
    const str = parseInt(STR);
    const spd = parseInt(SPD);
    const dur = parseInt(DUR);
    const pwr = parseInt(PWR);
    const cmb = parseInt(CMB);
    const result =
      Math.pow(int, 1.5) +
      Math.pow(str * 0.5, 2) +
      Math.pow(spd * 0.5, 2) +
      Math.pow(dur, 1.6) +
      Math.pow(pwr + 3 * 6, 2) +
      Math.pow(cmb, 1.8);
    const final = Math.floor(result);
    return final;
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
        <div className="powerLevel">
          <p>powerlevel</p>
          <h4>
            {powerlevel(
              powerLevel?.strength,
              powerLevel?.intelligence,
              powerLevel?.speed,
              powerLevel?.durability,
              powerLevel?.power,
              powerLevel?.combat
            )}
          </h4>
        </div>
        <div className="heroName">
          <p>Hero name</p>
          <h4>{hero?.name}</h4>
        </div>
        <div className="heroAlias">
          <p>Alias</p>
          <h4>{hero?.biography?.aliases[0]}</h4>
        </div>
      </div>
      <div className="heroBottomHalf">
        <div className="heroDescription">
          <div className="descLeft">
            <span>
              Gender: <p>{hero?.appearance?.gender}</p>
            </span>
            <span>
              Height:{" "}
              <p>
                {hero?.appearance?.height?.[1] === "0 cm"
                  ? "Unknown height"
                  : hero?.appearance?.height?.[1]}
              </p>
            </span>
            <span>
              Race:{" "}
              <p>
                {hero?.appearance?.race === "null"
                  ? "Unknown height"
                  : hero?.appearance?.race}
              </p>
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
            statsValue={
              hero?.powerstats?.intelligence === "null"
                ? "0"
                : hero?.powerstats?.intelligence
            }
          />
          <HeroStats
            statsName={"str"}
            variant={"md"}
            statsValue={
              hero?.powerstats?.strength === "null"
                ? "0"
                : hero?.powerstats?.strength
            }
          />
          <HeroStats
            statsName={"spd"}
            variant={"md"}
            statsValue={
              hero?.powerstats?.speed === "null" ? "0" : hero?.powerstats?.speed
            }
          />
          <HeroStats
            variant={"md"}
            statsName={"dur"}
            statsValue={
              hero?.powerstats?.durability === "null"
                ? "0"
                : hero?.powerstats?.durability
            }
          />
          <HeroStats
            statsName={"pwr"}
            variant={"md"}
            statsValue={
              hero?.powerstats?.power === "null" ? "0" : hero?.powerstats?.power
            }
          />
          <HeroStats
            statsName={"cmb"}
            variant={"md"}
            statsValue={
              hero?.powerstats?.combat === "null"
                ? "0"
                : hero?.powerstats?.combat
            }
          />
        </div>
      </div>
    </div>
  );
};
