
import { Player } from "@/data/teams";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Crown, TrendingUp, TrendingDown, MinusCircle, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

  // Determine recommendation icon and text
  const getRecommendationData = (points?: number) => {
    if (!points) return { 
      icon: <MinusCircle className="h-4 w-4" />,
      text: "Sem dados suficientes",
      color: "text-gray-500"
    };
    if (points >= 25) return { 
      icon: <Crown className="h-4 w-4" />,
      text: "Escolha Excelente",
      color: "text-yellow-500"
    };
    if (points >= 15) return { 
      icon: <TrendingUp className="h-4 w-4" />,
      text: "Boa Escolha",
      color: "text-green-500"
    };
    if (points >= 10) return { 
      icon: <TrendingDown className="h-4 w-4" />,
      text: "Escolha Mediana",
      color: "text-amber-500"
    };
    return { 
      icon: <MinusCircle className="h-4 w-4" />,
      text: "Não Recomendado",
      color: "text-red-500"
    };
  };

  const { icon, text, color } = getRecommendationData(player.points);

  return (
    <Card 
      className={`
        ${isHighlighted ? 'border-2 border-primary shadow-md' : 'border-muted/60'} 
        transition-all hover:shadow-md
        ${isHighlighted ? 'bg-gradient-to-br from-blue-50/70 to-white dark:from-blue-900/10 dark:to-transparent' : ''}
      `}
    >
      <CardHeader className="pb-2 relative">
        {isHighlighted && (
          <div className="absolute -top-2 -right-2 rotate-12">
            <Badge variant="secondary" className="text-xs bg-yellow-400 hover:bg-yellow-500 border-none text-black px-2">
              <Crown className="h-3 w-3 mr-1" /> Top pick
            </Badge>
          </div>
        )}
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg flex items-center gap-2">
            <span className="text-sm font-normal px-2 py-1 bg-muted rounded">{player.position}</span>
            {player.name}
          </CardTitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <Badge variant={getBadgeVariant(player.points)} className="cursor-help">
                {player.points?.toFixed(1) || "N/A"}
              </Badge>
            </TooltipTrigger>
            <TooltipContent>
              <p>Pontuação média nas últimas 3 partidas</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <CardDescription className={`flex items-center gap-1 ${color}`}>
          {icon}
          <span>{player.recommendation || text}</span>
        </CardDescription>
      </CardHeader>
      {player.stats && (
        <CardContent>
          <div className="grid grid-cols-2 gap-2 text-sm">
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
          </div>
          <div className="mt-2 text-xs flex items-center gap-1 text-muted-foreground">
            <Info className="h-3 w-3" />
            <span>KDA: {((player.stats.kills + player.stats.assists) / Math.max(player.stats.deaths, 1)).toFixed(2)}</span>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default PlayerRecommendation;
