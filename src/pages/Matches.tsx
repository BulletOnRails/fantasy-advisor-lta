
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sulTeams, norteTeams } from "@/data/teams";
import { upcomingMatches, findTeamByShortName } from "@/data/matches";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MatchCard from "@/components/MatchCard";
import { Info, Calendar, Filter } from "lucide-react";
import { motion } from "framer-motion";

const Matches = () => {
  const sulMatches = upcomingMatches.filter(match => match.region === "sul");
  const norteMatches = upcomingMatches.filter(match => match.region === "norte");

  // Animations
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
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="container mx-auto py-8 px-4 flex-1">
        <motion.div 
          className="bg-muted/30 p-6 rounded-lg mb-8 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            Próximos Jogos
          </h2>
          <p className="text-lg mb-4">
            Confira os próximos confrontos do LTA e compare as estatísticas lado a lado dos jogadores.
            Selecione a região Sul ou Norte para ver os jogos específicos.
          </p>
          <div className="flex items-start gap-2 text-sm bg-blue-50 dark:bg-blue-950/30 p-3 rounded-md">
            <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <p>
              <span className="font-semibold">Última atualização:</span> 11 de abril de 2025. 
              Os dados são atualizados conforme as partidas são anunciadas oficialmente.
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Tabs defaultValue="sul" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="sul">Região Sul</TabsTrigger>
              <TabsTrigger value="norte">Região Norte</TabsTrigger>
            </TabsList>
            
            <TabsContent value="sul" className="space-y-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {sulMatches.map(match => (
                  <motion.div key={match.id} variants={itemVariants}>
                    <MatchCard 
                      match={match} 
                      teamA={findTeamByShortName(sulTeams, match.teamA)} 
                      teamB={findTeamByShortName(sulTeams, match.teamB)} 
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="norte" className="space-y-8">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {norteMatches.map(match => (
                  <motion.div key={match.id} variants={itemVariants}>
                    <MatchCard 
                      match={match} 
                      teamA={findTeamByShortName(norteTeams, match.teamA)} 
                      teamB={findTeamByShortName(norteTeams, match.teamB)} 
                    />
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Matches;
