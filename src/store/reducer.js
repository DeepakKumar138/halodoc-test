import { QUERY_CALL_INIT, QUERY_CALL_SUCCESS, QUERY_CALL_FAIL } from './actionType'

export default function search(state=[], action={}) {
    switch(action.type){
        case QUERY_CALL_INIT:
            return {
                ...state,
                loading: true,
            }
        case QUERY_CALL_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            }
        case QUERY_CALL_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}