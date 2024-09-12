import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "./TemperatureConverter.css";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function TemperatureConverter() {
    const [valueCelsium, setValueCelsium] = useState(0);
    const [valueFahrenheit, setValueFahrenheit] = useState(0);
    const [convertedValueCelsium, setConvertetValueCelsium] = useState(0);
    const [convertedValueFahrenheit, setConvertedValueFahrenheit] = useState(0);

    const updateValueCelsium = (e) => {
        setValueCelsium((valueCelsium) => e.target.value);
        //
    };

    const convertValueToCelsium = () => {
        setConvertedValueFahrenheit((convertedValueFahrenheit) =>
            Math.round((valueCelsium * 9) / 5 + 32)
        );
    };

    const updateValueFahrenheit = (e) => {
        setValueFahrenheit((valueFahrenheit) => e.target.value);
    };

    const convertValueToFahrenheit = () => {
        setConvertetValueCelsium((convertedValueCelsium) =>
            Math.round(((valueFahrenheit - 32) * 5) / 9)
        );
    };

    return (
        <div className="container">
            <div className="container__elem">
                <TextField
                    fullWidth
                    onChange={updateValueCelsium}
                    id="standard-basic"
                    label="°C"
                />
                <Button
                    onClick={convertValueToCelsium}
                    className="btn"
                    variant="outlined"
                >
                    to Fahrenheit
                </Button>
            </div>
            <Card variant="outlined">
                <CardContent>
                    <Typography>
                        Converted value: {convertedValueFahrenheit}°F
                    </Typography>
                </CardContent>
            </Card>
            <div className="container__elem">
                <TextField
                    fullWidth
                    onChange={updateValueFahrenheit}
                    id="standard-basic"
                    label="°F"
                />
                <Button
                    onClick={convertValueToFahrenheit}
                    className="btn"
                    variant="outlined"
                >
                    to Celsius
                </Button>
            </div>
            <Card variant="outlined">
                <CardContent>
                    <Typography>
                        Converted value: {convertedValueCelsium}°C
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default TemperatureConverter;
