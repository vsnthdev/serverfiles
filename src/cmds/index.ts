/*
 *  Configures commander.js and initializes commands.
 *  Created On 08 January 2022
 */

import { Command, Option } from 'commander'
import dirname from 'es-dirname'
import fs from 'fs/promises'
import path from 'path'
import { isCaxa } from '../util/isCaxa.js'
import write from './write/cmd/index.js'

const program = new Command()

export default async () => {
    const packagePath = isCaxa
        ? path.join(dirname(), '..', 'package.json')
        : path.join(dirname(), '..', '..', 'package.json')

    const { name, version } = JSON.parse(
        await fs.readFile(packagePath, 'utf-8'),
    )

    program
        .name(name)
        .version(version)
        .allowExcessArguments(false)
        .allowUnknownOption(false)
        .option('-q, --quiet', 'do not log any output')
        .addOption(
            new Option('--caxa', 'running from caxa package').hideHelp(true),
        )
        .addCommand(write)

    return await program.parseAsync()
}
