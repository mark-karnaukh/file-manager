import { navigation } from './navigation.js';
import { osInfo } from './os.js';

export const executeCommand = (command) => {
    const [commandType, ...commandValue] = command.split(' ');
    
    return {
        ...navigation,
        ...osInfo
    }[commandType](commandValue.join(' ').replace(/['"]+/g, ''));
};