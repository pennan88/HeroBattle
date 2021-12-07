interface iProps {
  statsName: string;
  statsValue: number;
  variant?: string;
}

export const HeroStats: React.FC<iProps> = ({
  statsName,
  statsValue,
  variant,
}) => {
  return (
    <div className="statsSeperateContainer">
      <p>{statsName}</p>
      <div className={`stats ${statsName} ${statsName}-${variant} `}>
        <div className="test" />
        <p>{statsValue}</p>
      </div>
    </div>
  );
};
