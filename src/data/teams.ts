// Tipos para os dados dos times e jogadores
export interface Player {
  name: string;
  points?: number;
  position: 'TOP' | 'JG' | 'MID' | 'BOT' | 'SUP';
  recommendation?: string;
  stats?: {
    kills?: number;
    deaths?: number;
    assists?: number;
    cs?: number;
    damageShare?: number;
    killParticipation?: number;
  };
}

export interface Team {
  name: string;
  shortName: string;
  color: string;
  players: Player[];
  totalPoints?: number;
  position?: number;
  wins?: number;
  losses?: number;
}

// Dados para a região Sul
export const sulTeams: Team[] = [
  {
    name: "PAIN Gaming",
    shortName: "PAIN",
    color: "bg-black text-white",
    position: 1,
    wins: 2,
    losses: 0,
    players: [
      { 
        name: "Wizer", 
        position: "TOP", 
        points: 32.6,
        recommendation: "Ótima escolha - alto abate solo e participação no dano",
        stats: {
          kills: 5,
          deaths: 1,
          assists: 8,
          cs: 215,
          damageShare: 28,
          killParticipation: 76
        } 
      },
      { 
        name: "CarioK", 
        position: "JG", 
        points: 26.9,
        recommendation: "Recomendado - boa participação em objetivos",
        stats: {
          kills: 4,
          deaths: 2,
          assists: 12,
          cs: 180,
          damageShare: 15,
          killParticipation: 87
        }
      },
      { 
        name: "Roamer", 
        position: "MID", 
        points: 18.1,
        recommendation: "Ok para custo benefício - estável",
        stats: {
          kills: 3,
          deaths: 2,
          assists: 6,
          cs: 240,
          damageShare: 27,
          killParticipation: 62
        }
      },
      { 
        name: "Titan", 
        position: "BOT", 
        points: 17.9,
        recommendation: "Bom custo-benefício",
        stats: {
          kills: 4,
          deaths: 1,
          assists: 5,
          cs: 260,
          damageShare: 32,
          killParticipation: 65
        }
      },
      { 
        name: "Kuri", 
        position: "SUP", 
        points: 23.3,
        recommendation: "Excelente - grande visão e assistências",
        stats: {
          kills: 1,
          deaths: 3,
          assists: 16,
          cs: 42,
          damageShare: 8,
          killParticipation: 80
        }
      }
    ],
    totalPoints: 23.2
  },
  {
    name: "VKS",
    shortName: "VKS",
    color: "bg-lta-purple text-white",
    position: 2,
    wins: 2,
    losses: 0,
    players: [
      { name: "Boal", position: "TOP", points: 20.5 },
      { name: "Disamis", position: "JG", points: 21.9 },
      { name: "Ksee", position: "MID", points: 31.0 },
      { name: "Mortt", position: "BOT", points: 33.6 },
      { name: "Trym", position: "SUP", points: 21.7 }
    ],
    totalPoints: 25.7
  },
  {
    name: "Leviatan",
    shortName: "LEV",
    color: "bg-lta-blue text-white",
    position: 3,
    wins: 2,
    losses: 0,
    players: [
      { name: "Zoth", position: "TOP", points: 17.3 },
      { name: "Scary", position: "JG", points: 17.1 },
      { name: "Cody", position: "MID", points: 16.4 },
      { name: "CEO", position: "BOT", points: 19.6 },
      { name: "Prods", position: "SUP", points: 14.0 }
    ],
    totalPoints: 16.9
  },
  {
    name: "Furia",
    shortName: "FUR",
    color: "bg-lta-red text-white",
    position: 4,
    wins: 1,
    losses: 1,
    players: [
      { name: "GuiGo", position: "TOP", points: 11.9 },
      { name: "Tatu", position: "JG", points: 25.8 },
      { name: "Tutz", position: "MID", points: 17.1 },
      { name: "Ayu", position: "BOT", points: 26.6 },
      { name: "Jojo", position: "SUP", points: 21.9 }
    ],
    totalPoints: 20.7
  },
  {
    name: "Red Canids",
    shortName: "RED",
    color: "bg-lta-red text-white",
    position: 5,
    wins: 1,
    losses: 1,
    players: [
      { name: "FNB", position: "TOP", points: 14.5 },
      { name: "Doom", position: "JG", points: 21.6 },
      { name: "Mago", position: "MID", points: 12.5 },
      { name: "Brance", position: "BOT", points: 21.0 },
      { name: "Frosty", position: "SUP", points: 21.1 }
    ],
    totalPoints: 18.1
  },
  {
    name: "Isurus Estral",
    shortName: "IE",
    color: "bg-lta-teal text-white",
    position: 6,
    wins: 0,
    losses: 2,
    players: [
      { 
        name: "Burol", 
        position: "TOP", 
        points: 2.6,
        recommendation: "Não recomendado - baixo desempenho",
        stats: {
          kills: 0,
          deaths: 5,
          assists: 1,
          cs: 180,
          damageShare: 12,
          killParticipation: 20
        }
      },
      { 
        name: "Dedoo", 
        position: "JG", 
        points: 2.3,
        recommendation: "Não recomendado - baixa participação",
        stats: {
          kills: 0,
          deaths: 4,
          assists: 2,
          cs: 145,
          damageShare: 10,
          killParticipation: 33
        }
      },
      { 
        name: "Mireu", 
        position: "MID", 
        points: 1.9,
        recommendation: "Não recomendado",
        stats: {
          kills: 1,
          deaths: 4,
          assists: 1,
          cs: 190,
          damageShare: 19,
          killParticipation: 40
        }
      },
      { 
        name: "Snaker", 
        position: "BOT", 
        points: 2.0,
        recommendation: "Não recomendado",
        stats: {
          kills: 1,
          deaths: 3,
          assists: 1,
          cs: 210,
          damageShare: 22,
          killParticipation: 40
        }
      },
      { 
        name: "ACK", 
        position: "SUP", 
        points: 9.0,
        recommendation: "Opção econômica - potencial",
        stats: {
          kills: 0,
          deaths: 2,
          assists: 5,
          cs: 30,
          damageShare: 5,
          killParticipation: 60
        }
      }
    ],
    totalPoints: 3.6
  },
  {
    name: "LOUD",
    shortName: "LLL",
    color: "bg-lta-green text-white",
    position: 7,
    wins: 0,
    losses: 2,
    players: [
      { name: "Robo", position: "TOP", points: 13.7 },
      { name: "Shini", position: "JG", points: 6.0 },
      { name: "Tin", position: "MID", points: 7.3 },
      { name: "Route", position: "BOT", points: 9.1 },
      { name: "Red", position: "SUP", points: 6.3 }
    ],
    totalPoints: 8.5
  },
  {
    name: "FUXVM",
    shortName: "FXVM",
    color: "bg-lta-orange text-white",
    position: 8,
    wins: 0,
    losses: 2,
    players: [
      { name: "Hidân", position: "TOP", points: 12.4 },
      { name: "Ganks", position: "JG", points: 8.0 },
      { name: "Fuuli", position: "MID", points: 24.7 },
      { name: "Marvin", position: "BOT", points: 12.5 },
      { name: "Guigs", position: "SUP", points: 10.7 }
    ],
    totalPoints: 13.7
  }
];

// Dados para a região Norte
export const norteTeams: Team[] = [
  {
    name: "FLY",
    shortName: "FLY",
    color: "bg-lta-green text-white",
    position: 1,
    wins: 2,
    losses: 0,
    players: [
      { name: "BwiPo", position: "TOP", points: 21.4 },
      { name: "Inspired", position: "JG", points: 22.4 },
      { name: "Quad", position: "MID", points: 27.9 },
      { name: "Massu", position: "BOT", points: 13.1 },
      { name: "Busio", position: "SUP", points: 17.7 }
    ],
    totalPoints: 20.5
  },
  {
    name: "LYON",
    shortName: "LYON",
    color: "bg-black text-white",
    position: 2,
    wins: 2,
    losses: 0,
    players: []
  },
  {
    name: "100 Thieves",
    shortName: "100T",
    color: "bg-lta-orange text-white",
    position: 3,
    wins: 1,
    losses: 1,
    players: [
      { name: "Sniper", position: "TOP", points: 10.7 },
      { name: "River", position: "JG", points: 14.1 },
      { name: "Quid", position: "MID", points: 21.9 },
      { name: "FBI", position: "BOT", points: 17.4 },
      { name: "Eyla", position: "SUP", points: 14.1 }
    ],
    totalPoints: 15.6
  },
  {
    name: "SG",
    shortName: "SG",
    color: "bg-lta-blue text-white",
    position: 4,
    wins: 1,
    losses: 1,
    players: []
  },
  {
    name: "Cloud 9",
    shortName: "C9",
    color: "bg-lta-blue text-white",
    position: 5,
    wins: 1,
    losses: 1,
    players: [
      { name: "Thanatos", position: "TOP", points: 9.8 },
      { name: "Blaber", position: "JG", points: 8.1 },
      { name: "Loxi", position: "MID", points: 15.5 },
      { name: "Zven", position: "BOT", points: 19.6 },
      { name: "Vulcan", position: "SUP", points: 15.8 }
    ],
    totalPoints: 13.8
  },
  {
    name: "Team Liquid",
    shortName: "TL",
    color: "bg-lta-blue text-white",
    position: 6,
    wins: 1,
    losses: 1,
    players: [
      { name: "Impact", position: "TOP", points: 9.2 },
      { name: "Umti", position: "JG", points: 16.4 },
      { name: "APA", position: "MID", points: 9.7 },
      { name: "Yeon", position: "BOT", points: 13.7 },
      { name: "CoreJJ", position: "SUP", points: 16.9 }
    ],
    totalPoints: 13.2
  },
  {
    name: "DSG",
    shortName: "DSG",
    color: "bg-lta-yellow text-white",
    position: 7,
    wins: 0,
    losses: 2,
    players: [
      { name: "Castle", position: "TOP", points: 2.2 },
      { name: "Eyvu", position: "JG", points: 8.3 },
      { name: "Abbeedge", position: "MID", points: 10.1 },
      { name: "Scarby", position: "BOT", points: 14.6 },
      { name: "Huhi", position: "SUP", points: 5.2 }
    ],
    totalPoints: 8.1
  },
  {
    name: "Dignitas",
    shortName: "DIG",
    color: "bg-lta-yellow text-white",
    position: 8,
    wins: 0,
    losses: 2,
    players: [
      { name: "Srtty", position: "TOP", points: 6.7 },
      { name: "Sheiden", position: "JG", points: 10.5 },
      { name: "Keng", position: "MID", points: 8.6 },
      { name: "Tomo", position: "BOT", points: 14.3 },
      { name: "Isles", position: "SUP", points: 12.2 }
    ],
    totalPoints: 10.5
  }
];
