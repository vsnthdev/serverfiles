/*
 *  Processes a single file of handlebars template along with
 *  additional data.
 *  Created On 09 January 2022
 */

import hbs from 'handlebars'
import getSystemInfo from '../../../util/systemInfo.js'
import timeHelper from './helpers/time.js'

interface RenderConfigImpl {
    data: any
    template: string
    args: any
}

export default async ({ data, template, args }: RenderConfigImpl) => {
    // make environment variables available to config templates
    data['env'] = process.env

    // make system information available to config templates
    data['sys'] = await getSystemInfo(args)

    // register our custom helpers
    hbs.registerHelper('time', timeHelper)

    const render = hbs.compile(template)
    const config = render(data)

    return config
}
