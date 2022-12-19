import path from 'path';
import fs from 'fs/promises';

import { getResolvedPath } from '../helpers/getResolvedPath.js';
import { COMMAND_FILES_ADD, COMMAND_FILES_CAT, COMMAND_FILES_RM } from '../constants.js';

const isLocationExist = async (url) => {
    const locationPath = getResolvedPath(url);

    try {
        await fs.access(locationPath, fs.constants.F_OK)

        return true;
    } catch(err) {
        return false;
    }
}

export const files = {
    [COMMAND_FILES_RM]: async (url) => { 
        if (!await isLocationExist(url)) {
            throw new Error();
        } else {
            fs.unlink(getResolvedPath(url));
        }
    },
    [COMMAND_FILES_CAT]: async (url) => {
        if (!await isLocationExist(url)) {
            throw new Error();
        } else {
            const data = await fs.readFile(getResolvedPath(url), 'utf-8')
                        .then(data => data)
                        .catch(error => console.error(error));

            console.log(data);
        }
    },
    [COMMAND_FILES_ADD]: async (url) => {
        if (await isLocationExist(url)) {
            throw new Error();
        } else {
            fs.writeFile(getResolvedPath(url), '').catch(err => console.error(err));
        }
    }
}