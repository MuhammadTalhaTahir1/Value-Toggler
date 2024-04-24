import rootReducers from "./Reducers";
import { createStore } from "redux";
 const store=createStore(rootReducers);
export {store};