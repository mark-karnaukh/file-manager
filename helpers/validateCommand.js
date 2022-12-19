import { messages } from './logMessage.js';
import { 
    MESSAGE_INVALID_INPUT, 
    COMMAND_NWD_UP, 
    COMMAND_NWD_CD, 
    COMMAND_NWD_LS, 
    COMMAND_OS_EOL, 
    COMMAND_OS, 
    COMMAND_OS_CPUS, 
    COMMAND_OS_HOME_DIR,
    COMMAND_OS_USER_NAME,
    COMMAND_OS_ARCHITECTURE,
    COMMAND_HASH
} from '../constants.js';

export const getCommandValidationRules = () => ({
    [COMMAND_NWD_UP]: new RegExp(/up/, 'g'),
    [COMMAND_NWD_CD]: new RegExp(/(cd) (["']*)([a-zA-Z0-9_\-\\\/\.: ]+)\2/, 'g'),
    [COMMAND_NWD_LS]: new RegExp(/ls/, 'g'),
    [COMMAND_OS_EOL]: new RegExp(/(os) (--EOL)/, 'g'),
    [COMMAND_OS_CPUS]: new RegExp(/(os) (--cpus)/, 'g'),
    [COMMAND_OS_HOME_DIR]: new RegExp(/(os) (--homedir)/, 'g'),
    [COMMAND_OS_USER_NAME]: new RegExp(/(os) (--username)/, 'g'),
    [COMMAND_OS_ARCHITECTURE]: new RegExp(/(os) (--architecture)/, 'g'),
    [COMMAND_HASH]: new RegExp(/(hash) (["']*)([a-zA-Z0-9_\-\\\/\.: ]+)\2/, 'g')

});

export const validateCommand = (command) => {
    try {
        const [_, commandRegex] = Object.entries(getCommandValidationRules()).find(([commandName, _]) => {
            return command.startsWith(COMMAND_OS) ? command.endsWith(commandName) : command.startsWith(commandName);
        });
    
        if(!commandRegex.test(command)) {
            throw new Error();
        };
    } catch {
        throw new Error(messages[MESSAGE_INVALID_INPUT]());
    }
}