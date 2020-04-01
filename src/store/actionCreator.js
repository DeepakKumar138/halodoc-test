import axios from 'axios'
import envConfig from './../config/apiConfig'
import { QUERY_CALL_INIT, QUERY_CALL_SUCCESS, QUERY_CALL_FAIL } from './actionType'

export function fetchDetails(queryparam) {
    return function(dispatch) {
        dispatch(queryCallInitiated({
            type: QUERY_CALL_INIT,
            data: []
        }))
        return axios.get(`${envConfig.queryUrl}${queryparam}`)
        .then(response => {
            let tempState = []
            response.data.hits.forEach(item => {
                tempState.push({
                    title: item.title,
                    url: item.url,
                    author: item.author,
                })
            })
            response.data.hits.map((item,index) => {
                return axios.get(`${envConfig.userUrl}${item.author}`)
                .then(resp => {
                    tempState[index].submitted = resp.data.submitted.toString()
                    dispatch(queryCallSuccess(tempState))
                })
                .catch(error => {
                    dispatch(queryCallFail(error))
                })
            })
            dispatch(queryCallSuccess(tempState))
        })
        .catch(error => {
            dispatch(queryCallFail(error))
        })
    }
}

export function queryCallInitiated(data) {
    return {
        type: QUERY_CALL_INIT,
        data,
    }
}

export function queryCallSuccess(data) {
    return {
        type: QUERY_CALL_SUCCESS,
        data,
    }
}

export function queryCallFail(error) {
    return {
        type: QUERY_CALL_FAIL,
        error,
    }
}