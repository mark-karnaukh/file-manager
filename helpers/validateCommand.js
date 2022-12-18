import { messages, MESSAGE_INVALID_INPUT } from './logMessage.js'

// Command names
// Navigation & working directory (nwd)
const COMMAND_UP = 'up';
const COMMAND_CD = 'cd';
const COMMAND_LS = 'ls';

const getCommandValidationRules = () => ({
    [COMMAND_UP]: new RegExp(/up/, 'g'),
    [COMMAND_CD]: new RegExp(/(cd) ([a-zA-Z0-9_\-\\\/\.]+)/, 'g'),
    [COMMAND_LS]: new RegExp(/ls/, 'g')
});

export const validateCommand = (command) => {
    try {
        const [_, commandRegex] = Object.entries(getCommandValidationRules()).find(([commandName, _]) => {
            return command.startsWith(commandName);
        });
    
        if(!commandRegex.test(command)) {
            throw new Error();
        };
    } catch {
        throw new Error(messages[MESSAGE_INVALID_INPUT]());
    }
}