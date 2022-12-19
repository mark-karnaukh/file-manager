export const getCommand = (line) => {
    return line.trim().replace(/\s+(?=(?:[^\'"]*[\'"][^\'"]*[\'"])*[^\'"]*$)/g, ' ');
}