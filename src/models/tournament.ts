import { createContextLogger } from "../logger";
import { Match } from "./match";

interface Team {
  name: string;
}

interface GameResult {
  hostTeam: string;
  visitorTeam: string;
  hostGoals: number;
  visitorGoals: number;
}

export class Tournament {
  private logger = createContextLogger("Tournament");
  private teams: { [name: string]: Team } = {};
  private matches: Match[] = [];
  private results: GameResult[] = [];

  constructor() {}

  addTeam(name: string) {
    if (!name || name.trim() === "") {
      const msg = "❌ Erro: Nome do time inválido.";
      this.logger.error(msg);
      throw new Error(msg);
    }
    if (this.teams[name]) {
      const msg = `O time "${name}" já está registrado.`;
      this.logger.warn(msg);
      return;
    }
    this.teams[name] = { name };
    this.logger.info(`✅ Time "${name}" registrado com sucesso.`);
  }

  createMatch(hostName: string, visitorName: string): Match {
    const hostTeam = this.teams[hostName];
    const visitorTeam = this.teams[visitorName];

    if (!hostTeam) {
      const msg = `❌ Erro: Time anfitrião "${hostName}" não encontrado.`;
      this.logger.error(msg);
      throw new Error(msg);
    }

    if (!visitorTeam) {
      const msg = `❌ Erro: Time visitante "${visitorName}" não encontrado.`;
      this.logger.error(msg);
      throw new Error(msg);
    }

    const match = new Match(hostTeam, visitorTeam);
    this.matches.push(match);
    return match;
  }

  playMatch(match: Match, hostGoals: number, visitorGoals: number) {
    try {
      const result = match.play(hostGoals, visitorGoals);
      this.results.push(result);
    } catch (error: any) {
      this.logger.error(
        `❌ Erro ao iniciar partida entre ${match.host.name} e ${match.visitor.name}: ${error.message}`
      );
    }
  }

  getTournamentResults(): GameResult[] {
    return this.results;
  }

  determineWinner(): string | null {
    if (this.results.length === 0) {
      this.logger.warn("Nenhuma partida foi jogada ainda.");
      return null;
    }

    const wins: { [teamName: string]: number } = {};
    this.results.forEach((result) => {
      if (result.hostGoals > result.visitorGoals) {
        wins[result.hostTeam] = (wins[result.hostTeam] || 0) + 1;
      } else if (result.visitorGoals > result.hostGoals) {
        wins[result.visitorTeam] = (wins[result.visitorTeam] || 0) + 1;
      }
    });

    let winner: string | null = null;
    let maxWins = -1;

    for (const team in wins) {
      if (wins[team] > maxWins) {
        maxWins = wins[team];
        winner = team;
      }
    }

    if (winner) {
      this.logger.info(`O vencedor do torneio é: ${winner}`);
    } else {
      this.logger.info(
        "O torneio não teve um vencedor claro (pode ter havido empates ou nenhuma partida com vencedor)."
      );
    }

    return winner;
  }
}
