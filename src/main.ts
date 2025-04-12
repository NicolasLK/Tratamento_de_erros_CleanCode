import { createContextLogger } from "./logger";
import { Match } from "./models/match";
import { Tournament } from "./models/tournament";

const saudacao = (nome: string): string => {
  return `Olá, ${nome}!`;
};

console.log(saudacao("Mundo"));

const logger = createContextLogger("Main");

logger.info("Aplicação iniciada");
const match = new Match();
const tournament = new Tournament();

match.startMatch();
tournament.startTournament();
