
import { Team } from "@/data/teams";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface TeamCardProps {
  team: Team;
}

const TeamCard = ({ team }: TeamCardProps) => {
  // Determinar estilo de acordo com a posição do time
  const getPositionStyle = (position?: number) => {
    if (!position) return "";
    if (position <= 3) return "border-t-yellow-500";
    if (position <= 6) return "border-t-blue-500";
    return "border-t-gray-400";
  };

  const getWinRateColor = (wins: number, losses: number) => {
    const total = wins + losses;
    if (total === 0) return "text-gray-500";
    
    const winRate = (wins / total) * 100;
    if (winRate >= 70) return "text-green-500";
    if (winRate >= 50) return "text-blue-500";
    if (winRate >= 40) return "text-amber-500";
    return "text-red-500";
  };

  const winRateColor = getWinRateColor(team.wins, team.losses);

  return (
    <Card className={`shadow-lg border-t-4 ${team.color} ${getPositionStyle(team.position)}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            {team.logo && (
              <img src={team.logo} alt={team.name} className="w-6 h-6" />
            )}
            <span>{team.name}</span>
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant="outline" className={`${winRateColor} cursor-help`}>
                {team.wins}W - {team.losses}L
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Taxa de vitória: {((team.wins / Math.max(team.wins + team.losses, 1)) * 100).toFixed(1)}%</p>
            </TooltipContent>
          </Tooltip>
        </CardTitle>
        <CardDescription className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>Pontuação total: {team.totalPoints?.toFixed(1) || "0"}</span>
          </div>
          {team.position && team.position <= 3 && (
            <div className="flex items-center gap-1 text-yellow-500">
              <Trophy className="h-3 w-3" />
              <span>{team.position}º lugar</span>
            </div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {team.players.length > 0 ? (
            team.players.map((player) => (
              <div
                key={player.name}
                className="flex justify-between items-center border-b pb-1 last:border-b-0"
              >
                <div className="flex items-center gap-2">
                  <span className={`font-bold text-xs py-1 px-1.5 rounded ${
                    player.position === "TOP" ? "bg-lta-blue text-white" :
                    player.position === "JG" ? "bg-lta-green text-white" :
                    player.position === "MID" ? "bg-lta-purple text-white" :
                    player.position === "BOT" ? "bg-lta-red text-white" :
                    "bg-lta-orange text-white"
                  }`}>{player.position}</span>
                  <span>{player.name}</span>
                </div>
                <span className={`font-semibold ${
                  (player.points || 0) >= 20 ? "text-green-500" :
                  (player.points || 0) >= 15 ? "text-blue-500" :
                  (player.points || 0) >= 10 ? "text-amber-500" :
                  "text-gray-500"
                }`}>{player.points?.toFixed(1) || "0"}</span>
              </div>
            ))
          ) : (
            <p className="text-muted-foreground italic">Dados indisponíveis</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
