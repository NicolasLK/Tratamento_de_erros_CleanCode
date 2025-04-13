import { createContextLogger } from "../logger";

interface Team {
  name: string;
}

interface GameResult {
  hostTeam: string;
  visitorTeam: string;
  hostGoals: number;
  visitorGoals: number;
}

export class Match {
  private logger = createContextLogger("Match");
  public host: Team;
  public visitor: Team;
  public hostGoals: number | null = null;
  public visitorGoals: number | null = null;

  constructor(host: Team, visitor: Team) {
    this.host = host;
    this.visitor = visitor;
    this.logger.info(`Partida entre ${host.name} e ${visitor.name} criada.`);
  }

  play(hostGoals: number, visitorGoals: number): GameResult {
    if (hostGoals < 0 || !Number.isInteger(hostGoals)) {
      const msg = `❌ Erro: Número de gols do time anfitrião (${this.host.name}) inválido: ${hostGoals}.`;
      this.logger.error(msg);
      throw new Error(msg);
    }

    if (visitorGoals < 0 || !Number.isInteger(visitorGoals)) {
      const msg = `❌ Erro: Número de gols do time visitante (${this.visitor.name}) inválido: ${visitorGoals}.`;
      this.logger.error(msg);
      throw new Error(msg);
    }

    this.hostGoals = hostGoals;
    this.visitorGoals = visitorGoals;
    this.logger.info(
      `Resultado da partida: ${this.host.name} ${this.hostGoals} X ${this.visitor.name} ${this.visitorGoals}`
    );
    return {
      hostTeam: this.host.name,
      visitorTeam: this.visitor.name,
      hostGoals: this.hostGoals,
      visitorGoals: this.visitorGoals,
    };
  }

  getResult(): GameResult | null {
    if (this.hostGoals !== null && this.visitorGoals !== null) {
      return {
        hostTeam: this.host.name,
        visitorTeam: this.visitor.name,
        hostGoals: this.hostGoals,
        visitorGoals: this.visitorGoals,
      };
    }
    return null;
  }
}
