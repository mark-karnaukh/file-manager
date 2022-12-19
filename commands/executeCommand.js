import { navigation } from './navigation.js';
import { osInfo } from './os.js';
import { hash } from './hash.js';

export const executeCommand = (command) => {
    const [commandType, ...commandValue] = command.split(' ');
    
    return {
        ...navigation,
        ...osInfo,
        ...hash
    }[commandType](commandValue.join(' ').replace(/['"]+/g, ''));
};