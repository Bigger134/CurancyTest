import { createContext, useContext } from "react";
import { RootStore } from "../rootStore.ts";

const StoreContext = createContext<RootStore>({} as RootStore);
export const StoreProvider = StoreContext.Provider;
export const createStore = (): RootStore => new RootStore();
export const useStore = (): RootStore => useContext(StoreContext);