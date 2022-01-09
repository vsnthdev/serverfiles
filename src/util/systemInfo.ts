/*
 *  Returns system information to be used while rendering config files.
 *  Created On 09 January 2022
 */

import si from 'systeminformation'
import { exec } from 'child_process'

const exe = (cmd: string): Promise<string> =>
    new Promise((resolve, reject) => {
        exec(cmd, (err, stdout) => {
            if (err) {
                reject(err)
            } else {
                resolve(stdout.trim())
            }
        })
    })

export default async () => {
    const info = {
        os: {
            ...(await si.osInfo()),
            ...{
                logname: await exe('logname'),
            },
        },
        cpu: await si.cpu(),
        system: await si.system(),
    }

    // remove some sensitive fields
    delete info.cpu.flags

    console.log(info.os)

    return info
}
