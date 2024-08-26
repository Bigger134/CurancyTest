import { makeAutoObservable } from "mobx";
import { RootStore } from "../rootStore.ts"
import api from "../../api/api.ts"
import { Currensy } from "./currensy/Currensy.ts"

export class DataStore {
    protected readonly rootStore: RootStore;
    currensies: Currensy[];
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
        this.currensies = [];
        makeAutoObservable(this, {}, { autoBind: true })
    }

    async getCurrensies() {
        const req = await api.getValues();
        this.currensies = req.map((currensy) => new Currensy(this.rootStore, currensy));
    }
}