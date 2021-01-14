import React from 'react';
import CalculatorButtons from '../CalculatorButtons/CalculatorButtons';
import CalculatorScreen from '../CalculatorScreen/CalculatorScreen';
import Auxiliary from '../../hoc/Auxiliary';

const CalculatorContainer = () =>{
    return (
        <Auxiliary>
            <CalculatorScreen />
            <CalculatorButtons />
        </Auxiliary>
    );
}

export default CalculatorContainer;