
import { Team } from "./teams";

export interface Match {
  id: string;
  date: string;
  teamA: string;
  teamB: string;
  region: "sul" | "norte";
  importance?: "normal" | "high" | "critical";
  status?: "upcoming" | "live" | "completed";
  description?: string;
}

// Dados dos próximos jogos
export const upcomingMatches: Match[] = [
  {
    id: "sul-1",
    date: "12 Abr 2025 - 14:00",
    teamA: "PAIN",
    teamB: "VKS",
    region: "sul",
    importance: "high",
    status: "upcoming",
    description: "Clássico regional com impacto direto na classificação"
  },
  {
    id: "sul-2",
    date: "12 Abr 2025 - 17:00",
    teamA: "LEV",
    teamB: "FUR",
    region: "sul",
    status: "upcoming",
    description: "Confronto entre times da parte de baixo da tabela"
  },
  {
    id: "sul-3",
    date: "13 Abr 2025 - 14:00",
    teamA: "RED",
    teamB: "LLL",
    region: "sul",
    importance: "critical",
    status: "upcoming",
    description: "Decisivo para a liderança da região Sul"
  },
  {
    id: "sul-4",
    date: "13 Abr 2025 - 17:00",
    teamA: "IE",
    teamB: "FXVM",
    region: "sul",
    status: "upcoming",
    description: "Duelo de meio de tabela"
  },
  {
    id: "norte-1",
    date: "12 Abr 2025 - 15:00",
    teamA: "FLY",
    teamB: "LYON",
    region: "norte",
    status: "upcoming",
    description: "Times lutando por uma vaga no torneio regional"
  },
  {
    id: "norte-2",
    date: "12 Abr 2025 - 18:00",
    teamA: "100T",
    teamB: "SR",
    region: "norte",
    importance: "high",
    status: "upcoming",
    description: "Confronto entre equipes do topo da tabela"
  },
  {
    id: "norte-3",
    date: "13 Abr 2025 - 15:00",
    teamA: "C9",
    teamB: "TL",
    region: "norte",
    importance: "critical",
    status: "upcoming",
    description: "Rivalidade histórica e decisiva para a liderança"
  },
  {
    id: "norte-4",
    date: "13 Abr 2025 - 18:00",
    teamA: "DSG",
    teamB: "DIG",
    region: "norte",
    status: "upcoming",
    description: "Equipes tentando escapar da zona de rebaixamento"
  }
];

// Função para encontrar um time pelo seu nome curto
export const findTeamByShortName = (teams: Team[], shortName: string): Team | undefined => {
  return teams.find(team => team.shortName === shortName);
};
