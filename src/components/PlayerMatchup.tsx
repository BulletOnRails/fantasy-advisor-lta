
import { Player } from "@/data/teams";
import { Badge } from "@/components/ui/badge";
import { ArrowUpToLine, Swords, Target, Waves, ShieldAlert } from "lucide-react";
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger 
} from "@/components/ui/tooltip";

interface PlayerMatchupProps {
  position: string;
  playerA?: Player;
  playerB?: Player;
}

const PlayerMatchup = ({ position, playerA, playerB }: PlayerMatchupProps) => {
  // Função para determinar qual jogador está em vantagem
  const getAdvantage = (): "A" | "B" | "EVEN" => {
    if (!playerA?.points || !playerB?.points) return "EVEN";
    
    const difference = playerA.points - playerB.points;
    if (difference > 5) return "A";
    if (difference < -5) return "B";
    return "EVEN";
  };

  // Determina a cor de fundo para o indicador de vantagem
  const getAdvantageColor = () => {
    const advantage = getAdvantage();
    if (advantage === "A") return "bg-green-500";
    if (advantage === "B") return "bg-red-500";
    return "bg-gray-500";
  };

  // Determina o texto para a dica de vantagem
  const getAdvantageText = () => {
    const advantage = getAdvantage();
    if (advantage === "A") return `Vantagem para ${playerA?.name || "Time A"}`;
    if (advantage === "B") return `Vantagem para ${playerB?.name || "Time B"}`;
    return "Confronto equilibrado";
  };

  // Retorna o ícone baseado na posição
  const getLaneIcon = () => {
    switch (position) {
      case "TOP": return <ArrowUpToLine className="h-5 w-5" />;
      case "JG": return <Swords className="h-5 w-5" />;
      case "MID": return <Target className="h-5 w-5" />;
      case "BOT": return <Waves className="h-5 w-5" />;
      case "SUP": return <ShieldAlert className="h-5 w-5" />;
      default: return null;
    }
  };

  // Classes para o jogador em vantagem
  const getPlayerClassA = () => {
    return getAdvantage() === "A" ? "font-bold text-green-600 dark:text-green-400" : "";
  };

  const getPlayerClassB = () => {
    return getAdvantage() === "B" ? "font-bold text-green-600 dark:text-green-400" : "";
  };

  return (
    <div className="flex items-center hover:bg-muted/30 p-2 rounded-md transition-colors">
      <div className="w-1/3 text-right">
        <div className="flex justify-end items-center gap-2">
          <div className={`text-sm font-medium ${getPlayerClassA()}`}>{playerA?.name || "N/A"}</div>
          <Badge variant={getAdvantage() === "A" ? "default" : "outline"}>{playerA?.points?.toFixed(1) || "-"}</Badge>
        </div>
      </div>
      
      <div className="w-1/3 flex justify-center items-center px-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1 cursor-help">
              <div className="bg-muted/60 p-1.5 rounded-full">
                {getLaneIcon()}
              </div>
              
              {(playerA && playerB) && (
                <div className={`w-2.5 h-2.5 rounded-full ${getAdvantageColor()} animate-pulse mx-1`}></div>
              )}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{getAdvantageText()}</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <div className="w-1/3">
        <div className="flex items-center gap-2">
          <Badge variant={getAdvantage() === "B" ? "default" : "outline"}>{playerB?.points?.toFixed(1) || "-"}</Badge>
          <div className={`text-sm font-medium ${getPlayerClassB()}`}>{playerB?.name || "N/A"}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerMatchup;
