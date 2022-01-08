/*
 *  Handlebars helper that will output a date with format.
 *  Created On 09 January 2022
 */

import { DateTime } from 'luxon'

export default options => {
    const { format } = options.hash

    return DateTime.local().toFormat(format)
}
