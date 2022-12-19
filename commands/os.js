import os from 'os';

import {  
    COMMAND_OS, 
    COMMAND_OS_ARCHITECTURE, 
    COMMAND_OS_CPUS, 
    COMMAND_OS_EOL, 
    COMMAND_OS_HOME_DIR, 
    COMMAND_OS_USER_NAME 
} from '../constants.js';

export const osInfo = {
    [COMMAND_OS]: (commandValue) => {
        return {
            [COMMAND_OS_EOL]: () => console.log(JSON.stringify(os.EOL)),
            [COMMAND_OS_CPUS]: () => console.table(os.cpus().map(cpu => (
                {...cpu, times: JSON.stringify(cpu.times)}))
            ),
            [COMMAND_OS_HOME_DIR]: () => console.log(os.homedir()),
            [COMMAND_OS_USER_NAME]: () => console.log(os.userInfo().username),
            [COMMAND_OS_ARCHITECTURE]: () => console.log(os.arch()),

        }[commandValue]();
    }
}