import { createStore, applyMiddleware } from "redux";
import rootReducer from './index'
import reduxThunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'

const middleware = [
    reduxThunk,
]

export default function configureStore () {
    return createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(...middleware)
        )
    )
}