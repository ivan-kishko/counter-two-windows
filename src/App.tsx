import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Container, Grid} from "@material-ui/core";
import {Redirect, Route, Switch} from "react-router-dom";
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";

const PATH = {
    COUNTER: '/counter',
    SETTINGS: '/settings'
}

function App() {
    const [minValue, setMinValue] = useState<number>(0)

    const [maxValue, setMaxValue] = useState<number>(5)

    const [counter, setCounter] = useState<number>(minValue)

    //Local storage logic
    //maxvalue useEffect
    useEffect(() => {
        let maxAsString = localStorage.getItem("maxValue")
        if (maxAsString) {
            let newMax = JSON.parse(maxAsString)
            setMaxValue(newMax)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxValue))
    }, [maxValue])

    //minvalue useEffect
    useEffect(() => {
        let minAsString = localStorage.getItem("minValue")
        if (minAsString) {
            let newMin = JSON.parse(minAsString)
            setMinValue(newMin)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("minValue", JSON.stringify(minValue))
    }, [minValue])

    //current value useEffect
    useEffect(() => {
        let currentAsString = localStorage.getItem("currentValue")
        if (currentAsString) {
            let newCurrent = JSON.parse(currentAsString)
            setCounter(newCurrent)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("currentValue", JSON.stringify(counter))
    }, [counter])

    //Counter logic
    const incrementCounter = () => {
        setCounter(counter + 1)
    }

    const resetCounter = () => {
        setCounter(minValue)
    }

    //Settings logic
    const adjustMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value))
    }

    const adjustMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }

    const setNewCounter = () => {
        setCounter(minValue)
    }

    const setErrorValue = () => {
        return minValue >= maxValue
    }

    return (
        <div className="App">
            <Container fixed>
                <Grid container justify={"center"} alignItems={"center"} style={{minHeight: '100vh'}}>
                    <Switch>
                        <Route path={'/'} exact render={() => <Redirect to={PATH.COUNTER}/>}/>

                        <Route path={PATH.COUNTER} render={() => <Counter
                            counterValue={counter}
                            incrementCounter={incrementCounter}
                            resetCounter={resetCounter}
                            maxValue={maxValue}
                            minValue={minValue}
                        />}/>
                        <Route path={PATH.SETTINGS} render={() => <Settings
                            minValue={minValue}
                            maxValue={maxValue}
                            adjustMinValue={adjustMinValue}
                            adjustMaxValue={adjustMaxValue}
                            error={setErrorValue()}
                            setNewCounter={setNewCounter}
                        />}/>
                    </Switch>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
