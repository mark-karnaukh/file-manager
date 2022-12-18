import { messages } from './logMessage.js';
import { MESSAGE_INVALID_INPUT, COMMAND_UP, COMMAND_CD, COMMAND_LS } from '../constants.js';

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