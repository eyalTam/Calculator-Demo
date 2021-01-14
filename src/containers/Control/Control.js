import React /*, { useContext }*/  from 'react';
// import { CalculatorContext } from '../Context/CalculatorContext';
import Auxiliary from '../../components/hoc/Auxiliary';
import Backdrop from '../../components/BackDrop/Backdrop';
import CalculatorControl from '../../components/Calculator/CalculatorControl/CalculatorControl';

const Control = () => {
    
    return (
        <Auxiliary>
            <Backdrop />
            <CalculatorControl />
        </Auxiliary>
    );
}

export default Control;