import path from 'path';
import fs from 'fs/promises';
import { createReadStream, createWriteStream } from 'fs';

import { getResolvedPath } from '../helpers/getResolvedPath.js';
import { parseCommandLineArgs } from '../helpers/parseCommandLineArgs.js'
import { COMMAND_FILES_ADD, COMMAND_FILES_CAT, COMMAND_FILES_CP, COMMAND_FILES_MV, COMMAND_FILES_RM, COMMAND_FILES_RN } from '../constants.js';

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
    },
    [COMMAND_FILES_MV]: async (args) => {
        const commandLineArgs = parseCommandLineArgs(args)

        if (!await isLocationExist(commandLineArgs[0])) {
            throw new Error();
        } else {
            const pathFrom = getResolvedPath(commandLineArgs[0]);
            const pathTo = path.resolve(commandLineArgs[1], path.basename(pathFrom));

            const readStream = createReadStream(pathFrom);
            const writeStream = createWriteStream(pathTo);

            readStream.pipe(writeStream);

            readStream.on('error', (err) => {
                writeStream.destroy(new Error(err));
            })

            writeStream.on('finish', () => {
                fs.unlink(pathFrom);
            })
        }


    },
    [COMMAND_FILES_RN]: async (args) => {
        const commandLineArgs = parseCommandLineArgs(args)

        if (!await isLocationExist(commandLineArgs[0])) {
            throw new Error();
        } else {
            fs.rename(...commandLineArgs.map(arg => getResolvedPath(arg)));
        }
    },
    [COMMAND_FILES_CP]: async (args) => {
        const commandLineArgs = parseCommandLineArgs(args)

        if (!await isLocationExist(commandLineArgs[0])) {
            throw new Error();
        } else {
            const pathFrom = getResolvedPath(commandLineArgs[0]);
            const pathTo = path.resolve(commandLineArgs[1], path.basename(pathFrom));

            const readStream = createReadStream(pathFrom);
            const writeStream = createWriteStream(pathTo);

            readStream.pipe(writeStream);

            readStream.on('error', (err) => {
                writeStream.destroy(new Error(err));
            })
        }
    }
}