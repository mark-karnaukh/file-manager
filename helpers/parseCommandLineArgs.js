export const parseCommandLineArgs = (args) => {
    const regExp = new RegExp(/[^\s"']+|"([^"]*)"|'([^']*)'|(([a-zA-Z0-9_\-\\\/\.:]+))/, 'g');

    return args.match(regExp).map(arg => arg.replace(/['"]+/g, ''));
}