
import { Team } from "./teams";

export interface Match {
  id: string;
  date: string;
  teamA: string;
  teamB: string;
  region: "sul" | "norte";
  importance?: "normal" | "high" | "critical";
}

// Dados dos próximos jogos
export const upcomingMatches: Match[] = [
  {
    id: "sul-1",
    date: "12 Abr 2025 - 14:00",
    teamA: "PAIN",
    teamB: "VKS",
    region: "sul",
    importance: "high"
  },
  {
    id: "sul-2",
    date: "12 Abr 2025 - 17:00",
    teamA: "LEV",
    teamB: "FUR",
    region: "sul"
  },
  {
    id: "sul-3",
    date: "13 Abr 2025 - 14:00",
    teamA: "RED",
    teamB: "LLL",
    region: "sul",
    importance: "critical"
  },
  {
    id: "sul-4",
    date: "13 Abr 2025 - 17:00",
    teamA: "IE",
    teamB: "FXVM",
    region: "sul"
  },
  {
    id: "norte-1",
    date: "12 Abr 2025 - 15:00",
    teamA: "FLY",
    teamB: "LYON",
    region: "norte"
  },
  {
    id: "norte-2",
    date: "12 Abr 2025 - 18:00",
    teamA: "100T",
    teamB: "SR",
    region: "norte",
    importance: "high"
  },
  {
    id: "norte-3",
    date: "13 Abr 2025 - 15:00",
    teamA: "C9",
    teamB: "TL",
    region: "norte",
    importance: "critical"
  },
  {
    id: "norte-4",
    date: "13 Abr 2025 - 18:00",
    teamA: "DSG",
    teamB: "DIG",
    region: "norte"
  }
];

// Função para encontrar um time pelo seu nome curto
export const findTeamByShortName = (teams: Team[], shortName: string): Team | undefined => {
  return teams.find(team => team.shortName === shortName);
};
