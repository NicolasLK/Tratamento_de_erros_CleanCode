import { createContextLogger } from "../logger";

export class Match {
  private logger = createContextLogger("Match");

  public startMatch() {
    this.logger.info("A partida foi iniciada.");
  }
}
