import { createContextLogger } from "./logger";
import { Match } from "./models/match";
import { Tournament } from "./models/tournament";

const logger = createContextLogger("Main");

const tournament = new Tournament();

try {
  logger.info("Iniciando o gerenciador de torneio.");

  // Registrar times
  tournament.addTeam("Brasil");
  tournament.addTeam("Russia");
  tournament.addTeam("Argentina");
  tournament.addTeam("Italia");
  tournament.addTeam("India");
  tournament.addTeam("Japão");

  // ====================================

  // Criando partidas
  let partida1: Match | undefined;
  try {
    partida1 = tournament.createMatch("Brasil", "Russia");
  } catch (error: any) {
    logger.error(`Erro ao criar partida: ${error.message}`);
  }

  let partida2: Match | undefined;
  try {
    partida2 = tournament.createMatch("Argentina", "Italia");
  } catch (error: any) {
    logger.error(`Erro ao criar partida: ${error.message}`);
  }

  let partida3: Match | undefined;
  try {
    partida3 = tournament.createMatch("Egito", "Japão");
  } catch (error: any) {
    logger.error(`Erro ao criar partida: ${error.message}`);
  }

  // ====================================

  // Gols da(s) partida(s)
  if (partida1) {
    tournament.playMatch(partida1, 3, 1);
    tournament.playMatch(partida1, -3, 1);
  }

  if (partida2) {
    tournament.playMatch(partida2, 2, 0);
  }

  if (partida3) {
    tournament.playMatch(partida3, 0, 0);
  }

  // ====================================

  // Exibindo os resultados
  logger.info("\n--- Resultados do Torneio ---");
  const results = tournament.getTournamentResults();
  results.forEach((result) => {
    logger.info(
      `${result.hostTeam} ${result.hostGoals} X ${result.visitorTeam} ${result.visitorGoals}`
    );
  });

  // ====================================

  // Determinar vencedor
  tournament.determineWinner();

  // ====================================
} catch (error: any) {
  logger.error(`Erro na aplicação: ${error.message}`);
} finally {
  logger.info("Fim do gerenciador de torneio.");
}
