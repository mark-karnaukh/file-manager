import readline from 'readline';

import { validateCommand } from './validateCommand.js';
import { logMessage, MESSAGE_GOODBYE, MESSAGE_CWD } from './logMessage.js'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const handleUserInput = function(userName) {
    rl.question("===> ", (line) => {
        const command = line.trim().replace(/  +/g, ' ');

        if (command == ".exit"){
            rl.close();
            return logMessage(MESSAGE_GOODBYE, userName);
        } 

        console.log('Command entered: ', command);
        validateCommand(command);
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