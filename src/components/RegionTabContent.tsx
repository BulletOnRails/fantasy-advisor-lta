
import { Team } from "@/data/teams";
import TeamCard from "./TeamCard";
import TeamRanking from "./TeamRanking";
import PlayerRecommendation from "./PlayerRecommendation";
import ScoringSystem from "./ScoringSystem";
import { Separator } from "@/components/ui/separator";
import { ArrowUpToLine, Swords, Target, Waves, ShieldAlert, Trophy } from "lucide-react";
import { motion } from "framer-motion";

interface RegionTabContentProps {
  teams: Team[];
  regionName: string;
}

const RegionTabContent = ({ teams, regionName }: RegionTabContentProps) => {
  // Find top performers by position
  const getTopPerformersByPosition = (position: string) => {
    const allPlayers = teams
      .flatMap(team => team.players)
      .filter(player => player.position === position);
    
    return [...allPlayers].sort((a, b) => 
      (b.points || 0) - (a.points || 0)
    ).slice(0, 3);
  };

  const topTOP = getTopPerformersByPosition("TOP");
  const topJG = getTopPerformersByPosition("JG");
  const topMID = getTopPerformersByPosition("MID");
  const topBOT = getTopPerformersByPosition("BOT");
  const topSUP = getTopPerformersByPosition("SUP");

  // Get position icons and colors
  const getPositionData = (position: string) => {
    switch (position) {
      case "TOP":
        return { 
          icon: <ArrowUpToLine className="h-5 w-5" />, 
          color: "bg-lta-blue", 
          name: "Topo" 
        };
      case "JG":
        return { 
          icon: <Swords className="h-5 w-5" />, 
          color: "bg-lta-green", 
          name: "Selva" 
        };
      case "MID":
        return { 
          icon: <Target className="h-5 w-5" />, 
          color: "bg-lta-purple", 
          name: "Meio" 
        };
      case "BOT":
        return { 
          icon: <Waves className="h-5 w-5" />, 
          color: "bg-lta-red", 
          name: "Atirador" 
        };
      case "SUP":
        return { 
          icon: <ShieldAlert className="h-5 w-5" />, 
          color: "bg-lta-orange", 
          name: "Suporte" 
        };
      default:
        return { 
          icon: null, 
          color: "bg-gray-400", 
          name: position 
        };
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="space-y-8 mt-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <TeamRanking teams={teams} title={`Classificação ${regionName}`} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 p-5 rounded-lg shadow-sm mb-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Trophy className="h-6 w-6 text-yellow-500" />
            Recomendações por Posição
          </h2>
          
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            {[
              { position: "TOP", players: topTOP },
              { position: "JG", players: topJG },
              { position: "MID", players: topMID },
              { position: "BOT", players: topBOT },
              { position: "SUP", players: topSUP }
            ].map(({ position, players }) => {
              const { icon, color, name } = getPositionData(position);
              
              return (
                <motion.div key={position} variants={itemVariants}>
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <span className={`inline-block w-8 h-8 rounded-full ${color} text-white flex items-center justify-center mr-2`}>
                        {icon}
                      </span>
                      {name}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {players.map((player, index) => (
                        <motion.div 
                          key={player.name}
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <PlayerRecommendation 
                            player={player} 
                            isHighlighted={index === 0} 
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  {position !== "SUP" && <Separator className="my-6" />}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-4">Escalações Atuais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {teams.map((team) => (
            <motion.div 
              key={team.shortName}
              whileHover={{ scale: 1.02, translateY: -2 }}
              transition={{ duration: 0.2 }}
            >
              <TeamCard team={team} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <ScoringSystem />
      </motion.div>
    </div>
  );
};

export default RegionTabContent;
