import { createLogger, format, transports } from "winston";

export function createContextLogger(context: string) {
  return createLogger({
    level: "info",
    format: format.combine(
      format.label({ label: context }),
      format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      format.printf(({ timestamp, level, message, label }) => {
        return `[${timestamp}] [${label}] ${level.toUpperCase()}: ${message}`;
      })
    ),
    transports: [new transports.Console()],
  });
}
