import React , { useContext } from 'react';
import Button from '../Button/Button';
import '../Calculator/CalculatorContainer/Calculator.modules.css';
import { ResultContext } from '../../containers/Context/ResultsContext/ResultsContext';

const CalculatorDialog = () =>{

    const resContext = useContext(ResultContext);
    
    return <Button 
            description={"Add result to List"}
            clicked={resContext.addResult}
            extraStyling="result_btn_style" />
}

export default CalculatorDialog;