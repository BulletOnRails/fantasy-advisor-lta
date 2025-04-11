
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sulTeams, norteTeams } from "@/data/teams";
import { upcomingMatches } from "@/data/matches";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegionTabContent from "@/components/RegionTabContent";
import { Calendar, Info, Star } from "lucide-react";
import { motion } from "framer-motion";
import FeaturedMatches from "@/components/FeaturedMatches";

const Index = () => {
  // Filtramos os jogos importantes
  const importantMatches = upcomingMatches.filter(
    match => match.importance === "high" || match.importance === "critical"
  );

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

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="container mx-auto py-8 px-4 flex-1">
        <motion.div 
          className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 dark:from-blue-950/30 dark:via-purple-950/30 dark:to-blue-950/30 p-6 rounded-lg mb-8 shadow-sm backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-2 text-gradient-primary">Bem-vindo ao Fantasy LTA Advisor</h2>
          <p className="text-lg mb-4">
            Aqui você encontra as melhores recomendações para escalações do LTA Fantasy,
            baseadas em análises detalhadas das performances recentes dos jogadores.
            Selecione a região Sul ou Norte para ver as recomendações específicas.
          </p>
          <div className="flex items-start gap-2 text-sm bg-blue-50 dark:bg-blue-950/30 p-3 rounded-md border border-blue-100 dark:border-blue-900">
            <Info className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <p>
              <span className="font-semibold">Última atualização:</span> 10 de abril de 2025. 
              Os dados são atualizados manualmente após cada rodada da LTA. 
              Estamos trabalhando em uma solução para atualização automática no futuro.
            </p>
          </div>
        </motion.div>
        
        {importantMatches.length > 0 && (
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-yellow-500" />
              <h2 className="text-xl font-bold">Partidas em Destaque</h2>
            </div>
            <FeaturedMatches matches={importantMatches} />
          </motion.div>
        )}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Tabs defaultValue="sul" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="sul" className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-lta-blue"></div>
                Região Sul
              </TabsTrigger>
              <TabsTrigger value="norte" className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-lta-orange"></div>
                Região Norte
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="sul">
              <RegionTabContent teams={sulTeams} regionName="Sul" />
            </TabsContent>
            
            <TabsContent value="norte">
              <RegionTabContent teams={norteTeams} regionName="Norte" />
            </TabsContent>
          </Tabs>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
