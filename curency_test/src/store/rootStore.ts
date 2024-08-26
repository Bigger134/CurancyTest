import { makeAutoObservable } from "mobx";
import { DataStore } from "./dataStore/dataStore.ts";

export class RootStore {
    dataStore: DataStore
    constructor() {
        this.dataStore = new DataStore(this)
        makeAutoObservable(this, {}, { autoBind: true })
    }
}

