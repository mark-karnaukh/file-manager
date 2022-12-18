import readline from 'readline';

import { validateCommand } from './validateCommand.js';
import { logMessage } from './logMessage.js';
import { getCommand } from './getCommand.js';
import { executeCommand } from '../commands/executeCommand.js';
import {  MESSAGE_GOODBYE, MESSAGE_CWD } from '../constants.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const handleUserInput = function(userName) {
    rl.question("===> ", async (line) => {
        const command = getCommand(line);

        if (command == ".exit"){
            rl.close();
            return logMessage(MESSAGE_GOODBYE, userName);
        } 

        console.log('Command entered: ', command);
        validateCommand(command);
        await executeCommand(command);
        logMessage(MESSAGE_CWD, process.cwd());
        handleUserInput(userName);
    });

    rl.on("SIGINT", function () {
        process.emit("SIGINT");
    });

    process.on("SIGINT", function () {
        console.log('\n');
        logMessage(MESSAGE_GOODBYE, userName);
        process.exit();
    });
}