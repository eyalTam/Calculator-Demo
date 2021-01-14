import React , { useContext } from 'react';
import { CalculatorContext } from '../../../containers/Context/CalculatorContext/CalculatorContext';
import '../../Calculator/CalculatorScreen/CalculatorScreen.modules.css';

const CalculatorScreen = () => {

    const calculatorContext = useContext(CalculatorContext);

    return (
        <div className='screen_style'>
            <h1 className="screen_content"> 
                {calculatorContext.screenValue}
            </h1>
        </div>
    )}

export default CalculatorScreen;