import React, { useState } from 'react';

const Calculator = () => {
    const [currentOperand, setCurrentOperand] = useState('');
    const [previousOperand, setPreviousOperand] = useState('');
    const [operation, setOperation] = useState('');

    // Update the display
    const updateDisplay = () => currentOperand;

    // Append number to currentOperand
    const appendNumber = (number) => {
        setCurrentOperand(currentOperand + number);
    };

    // Set chosen operand and reset current
    const chooseOperation = (op) => {
        setPreviousOperand(currentOperand);
        setCurrentOperand('');
        setOperation(op);
    };

    // Calculate result
    const calculate = () => {
        let result;
        switch (operation) {
            case '+':
                result = parseFloat(previousOperand) + parseFloat(currentOperand);
                break;
            case '-':
                result = parseFloat(previousOperand) - parseFloat(currentOperand);
                break;
            case 'x':
                result = parseFloat(previousOperand) * parseFloat(currentOperand);
                break;
            case '/':
                result = parseFloat(previousOperand) / parseFloat(currentOperand);
                break;
            default:
                return;
        }
        setCurrentOperand(result.toString());
    };

    // Clear all
    const clear = () => {
        setCurrentOperand('');
        setPreviousOperand('');
        setOperation('');
    };

    // Handle button clicks for numbers
    const handleNumberClick = (number) => {
        appendNumber(number);
    };

    // Handle operator clicks
    const handleOperatorClick = (operator) => {
        chooseOperation(operator);
    };

    return (
        <div className="calculator">
            <input type="text" id="display" value={updateDisplay()} readOnly />
            <div className="key-container">
                <div className="number-keys">
                    {['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'].map((num) => (
                        <button
                            key={num}
                            className="number"
                            onClick={() => handleNumberClick(num)}
                        >
                            {num}
                        </button>
                    ))}
                </div>
                <div className="keys">
                    {['+', '-', 'x', '/'].map((op) => (
                        <button
                            key={op}
                            className="operator"
                            onClick={() => handleOperatorClick(op)}
                        >
                            {op}
                        </button>
                    ))}
                    <button id="decimal" onClick={() => handleNumberClick('.')}>
                        .
                    </button>
                    <button id="clear" onClick={clear}>
                        C
                    </button>
                    <button id="calculate" onClick={calculate}>
                        =
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
