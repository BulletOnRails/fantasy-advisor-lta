
import { Team } from "@/data/teams";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TeamRankingProps {
  teams: Team[];
  title: string;
}

const TeamRanking = ({ teams, title }: TeamRankingProps) => {
  // Ordenar times pela posição
  const sortedTeams = [...teams].sort((a, b) => 
    (a.position || 99) - (b.position || 99)
  );

  return (
    <div className="rounded-lg border shadow-sm">
      <div className="bg-muted p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm text-muted-foreground">
          Classificação atual dos times
        </p>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">#</TableHead>
            <TableHead>Time</TableHead>
            <TableHead className="text-center">V-D</TableHead>
            <TableHead className="text-right">Pontos</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedTeams.map((team) => (
            <TableRow key={team.shortName}>
              <TableCell className="font-medium">{team.position}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${team.color}`}></div>
                  <span>{team.name}</span>
                </div>
              </TableCell>
              <TableCell className="text-center">
                {team.wins}-{team.losses}
              </TableCell>
              <TableCell className="text-right">{team.totalPoints?.toFixed(1) || "-"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeamRanking;
