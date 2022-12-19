import path from 'path';
import fs from 'fs/promises';

import { getResolvedPath } from '../helpers/getResolvedPath.js';
import { COMMAND_CD, COMMAND_UP, COMMAND_LS } from '../constants.js';

export const navigation = {
    [COMMAND_UP]: () => { process.chdir(path.join(process.cwd(), '../')) },
    [COMMAND_LS]: async  () => { 
        const files = await fs.readdir(process.cwd());
        const lsOutput = await Promise.all(files.map(async (file) => {
            const stats = await fs.stat(path.join(process.cwd(), file));

            return { 'Name': file, 'Type': stats.isFile() ? 'file' : 'directory' };
        }));

        console.table([
            ...lsOutput.filter(item => item['Type'] === 'directory').sort(),
            ...lsOutput.filter(item => item['Type'] === 'file').sort(),
        ]);
    },
    [COMMAND_CD]: (url) => {
        return process.chdir(getResolvedPath(url));
    }
}