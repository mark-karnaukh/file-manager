import { MESSAGE_WELCOME, MESSAGE_GOODBYE, MESSAGE_CWD, MESSAGE_INVALID_INPUT, MESSAGE_OPERATION_FAILED } from '../constants.js'

export const messages = {
    [MESSAGE_WELCOME]: (userName) => `Welcome to the File Manager, ${userName}!`,
    [MESSAGE_GOODBYE]: (userName) => `Thank you for using File Manager, ${userName}, goodbye!`,
    [MESSAGE_CWD]: (cwd) => `You are currently in ${cwd}`,
    [MESSAGE_INVALID_INPUT]: () => 'Invalid input',
    [MESSAGE_OPERATION_FAILED]: () => 'Operation failed'
}

export const logMessage = (messageType, messageInfo = '') => {
    try {
        console.log(messages[messageType](messageInfo));
    } catch {
        throw new Error('Invalid message data provided...')
    }
};