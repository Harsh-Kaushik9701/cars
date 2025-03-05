import axios from 'axios';


export const fetcher = async (config) => {
    const { url, method = 'GET', data = null } = config;
    return await axios({ url, method, data });
}