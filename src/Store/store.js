import { legacy_createStore } from "redux";
import rootReducer from "../Redux/reducer";
const store = legacy_createStore(rootReducer);

export default store;