/*
 *  Returns system information to be used while rendering config files.
 *  Created On 09 January 2022
 */

import si from 'systeminformation'

export default async () => {
    const info = {
        os: await si.osInfo(),
        cpu: await si.cpu(),
        system: await si.system(),
    }

    // remove some sensitive fields
    delete info.cpu.flags

    console.log(info)

    return info
}
