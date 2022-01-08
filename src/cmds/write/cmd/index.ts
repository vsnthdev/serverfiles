/*
 *  Renders a single template file into a config file.
 *  Created On 09 January 2022
 */

import { Command } from 'commander'
import renderConfig from '../lib/index.js'
import path from 'path'
import fs from 'fs/promises'
import yaml from 'js-yaml'

const readData = async (data: string): Promise<any> => {
    // if data was not given, we return empty object
    if (!data) return {}

    // read data
    const str = await fs.readFile(data, 'utf-8')

    // parse data
    return yaml.load(str)
}

const action = async (template, dest, { data }) => {
    // read data
    data = await readData(path.resolve(data))

    // read template
    template = await fs.readFile(path.resolve(template), 'utf-8')

    // pass it to lib/
    const config = await renderConfig({ data, template })

    // write the config file
    await fs.writeFile(path.resolve(dest), config.trim().concat('\n'), 'utf-8')
}

export default new Command()
    .name('write')
    .description('writes a single template into a config')
    .argument('<template>', 'path to config template')
    .argument('<dest>', 'path where rendered config should be written')
    .option('--data <file>', 'data YAML file to be used while rendering config')
    .action(action)
    .allowExcessArguments(false)
    .allowUnknownOption(false)
