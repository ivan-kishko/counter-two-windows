import React, {useState} from 'react';
import {Button, Grid, Paper, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

type CounterPropsType = {
    counterValue: number
    incrementCounter: () => void
    resetCounter: () => void
    maxValue: number
    minValue: number
}

export function Counter(props: CounterPropsType) {

    return (
        <div>
            <Grid item xs={12}
                  style={{border: '4px solid black', borderRadius: '5px', padding: '5px', background: 'white'}}>
                <Paper elevation={0} style={{height: '200px', width: '400px', background: 'white'}}>
                    <Typography
                        variant={"h1"}
                        style={{
                            paddingTop: '40px',
                            color: props.counterValue === props.maxValue ? 'red' : 'black',
                        }}>{props.counterValue}</Typography>
                    <span>min value: {props.minValue} |</span><span> max value: {props.maxValue}</span>
                </Paper>
            </Grid>
            <Grid item xs={12}
                  style={{border: '4px solid black', borderRadius: '5px', padding: '5px', background: 'white'}}>
                <Button
                    variant={"contained"}
                    size={"large"}
                    color={"primary"}
                    style={{margin: '5px 15px 5px 15px'}}
                    onClick={props.incrementCounter}
                    disabled={props.counterValue === props.maxValue}>INC</Button>
                <Button variant={"contained"} size={"large"} color={"primary"} style={{margin: '5px 15px 5px 15px'}}
                        onClick={props.resetCounter}>RESET</Button>
                <NavLink to={'/settings'} style={{textDecoration: 'none', color: "white"}}>
                    <Button variant={"contained"} size={"large"} color={"secondary"}
                            style={{margin: '5px 15px 5px 15px'}}>SET</Button>
                </NavLink>
            </Grid>
        </div>
    )
}