/*
 *  Processes a single file of handlebars template along with
 *  additional data.
 *  Created On 09 January 2022
 */

import hbs from 'handlebars'

export default async ({ data, template }: { data: any; template: string }) => {
    const render = hbs.compile(template)
    const config = render(data)

    return config
}
