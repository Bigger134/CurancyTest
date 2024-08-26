import { makeAutoObservable } from "mobx";
import { CurrensiesValue } from "../../../api/types";
import { RootStore } from "../../rootStore";


export class Currensy {
    protected readonly rootStore: RootStore;
    public code: string;
    public value: number;
    constructor(rootstore: RootStore, currensy: CurrensiesValue) {
        this.rootStore = rootstore;
        this.code = currensy.code;
        this.value = currensy.value;
        makeAutoObservable(this, {}, { autoBind: true })
    }
}