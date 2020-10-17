import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Typography from '../components/Typography';
import Card from '../components/Card';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/logo.svg';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import { db } from '../firebase/index';

interface Props {}

const SelectCart: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography variant="h1">Community Cart</Typography>
        </Grid>
        <Grid item>
          <img src={logo} className="App-logo" alt="logo" />
        </Grid>
        <div>
          <Grid
            item
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Card></Card>
            </Grid>
            <Grid item>
              <Card></Card>
            </Grid>
            <Grid item>
              <Card></Card>
            </Grid>
            <Grid item>
              <Card></Card>
            </Grid>
            <Grid item>
              <Card></Card>
            </Grid>
            <Grid item>
              <Card></Card>
            </Grid>
          </Grid>
        </div>
        <Grid item>
          <Button variant="contained" color="primary">
            Start a New Cart
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default SelectCart;
