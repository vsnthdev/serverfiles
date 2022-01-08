/*
 *  Entry executable file for serverfiles CLI project.
 *  Created On 08 January 2022
 */

import logger from './logger.js'
import cmds from './cmds/index.js'

await logger()
await cmds()
