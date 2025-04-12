import * as path from "path";
import { createLogger, format, transports } from "winston";

export function createContextLogger(context: string) {
  const logger = createLogger({
    level: "silly",
    format: format.combine(
      format.label({ label: context }),
      format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
      format.printf(({ timestamp, level, message, label }) => {
        return `[${timestamp}] [${label}] ${level.toUpperCase()}: ${message}`;
      })
    ),
    transports: [
      new transports.Console(),
      new transports.File({
        filename: path.resolve(__dirname, "../logs/error.log"),
        level: "error",
      }),
      new transports.File({
        filename: path.resolve(__dirname, "../logs/info.log"),
        level: "info",
        format: format((info) => {
          return info.level === "info" ||
            info.level === "debug" ||
            info.level === "silly"
            ? info
            : false;
        })(),
      }),
    ],
  });

  return logger;
}
