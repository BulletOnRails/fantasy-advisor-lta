
import { Player } from "@/data/teams";
import { Badge } from "@/components/ui/badge";

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

  // Determina o ícone baseado na diferença de pontuação
  const getPositionBgColor = () => {
    switch (position) {
      case "TOP": return "bg-lta-blue";
      case "JG": return "bg-lta-green";
      case "MID": return "bg-lta-purple";
      case "BOT": return "bg-lta-red";
      case "SUP": return "bg-lta-orange";
      default: return "bg-gray-500";
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
        <div className={`w-8 h-8 rounded-full ${getPositionBgColor()} text-white flex items-center justify-center`}>
          <span className="text-xs font-bold">{position}</span>
        </div>
        
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
