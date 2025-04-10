
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ScoringSystem = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Sistema de Pontuação</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="basic-points">
            <AccordionTrigger>Pontos Básicos</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Abate: +1.5 pontos</li>
                <li>Assistência: +1 ponto</li>
                <li>Morte: -1 ponto</li>
                <li>CS: +0.01 ponto por CS</li>
                <li>First Blood: +1 ponto</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="performance-bonus">
            <AccordionTrigger>Bônus de Performance</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-1">
                <li>Participação em Abates ≥70%: +2 pontos</li>
                <li>Triple Kill: +2 pontos</li>
                <li>Quadra Kill: +3 pontos</li>
                <li>Penta Kill: +5 pontos</li>
                <li>10+ Abates: +3 pontos</li>
                <li>Participação no Dano ≥30%: +3 pontos</li>
                <li>Vitória: +1 ponto</li>
                <li>Vitória com 10k+ de vantagem de ouro: +2 pontos</li>
                <li>Jogo Perfeito (sem mortes e KDA ≥5): +3 pontos</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="role-specific">
            <AccordionTrigger>Pontuação Específica por Função</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Topo</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Abate Solo: +1 ponto</li>
                    <li>Participação no Dano ≥25%: +2 pontos</li>
                    <li>Tanque (25%+ do dano recebido do time): +2 pontos</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Selva</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Time conquista 4+ Dragões: +1.5 pontos</li>
                    <li>Barão feito: +2 pontos por Barão</li>
                    <li>Participação em Abates ≥75%: +2 pontos</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Meio</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Participação no Dano ≥30%: +3 pontos</li>
                    <li>CS por Minuto ≥10 aos 15min: +1.5 pontos</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Atirador (Bot)</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>CS por Minuto ≥10 aos 15min: +1.5 pontos</li>
                    <li>Dano por Minuto ≥1000: +1 ponto</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Suporte</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>10+ Assistências: +2 pontos</li>
                    <li>Participação em Abates ≥75%: +2 pontos</li>
                    <li>Primeiro Dragão: +1.5 pontos</li>
                    <li>Pontuação de Visão: igual à média por minuto</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="champion-bonus">
            <AccordionTrigger>Bônus de Campeão</AccordionTrigger>
            <AccordionContent>
              <p>Acertar um campeão que um jogador usará na semana terá um fator multiplicador de pontos (na partida que acertar o campeão): x1.3 pontos</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default ScoringSystem;
