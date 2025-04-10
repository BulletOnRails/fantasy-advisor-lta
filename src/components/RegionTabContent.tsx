
import { Team } from "@/data/teams";
import TeamCard from "./TeamCard";
import TeamRanking from "./TeamRanking";
import PlayerRecommendation from "./PlayerRecommendation";
import ScoringSystem from "./ScoringSystem";
import { Separator } from "@/components/ui/separator";

interface RegionTabContentProps {
  teams: Team[];
  regionName: string;
}

const RegionTabContent = ({ teams, regionName }: RegionTabContentProps) => {
  // Find top performers by position
  const getTopPerformersByPosition = (position: string) => {
    const allPlayers = teams
      .flatMap(team => team.players)
      .filter(player => player.position === position);
    
    return [...allPlayers].sort((a, b) => 
      (b.points || 0) - (a.points || 0)
    ).slice(0, 3);
  };

  const topTOP = getTopPerformersByPosition("TOP");
  const topJG = getTopPerformersByPosition("JG");
  const topMID = getTopPerformersByPosition("MID");
  const topBOT = getTopPerformersByPosition("BOT");
  const topSUP = getTopPerformersByPosition("SUP");

  return (
    <div className="space-y-8 mt-4">
      <TeamRanking teams={teams} title={`Classificação ${regionName}`} />

      <div>
        <h2 className="text-2xl font-bold mb-4">Recomendações por Posição</h2>
        <div className="grid grid-cols-1 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-lta-blue text-white flex items-center justify-center mr-2">TOP</span>
              Topo
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topTOP.map((player, index) => (
                <PlayerRecommendation 
                  key={player.name} 
                  player={player} 
                  isHighlighted={index === 0} 
                />
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-lta-green text-white flex items-center justify-center mr-2">JG</span>
              Selva
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topJG.map((player, index) => (
                <PlayerRecommendation 
                  key={player.name} 
                  player={player} 
                  isHighlighted={index === 0} 
                />
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-lta-purple text-white flex items-center justify-center mr-2">MID</span>
              Meio
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topMID.map((player, index) => (
                <PlayerRecommendation 
                  key={player.name} 
                  player={player} 
                  isHighlighted={index === 0} 
                />
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-lta-red text-white flex items-center justify-center mr-2">BOT</span>
              Atirador
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topBOT.map((player, index) => (
                <PlayerRecommendation 
                  key={player.name} 
                  player={player} 
                  isHighlighted={index === 0} 
                />
              ))}
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <span className="inline-block w-8 h-8 rounded-full bg-lta-orange text-white flex items-center justify-center mr-2">SUP</span>
              Suporte
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {topSUP.map((player, index) => (
                <PlayerRecommendation 
                  key={player.name} 
                  player={player} 
                  isHighlighted={index === 0} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Escalações Atuais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teams.map((team) => (
            <TeamCard key={team.shortName} team={team} />
          ))}
        </div>
      </div>

      <ScoringSystem />
    </div>
  );
};

export default RegionTabContent;
