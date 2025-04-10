
import { Team } from "@/data/teams";
import TeamCard from "./TeamCard";
import TeamRanking from "./TeamRanking";

interface RegionTabContentProps {
  teams: Team[];
  regionName: string;
}

const RegionTabContent = ({ teams, regionName }: RegionTabContentProps) => {
  return (
    <div className="space-y-8 mt-4">
      <TeamRanking teams={teams} title={`Classificação ${regionName}`} />

      <div>
        <h2 className="text-2xl font-bold mb-4">Escalações Recomendadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teams.map((team) => (
            <TeamCard key={team.shortName} team={team} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegionTabContent;
