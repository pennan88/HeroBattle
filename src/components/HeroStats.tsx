interface iProps {
  statsName: string;
  statsValue: number;
}

export const HeroStats: React.FC<iProps> = ({ statsName, statsValue }) => {
  return (
    <div className="statsSeperateContainer">
      <p>{statsName}</p>
      <div className={`stats ${statsName}`}>
        <p>{statsValue}</p>
      </div>
    </div>
  );
};
