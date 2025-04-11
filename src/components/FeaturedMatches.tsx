
import { Match, findTeamByShortName } from "@/data/matches";
import { sulTeams, norteTeams } from "@/data/teams";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface FeaturedMatchesProps {
  matches: Match[];
}

const FeaturedMatches = ({ matches }: FeaturedMatchesProps) => {
  // Animações
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

  const getTeam = (shortName: string, region: "sul" | "norte") => {
    return region === "sul"
      ? findTeamByShortName(sulTeams, shortName)
      : findTeamByShortName(norteTeams, shortName);
  };

  const getImportanceBadge = (importance?: "normal" | "high" | "critical") => {
    switch (importance) {
      case "high":
        return <Badge variant="secondary" className="ml-2">Alta Importância</Badge>;
      case "critical":
        return <Badge variant="destructive" className="ml-2">Crucial</Badge>;
      default:
        return null;
    }
  };

  const getFormattedDateTime = (dateString: string) => {
    const [date, time] = dateString.split(" - ");
    return { date, time };
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 gap-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {matches.map(match => {
        const teamA = getTeam(match.teamA, match.region);
        const teamB = getTeam(match.teamB, match.region);
        const { date, time } = getFormattedDateTime(match.date);
        
        return (
          <motion.div key={match.id} variants={itemVariants} whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link to="/partidas" className="block">
              <Card className="overflow-hidden hover:shadow-md transition-shadow border-t-4 border-t-primary">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-medium text-sm">
                        Partida em Destaque {getImportanceBadge(match.importance)}
                      </span>
                    </div>
                    <Badge variant="outline" className="capitalize">
                      {match.region === "sul" ? "Região Sul" : "Região Norte"}
                    </Badge>
                  </div>
                  
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{time}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col items-center gap-2 w-1/3">
                      <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-full">
                        {teamA?.logo ? (
                          <img src={teamA.logo} alt={teamA.name} className="w-8 h-8" />
                        ) : (
                          <span className="font-bold">{match.teamA}</span>
                        )}
                      </div>
                      <span className="font-bold text-sm">{teamA?.name || match.teamA}</span>
                    </div>
                    
                    <div className="flex items-center justify-center w-1/3">
                      <div className="text-center px-6 py-2 bg-muted/40 rounded-full text-lg font-bold">
                        VS
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center gap-2 w-1/3">
                      <div className="w-10 h-10 flex items-center justify-center bg-muted rounded-full">
                        {teamB?.logo ? (
                          <img src={teamB.logo} alt={teamB.name} className="w-8 h-8" />
                        ) : (
                          <span className="font-bold">{match.teamB}</span>
                        )}
                      </div>
                      <span className="font-bold text-sm">{teamB?.name || match.teamB}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default FeaturedMatches;
