import { combineReducers, createStore } from "redux";
import level1Reduser from "./redusers/level1Reduser";

let redusers = combineReducers({
    level1: level1Reduser,
})
let store = createStore(redusers)
window.store = store;
export default store;