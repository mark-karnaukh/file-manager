import { createHash } from 'crypto'
import fs from 'fs/promises';

import { getResolvedPath } from '../helpers/getResolvedPath.js';
import { COMMAND_HASH } from '../constants.js';

export const hash = {
    [COMMAND_HASH]: async (url) => {
        const fileContent = await fs.readFile(getResolvedPath(url), 'utf-8')
                                    .then(data => data)
                                    .catch(error => console.error(error));

        const hash = createHash('sha256').update(fileContent).digest('hex');

        console.log(hash);
    }
}


