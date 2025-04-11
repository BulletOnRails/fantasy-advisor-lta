
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

  // Formatar a data para um formato mais legível
  const formatDate = (dateStr: string) => {
    const [date, time] = dateStr.split(' - ');
    return (
      <div className="flex flex-col">
        <span className="font-medium">{date}</span>
        <span className="text-xs">{time}</span>
      </div>
    );
  };

  // Posições para criar os confrontos de jogador por jogador
  const positions: ("TOP" | "JG" | "MID" | "BOT" | "SUP")[] = ["TOP", "JG", "MID", "BOT", "SUP"];

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow border-t-4 border-t-primary/70">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 bg-muted/40 px-3 py-1.5 rounded-full">
            <CalendarClock className="h-4 w-4 text-primary" />
            {formatDate(match.date)}
          </div>
          <Badge variant="secondary" className="animate-pulse">Próximo Jogo</Badge>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center w-2/5">
            <Avatar className="w-16 h-16 mb-2 border-2 border-muted">
              <AvatarImage src={`/placeholder-${teamA.shortName}.png`} alt={teamA.name} />
              <AvatarFallback className={`${teamA.color} text-lg font-bold`}>
                {teamA.shortName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-lg">{teamA.name}</h3>
            <span className="text-sm text-muted-foreground">{teamA.wins}W - {teamA.losses}L</span>
          </div>
          
          <div className="text-2xl font-bold bg-muted px-4 py-2 rounded-full">VS</div>
          
          <div className="flex flex-col items-center w-2/5">
            <Avatar className="w-16 h-16 mb-2 border-2 border-muted">
              <AvatarImage src={`/placeholder-${teamB.shortName}.png`} alt={teamB.name} />
              <AvatarFallback className={`${teamB.color} text-lg font-bold`}>
                {teamB.shortName.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <h3 className="font-bold text-lg">{teamB.name}</h3>
            <span className="text-sm text-muted-foreground">{teamB.wins}W - {teamB.losses}L</span>
          </div>
        </div>
      </CardHeader>
      
      <Separator className="my-2" />
      
      <CardContent className="pt-4">
        <h4 className="text-sm font-semibold mb-4 text-center bg-muted py-1 rounded">Confrontos por Rota</h4>
        
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
