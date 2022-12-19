import { navigation } from './navigation.js';
import { osInfo } from './os.js';
import { hash } from './hash.js';
import { files } from './files.js';
import { zip } from './zip.js';

export const executeCommand = (command) => {
    const [commandType, ...commandValue] = command.split(' ');
    
    return {
        ...navigation,
        ...osInfo,
        ...hash,
        ...files,
        ...zip
    }[commandType](commandValue.join(' '));
};