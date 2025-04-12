import { createContextLogger } from "../logger";

export class Tournament {
  private logger = createContextLogger("Tournament");

  public startTournament() {
    this.logger.info("O torneio foi iniciado.");
  }
}
