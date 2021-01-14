import React from 'react';
import CalculatorDialog from '../../CalculatorDialog/CalculatorDialog';
import CalculatorContainer from '../CalculatorContainer/CalculatorContainer';
import ResultContext from '../../../containers/Context/ResultsContext/ResultsContext';
import Results from '../../Results/Results';

const CalculatorControl = () =>{

    return (
        <div className="main-style cal_box">
            <CalculatorContainer/>
            <ResultContext>
                <CalculatorDialog/>
                <Results/>
            </ResultContext>
        </div>
    )

}

export default CalculatorControl;