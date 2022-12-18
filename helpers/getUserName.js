const USER_NAME_PROP = '--username'

export const getUserName = () => {

    try {
        return process.argv
            .slice(2)
            .find(arg => arg.startsWith(`${USER_NAME_PROP}=`)).split("=")[1];

    } catch {
        throw new Error("Username is not provided");
    }
}