export const getCommand = (line) => {
    return line.trim().replace(/  +/g, ' ');
}