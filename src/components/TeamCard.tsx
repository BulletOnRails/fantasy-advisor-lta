
import { Team } from "@/data/teams";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamCardProps {
  team: Team;
}

const TeamCard = ({ team }: TeamCardProps) => {
  return (
    <Card className={`shadow-lg border-t-4 ${team.color}`}>
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <span>{team.name}</span>
          <span className="text-sm font-normal">
            {team.wins}W - {team.losses}L
          </span>
        </CardTitle>
        <CardDescription>Pontuação total: {team.totalPoints}</CardDescription>
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
                  <span className="font-bold w-10">{player.position}</span>
                  <span>{player.name}</span>
                </div>
                <span className="font-semibold">{player.points?.toFixed(1)}</span>
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
