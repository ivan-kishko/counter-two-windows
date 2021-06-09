import React, {ChangeEvent, useState} from 'react';
import {Button, Grid, makeStyles, TextField, Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(() => ({
    noBorder: {
        border: "none",
    },
}));

type SettingsPropsType = {
    minValue: number
    maxValue: number
    adjustMinValue: (e: ChangeEvent<HTMLInputElement>) => void
    adjustMaxValue: (e: ChangeEvent<HTMLInputElement>) => void
    error: boolean
    setNewCounter: () => void
}

export function Settings(props: SettingsPropsType) {
    const classes = useStyles();

    return (
        <div>
            <Grid item xs={12} style={{
                border: '4px solid black',
                borderRadius: '5px',
                padding: '5px',
                background: 'white',
                flexDirection: "row"
            }}>
                <Grid container style={{height: '100px', width: '400px', background: 'white'}} alignItems={"baseline"}
                      justify={"space-between"}>
                    <Typography variant={"h5"} style={{paddingTop: '30px', color: "black"}}>MAX VALUE:</Typography>
                    <TextField
                        type="number"
                        value={props.maxValue}
                        InputProps={{
                            inputProps: {min: 0, max: 100},
                            classes: {notchedOutline: classes.noBorder}
                        }}
                        variant={"outlined"}
                        size={"small"}
                        style={{
                            backgroundColor: props.error ? 'hotpink' : 'whitesmoke',
                            textAlign: "center",
                            border: props.error ? '2px solid red' : '2px solid black',
                            borderRadius: '5px',
                            outline: "none",
                            marginRight: '2px'
                        }}
                        onChange={props.adjustMaxValue}
                    />
                </Grid>
                <Grid container style={{height: '100px', width: '400px', background: 'white'}} alignItems={"baseline"}
                      justify={"space-between"}>
                    <Typography variant={"h5"} style={{paddingTop: '30px', color: "black"}}>MIN VALUE:</Typography>
                    <TextField
                        type="number"
                        value={props.minValue}
                        InputProps={{
                            inputProps: {min: 0, max: 100},
                            classes: {notchedOutline: classes.noBorder}
                        }}
                        variant={"outlined"}
                        size={"small"}
                        style={{
                            backgroundColor: props.error ? 'hotpink' : 'whitesmoke',
                            textAlign: "center",
                            border: props.error ? '2px solid red' : '2px solid black',
                            borderRadius: '5px',
                            outline: "none"
                        }}
                        onChange={props.adjustMinValue}
                    />
                </Grid>
            </Grid>
            <Grid item xs={12}
                  style={{border: '4px solid black', borderRadius: '5px', padding: '5px', background: 'white'}}>
                <NavLink to={'/counter'} style={{textDecoration: 'none', color: "white"}}>
                    <Button
                        variant={"contained"}
                        size={"large"}
                        color={"secondary"}
                        style={{margin: '5px 15px 5px 15px'}}
                        disabled={props.error}
                        onClick={props.setNewCounter}>SET
                    </Button>
                </NavLink>
            </Grid>
        </div>
    )
}