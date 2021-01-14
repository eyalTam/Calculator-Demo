import {
    SET_NUMBER_UPDATE,
    SET_CLEAR_CALCULATOR,
    SET_RESULT,
    SET_NEW_CALCULATION_METHOD,
} from '../../actionTypes';


export const calculatorReducer = (state,action) =>{
    switch(action.type){
        case SET_CLEAR_CALCULATOR:
            return {
                screenValue:0,
                prevNumber:0,
                currentNumber:0,
                method:null
            }
        case SET_RESULT:
            return {
                screenValue:action.screenValue,
                prevNumber:0,
                currentNumber:action.screenValue,
                method:null
            }
        case SET_NEW_CALCULATION_METHOD:
            return {
                screenValue:action.screenValue,
                prevNumber:action.screenValue,
                currentNumber:0,
                method:action.method
            }
        case SET_NUMBER_UPDATE:
            return {
                ...state,
                currentNumber:action.currentNumber,
                screenValue:action.currentNumber
            }
        default:
            return state;
    }
}