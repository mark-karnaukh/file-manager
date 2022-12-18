import { getUserName } from './helpers/getUserName.js'

const runFileManager = () => {
    console.log("File manager started...");
    console.log("Arguments", process.argv.slice(2))

    console.log('The username is:', getUserName())
}

runFileManager();