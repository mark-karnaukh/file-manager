import path from 'path';

export const getResolvedPath = (url) => {
    const urlStr = url.replace(/['"]+/g, '');

    if (path.isAbsolute(url)) {
        return path.resolve(urlStr);
    }

    return path.resolve(process.cwd(), urlStr);
}