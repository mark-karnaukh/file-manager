// Message Types
export const MESSAGE_WELCOME = 'welcome';
export const MESSAGE_GOODBYE = 'goodbye';
export const MESSAGE_CWD = 'cwd';
export const MESSAGE_INVALID_INPUT = 'invalid_input';
export const MESSAGE_OPERATION_FAILED = 'operation_failed';

// Command names
// Navigation & working directory (nwd)
export const COMMAND_NWD_UP = 'up';
export const COMMAND_NWD_CD = 'cd';
export const COMMAND_NWD_LS = 'ls';

// Operating system info
export const COMMAND_OS = 'os';
export const COMMAND_OS_EOL = '--EOL';
export const COMMAND_OS_CPUS = '--cpus';
export const COMMAND_OS_HOME_DIR = '--homedir';
export const COMMAND_OS_USER_NAME = '--username';
export const COMMAND_OS_ARCHITECTURE = '--architecture';

// Hash calculation
export const COMMAND_HASH = 'hash';

// Basic operations with files
export const COMMAND_FILES_CAT = 'cat';
export const COMMAND_FILES_ADD = 'add';
export const COMMAND_FILES_RN = 'rn';
export const COMMAND_FILES_CP = 'cp';
export const COMMAND_FILES_MV = 'mv';
export const COMMAND_FILES_RM = 'rm';

// Compress and decompress operations
export const COMMAND_ZIP_COMPRESS = 'compress';
export const COMMAND_ZIP_DECOMPRESS = 'decompress';