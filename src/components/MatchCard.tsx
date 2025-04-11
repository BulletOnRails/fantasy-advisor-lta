
import { Match } from "@/data/matches";
import { Team, Player } from "@/data/teams";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CalendarClock } from "lucide-react";
import PlayerMatchup from "./PlayerMatchup";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface MatchCardProps {
  match: Match;
  teamA?: Team;
  teamB?: Team;
}

const MatchCard = ({ match, teamA, teamB }: MatchCardProps) => {
  if (!teamA || !teamB) {
    return (
      <Card className="shadow-md">
        <CardHeader className="pb-2">
          <div className="text-center text-muted-foreground">
            Dados indisponíveis para este confronto
          </div>
        </CardHeader>
      </Card>
    );
  }

  // Posições para criar os confrontos de jogador por jogador
  const positions: ("TOP" | "JG" | "MID" | "BOT" | "SUP")[] = ["TOP", "JG", "MID", "BOT", "SUP"];

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <CalendarClock className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{match.date}</span>
          </div>
          <Badge>Próximo Jogo</Badge>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center w-2/5">
            <Avatar className="w-12 h-12 mb-2">
              <AvatarImage src={`/placeholder-${teamA.shortName}.png`} alt={teamA.name} />
              <AvatarFallback className={`${teamA.color} text-lg font-bold`}>
                {teamA.shortName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-sm">{teamA.name}</h3>
            <span className="text-xs text-muted-foreground">{teamA.wins}W - {teamA.losses}L</span>
          </div>
          
          <div className="text-xl font-bold">VS</div>
          
          <div className="flex flex-col items-center w-2/5">
            <Avatar className="w-12 h-12 mb-2">
              <AvatarImage src={`/placeholder-${teamB.shortName}.png`} alt={teamB.name} />
              <AvatarFallback className={`${teamB.color} text-lg font-bold`}>
                {teamB.shortName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-sm">{teamB.name}</h3>
            <span className="text-xs text-muted-foreground">{teamB.wins}W - {teamB.losses}L</span>
          </div>
        </div>
      </CardHeader>
      
      <Separator />
      
      <CardContent className="pt-4">
        <h4 className="text-sm font-semibold mb-3 text-center">Confrontos por Rota</h4>
        
        <div className="space-y-3">
          {positions.map(position => {
            const playerA = teamA.players.find(p => p.position === position);
            const playerB = teamB.players.find(p => p.position === position);
            
            return (
              <PlayerMatchup 
                key={position} 
                position={position} 
                playerA={playerA} 
                playerB={playerB} 
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default MatchCard;
