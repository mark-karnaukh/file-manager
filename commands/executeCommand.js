import { navigation } from './navigation.js';
import { osInfo } from './os.js';
import { hash } from './hash.js';
import { files } from './files.js';

export const executeCommand = (command) => {
    const [commandType, ...commandValue] = command.split(' ');
    
    return {
        ...navigation,
        ...osInfo,
        ...hash,
        ...files
    }[commandType](commandValue.join(' '));
};