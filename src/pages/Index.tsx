
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { sulTeams, norteTeams } from "@/data/teams";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegionTabContent from "@/components/RegionTabContent";
import { InfoCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="container mx-auto py-8 px-4 flex-1">
        <div className="bg-muted/30 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-2">Bem-vindo ao Fantasy LTA Advisor</h2>
          <p className="text-lg mb-4">
            Aqui você encontra as melhores recomendações para escalações do LTA Fantasy,
            baseadas em análises detalhadas das performances recentes dos jogadores.
            Selecione a região Sul ou Norte para ver as recomendações específicas.
          </p>
          <div className="flex items-start gap-2 text-sm bg-blue-50 dark:bg-blue-950/30 p-3 rounded-md">
            <InfoCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <p>
              <span className="font-semibold">Última atualização:</span> 10 de abril de 2025. 
              Os dados são atualizados manualmente após cada rodada da LTA. 
              Estamos trabalhando em uma solução para atualização automática no futuro.
            </p>
          </div>
        </div>
        
        <Tabs defaultValue="sul" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="sul">Região Sul</TabsTrigger>
            <TabsTrigger value="norte">Região Norte</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sul">
            <RegionTabContent teams={sulTeams} regionName="Sul" />
          </TabsContent>
          
          <TabsContent value="norte">
            <RegionTabContent teams={norteTeams} regionName="Norte" />
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
