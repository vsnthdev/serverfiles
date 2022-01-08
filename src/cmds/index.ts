/*
 *  Configures commander.js and initializes commands.
 *  Created On 08 January 2022
 */

import { Command, Option } from 'commander'
import dirname from 'es-dirname'
import fs from 'fs/promises'
import path from 'path'
import { isCaxa } from '../util.js'

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
        .addOption(
            new Option('--caxa', 'running from caxa package').hideHelp(true),
        )

    return await program.parseAsync()
}
