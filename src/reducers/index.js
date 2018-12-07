

import {combineReducers} from 'redux'
import formReducer from '../reducers/formReducer'
import weatherReducer from '../reducers/weatherReducer'


export default combineReducers ({
    form:formReducer,
    weather:weatherReducer
})

