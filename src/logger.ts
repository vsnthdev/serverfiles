/*
 *  Configures itivrutaha logger module for serverfiles CLI project.
 *  Created On 08 January 2022
 */

import chalk from 'chalk'
import itivrutaha from 'itivrutaha'

export let logger

const banner = [
    `   ${chalk.cyanBright('______')}`,
    `  ${chalk.cyanBright('/  ___/')}  ${chalk.whiteBright.bold(
        'serverfiles',
    )} is a CLI application 🪄`,
    `  ${chalk.cyanBright(
        '\\___ \\',
    )}   that lets you dynamically write ⚗️ config`,
    ` ${chalk.cyanBright('/____  >')}  files to 🐧 Linux servers.`,
    `      ${chalk.cyanBright('\\/')}`,
]

if (Boolean(process.stdout.isTTY)) console.log(banner.join('\n').concat('\n'))

export default async () => {
    logger = await itivrutaha.createNewLogger({
        appName: 'serverfiles',
        bootLog: false,
        shutdownLog: false,
        theme: {
            string: ':emoji :type :message',
        },
    })
}
