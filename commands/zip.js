import path from 'path';
import fs from 'fs/promises';
import { pipeline } from 'stream';
import zlib from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

import { getResolvedPath } from '../helpers/getResolvedPath.js';
import { parseCommandLineArgs } from '../helpers/parseCommandLineArgs.js'
import { COMMAND_ZIP_COMPRESS, COMMAND_ZIP_DECOMPRESS } from '../constants.js';

const isLocationExist = async (url) => {
    const locationPath = getResolvedPath(url);

    try {
        await fs.access(locationPath, fs.constants.F_OK)

        return true;
    } catch(err) {
        return false;
    }
}

export const zip = {
    [COMMAND_ZIP_COMPRESS]: async (args) => {
        const commandLineArgs = parseCommandLineArgs(args);

        if (!await isLocationExist(commandLineArgs[0])) {
            throw new Error();
        } else {
            const gZip = zlib.createGzip();
            const pathFrom = getResolvedPath(commandLineArgs[0]);
            const pathTo = getResolvedPath(commandLineArgs[1]);

            const readStream = createReadStream(pathFrom);
            const writeStream = createWriteStream(pathTo);

            pipeline(readStream, gZip, writeStream, (err) => {
                if (err) {
                  process.exitCode = 1;
                  throw new Error(err);
                }
            });
        }
    },
    [COMMAND_ZIP_DECOMPRESS]: async (args) => {
        const commandLineArgs = parseCommandLineArgs(args);

        if (!await isLocationExist(commandLineArgs[0])) {
            throw new Error();
        } else {
            const gunZip = zlib.createUnzip();
            const pathFrom = getResolvedPath(commandLineArgs[0]);
            const pathTo = getResolvedPath(commandLineArgs[1]);

            const readStream = createReadStream(pathFrom);
            const writeStream = createWriteStream(pathTo);

            pipeline(readStream, gunZip, writeStream, (err) => {
                if (err) {
                  process.exitCode = 1;
                  throw new Error(err);
                }
            });
        }
    }
}