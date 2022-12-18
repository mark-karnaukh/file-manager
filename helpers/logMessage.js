export const MESSAGE_WELCOME = 'welcome';
export const MESSAGE_GOODBYE = 'goodbye';
export const MESSAGE_CWD = 'cwd';
export const MESSAGE_INVALID_INPUT = 'invalid_input';
export const MESSAGE_OPERATION_FAILED = 'operation_failed';

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