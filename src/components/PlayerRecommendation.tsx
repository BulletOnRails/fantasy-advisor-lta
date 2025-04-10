
import { Player } from "@/data/teams";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, TrendingUp, TrendingDown, MinusCircle } from "lucide-react";

interface PlayerRecommendationProps {
  player: Player;
  isHighlighted?: boolean;
}

const PlayerRecommendation = ({ player, isHighlighted = false }: PlayerRecommendationProps) => {
  // Determine badge color based on points
  const getBadgeVariant = (points?: number): "default" | "secondary" | "destructive" | "outline" => {
    if (!points) return "outline";
    if (points >= 25) return "secondary";
    if (points >= 15) return "default";
    if (points >= 10) return "secondary";
    return "destructive";
  };

  // Determine recommendation icon
  const getRecommendationIcon = (points?: number) => {
    if (!points) return <MinusCircle className="h-4 w-4" />;
    if (points >= 25) return <Crown className="h-4 w-4" />;
    if (points >= 15) return <TrendingUp className="h-4 w-4" />;
    if (points >= 10) return <TrendingDown className="h-4 w-4" />;
    return <MinusCircle className="h-4 w-4" />;
  };

  return (
    <Card className={`${isHighlighted ? 'border-2 border-primary' : ''} transition-all hover:shadow-md`}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="text-sm font-normal px-2 py-1 bg-muted rounded">{player.position}</span>
            {player.name}
          </CardTitle>
          <Badge variant={getBadgeVariant(player.points)}>
            {player.points?.toFixed(1) || "N/A"}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-1">
          {getRecommendationIcon(player.points)}
          <span>{player.recommendation || "Sem recomendação"}</span>
        </CardDescription>
      </CardHeader>
      {player.stats && (
        <CardContent className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Abates:</span>
            <span className="font-medium">{player.stats.kills}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Mortes:</span>
            <span className="font-medium">{player.stats.deaths}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Assistências:</span>
            <span className="font-medium">{player.stats.assists}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">CS:</span>
            <span className="font-medium">{player.stats.cs}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">% Dano:</span>
            <span className="font-medium">{player.stats.damageShare}%</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">% Abates:</span>
            <span className="font-medium">{player.stats.killParticipation}%</span>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default PlayerRecommendation;
