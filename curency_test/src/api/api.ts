import axios, { AxiosInstance } from "axios";
import { CurrensiesValue, GetCurrencyResponse } from "./types";


class Api {
    public server: AxiosInstance;
    constructor() {
        this.server = axios.create({
            baseURL: 'https://api.currencyapi.com/v3'
        })
    }

    async getValues() {
        const req = await this.server.get<GetCurrencyResponse<CurrensiesValue>>('/latest?apikey=cur_live_sQJXChYtALTh0f9uHTbq3h5Z6LIs4IaSCEdQBZw3');
        const reqArray = Object.values(req.data.data);
        return reqArray
    }
}

export default new Api();