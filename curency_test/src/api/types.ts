export interface GetCurrencyResponse<b> {
    meta: {
        last_updated_at: string,
    },
    data: b[]
}

export interface CurrensiesValue {
    key: string,
    code: string,
    value: number
}