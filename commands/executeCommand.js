import { navigation } from './navigation.js';

export const executeCommand = (command) => {
    const [commandType, ...commandValue] = command.split(' ');
    
    return {
        ...navigation,
    }[commandType](commandValue.join(' ').replace(/['"]+/g, ''));
};