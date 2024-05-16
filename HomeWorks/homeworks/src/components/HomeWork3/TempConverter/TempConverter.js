import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './TempConverter.css';

function TempConverter() {
    const [stateCelsius, setStateCelsius] = useState('');
    const [stateFahrenheit, setStateFahrenheit] = useState('');
    const [activeInput, setActiveInput] = useState(null);

    const handleInputChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setActiveInput(id);
        if (id === 'celsius') {
            setStateCelsius(value);
            setStateFahrenheit('');
        } else if (id === 'fahrenheit') {
            setStateFahrenheit(value);
            setStateCelsius('');
        }
    }

    const handleConvert = (e) => {
        if (activeInput === 'celsius') {
            const celsiusValue = parseFloat(stateCelsius);
            if (!isNaN(celsiusValue)) {
                const fahrenheit = celsiusValue * 9 / 5 + 32;
                setStateFahrenheit(fahrenheit);
            } else {
                alert('Enter number!');
                setStateCelsius('');
            }
        } else if (activeInput === 'fahrenheit') {
            const fahrenheitValue = parseFloat(stateFahrenheit);
            if (!isNaN(fahrenheitValue)) {
                const celsius = (fahrenheitValue - 32) * 5 / 9;
                setStateCelsius(celsius);
            } else {
                alert('Enter number!');
                setStateFahrenheit('');
            }
        }
    }


    return (
        <div className="temp-converter-wrap">
            <TextField
                id="celsius"
                label={`Temperature (\u00B0C)`}
                variant="outlined"
                value={stateCelsius}
                onChange={handleInputChange}
            />
            <TextField
                id="fahrenheit"
                label={`Temperature (\u00B0F)`}
                variant="outlined"
                value={stateFahrenheit}
                onChange={handleInputChange}
            />
            <Button variant="contained" onClick={handleConvert}>Convert</Button>
        </div>
    );
}

export default TempConverter;
