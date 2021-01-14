import React , { useReducer , useState } from 'react';
import { calculatorReducer } from '../../../components/actions/reducers/CalculatorReducer/CalculatorReducer';
import { CLEAR , ADD , SUBTRACT , DIVIDE , MULTIPLE , EQUAL } from '../../../components/actions/calculatorMethods';
export const CalculatorContext = React.createContext();

const CalcContext = props => {

    const initialCalculatorState = {
        screenValue:0,
        prevNumber:0,
        currentNumber:0,
        method: null,
    };

    const[calculatorState, dispatch] = useReducer(calculatorReducer,initialCalculatorState);
    const[prevClickWasMethod, setPrevClickWasMethod] = useState(false);

    const setResultHandler = (newMethod) => {
        if(newMethod === CLEAR){
            dispatch({type:'SET_CLEAR_CALCULATOR'});
            return;
        }
        if(prevClickWasMethod){
            return;
        }
            // setPrevClickWasMethod(true);
        
        const result = setCalculationHandler();
        if(calculatorState.method === null || calculatorState.method === EQUAL){
            dispatch({type:'SET_NEW_CALCULATION_METHOD',method:newMethod,screenValue:calculatorState.screenValue});
        }
        else {
            dispatch({type:'SET_NEW_CALCULATION_METHOD',method:newMethod,screenValue:result});
        }
    }

    const setCalculationHandler=() =>{
        switch(calculatorState.method){
            case ADD:
                return calculatorState.prevNumber + calculatorState.currentNumber;
            case SUBTRACT:
                return calculatorState.prevNumber - calculatorState.currentNumber;
            case MULTIPLE:
                return calculatorState.prevNumber * calculatorState.currentNumber;
            case DIVIDE:
                return calculatorState.currentNumber !== 0 ? calculatorState.prevNumber / calculatorState.currentNumber : 0;
            default:
                return calculatorState.prevNumber;
        }
    }

    const updateNumberHandler = (digit) => {
        const updatedNumber = parseInt(calculatorState.currentNumber + '' + digit);
        dispatch(
            {
                type:'SET_NUMBER_UPDATE',
                currentNumber:updatedNumber,
                method:null
            });
            setPrevClickWasMethod(false);
    }

    return (
        <CalculatorContext.Provider value={{
            ...calculatorState,
            setResult:setResultHandler,
            updateNumber:updateNumberHandler,
            }}>
            {props.children}
        </CalculatorContext.Provider>
    );
    }

export default CalcContext;
