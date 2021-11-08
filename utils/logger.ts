import * as log from 'https://deno.land/std@0.113.0/log/mod.ts'


await log.setup({
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG", {
        formatter: "{datetime} {levelName} {msg}"
    }),
  },

  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console"],
    }
  },
});

const print = log.getLogger()

export { print }




// import {
//     setup as loggerSetup,
//     getLogger,
// } from 'https://deno.land/std@0.113.0/log/mod.ts'
// import {
//     ConsoleHandler,
//     FileHandler,
// } from 'https://deno.land/std@0.113.0/log/handlers.ts'
// import { ensureDir } from 'https://deno.land/std@0.113.0/fs/ensure_dir.ts'

// // const logDir = Deno.env.get('LOG_DIR') || './logs'
// const logDir = './logs'

// await ensureDir(logDir)

// const consoleLoggerHandler = new ConsoleHandler('DEBUG', {
//     formatter: "{datetime} {levelName} {msg}"
// })

// const applicationLoggerHandler = new FileHandler('DEBUG', {
//     filename: logDir + '/application.log',
//     formatter: rec => JSON.stringify({region: rec.loggerName, ts: rec.datetime, level: rec.levelName, data: rec.msg})})


// const errorLoggerHandler = new FileHandler('WARNING', {
//     filename: logDir + '/errors.log',
//     formatter: rec => JSON.stringify({region: rec.loggerName, ts: rec.datetime, level: rec.levelName, data: rec.msg})})

// await loggerSetup({
// handlers: {
//     console: consoleLoggerHandler,
//     app: applicationLoggerHandler,
//     errors: errorLoggerHandler,
// },
// loggers: {
//         default: {
//             level: 'DEBUG',
//             handlers: ['console', 'app'],
//         },
//         app: {
//             level: 'INFO',
//             handlers: ['app'],
//         },
//         error: {
//             level: 'WARNING',
//             handlers: ['errors'],
//         },
//     },
// })

// export const print = getLogger()
// export const write = getLogger('app')
// export const notice = getLogger('error')
