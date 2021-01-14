import React , { useContext } from 'react';
import Button from '../../Button/Button';
import '../../Calculator/CalculatorContainer/Calculator.modules.css';
import { CalculatorContext } from '../../../containers/Context/CalculatorContext/CalculatorContext';

const CalculatorButtons = () => {

    const calculatorContext = useContext(CalculatorContext);
    
    const buttonsContent = (
        <div className = "cal_btns_container">
            
            <Button description='Clear' clicked={()=>calculatorContext.setResult('clear')} extraStyling={'clear_btn'}/>

            <Button description='+' clicked={()=>calculatorContext.setResult('+')} />
            <Button description='-' clicked={()=>calculatorContext.setResult('-')} />
            <Button description='/' clicked={()=>calculatorContext.setResult('/')} />

            <Button description={1} key={1}  clicked={() => calculatorContext.updateNumber(1)}/>
            <Button description={2} key={2}  clicked={() => calculatorContext.updateNumber(2)}/>
            <Button description={3} key={3}  clicked={() => calculatorContext.updateNumber(3)}/>

            <Button description='*' clicked={()=>calculatorContext.setResult('*')}/>
            
            <Button description={4} key={4} clicked={() => calculatorContext.updateNumber(4)}/>
            <Button description={5} key={5} clicked={() => calculatorContext.updateNumber(5)}/>
            <Button description={6} key={6} clicked={() => calculatorContext.updateNumber(6)}/>

            <Button description='=' clicked={()=>calculatorContext.setResult('=')}/>

            <Button description={7} key={7} clicked={() => calculatorContext.updateNumber(7)}/>
            <Button description={8} key={8} clicked={() => calculatorContext.updateNumber(8)}/>
            <Button description={9} key={9} clicked={() => calculatorContext.updateNumber(9)}/>
            <Button description={0} key={0} clicked={() => calculatorContext.updateNumber(0)}/>
        
        </div>
    );

    return buttonsContent;
}

export default CalculatorButtons;