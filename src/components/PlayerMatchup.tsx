
import { Player } from "@/data/teams";
import { Badge } from "@/components/ui/badge";
import { ArrowUpToLine, Swords, Target, Waves, ShieldAlert } from "lucide-react";

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

  // Retorna o ícone baseado na posição
  const getLaneIcon = () => {
    switch (position) {
      case "TOP": return <ArrowUpToLine className="h-4 w-4" />;
      case "JG": return <Swords className="h-4 w-4" />;
      case "MID": return <Target className="h-4 w-4" />;
      case "BOT": return <Waves className="h-4 w-4" />; // Fixed: Corrected from "waves" to "Waves"
      case "SUP": return <ShieldAlert className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <div className="flex items-center">
      <div className="w-1/3 text-right">
        <div className="flex justify-end items-center gap-2">
          <div className="text-sm font-medium">{playerA?.name || "N/A"}</div>
          <Badge variant="outline">{playerA?.points?.toFixed(1) || "-"}</Badge>
        </div>
      </div>
      
      <div className="w-1/3 flex justify-center items-center px-2">
        {getLaneIcon()}
        
        {(playerA && playerB) && (
          <div className={`w-2 h-2 rounded-full ${getAdvantageColor()} mx-1`}></div>
        )}
      </div>
      
      <div className="w-1/3">
        <div className="flex items-center gap-2">
          <Badge variant="outline">{playerB?.points?.toFixed(1) || "-"}</Badge>
          <div className="text-sm font-medium">{playerB?.name || "N/A"}</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerMatchup;
