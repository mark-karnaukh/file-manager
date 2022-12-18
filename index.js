import os from 'os'

import { getUserName } from './helpers/getUserName.js';
import { handleUserInput } from './helpers/handleUserInput.js'
import { logMessage, MESSAGE_WELCOME, MESSAGE_CWD } from './helpers/logMessage.js'

const runFileManager = () => {
    logMessage(MESSAGE_WELCOME, getUserName());
    
    const userHomeDir = os.homedir();

    process.chdir(userHomeDir);

    logMessage(MESSAGE_CWD, process.cwd());

    handleUserInput(getUserName());
}

runFileManager();