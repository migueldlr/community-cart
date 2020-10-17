import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '../components/Button';
import Item from '../components/Item';
import Typography from '../components/Typography';

import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Grid from '@material-ui/core/Grid';

const Row = (props: ListChildComponentProps) => {
  const { data, index, style } = props;
  // const messageToRender = data[index];

  return (
    <ListItem>
      <Item></Item>
      <ListItemSecondaryAction>
        <Button></Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
interface Props {}

const Order: React.FC<Props> = (props: Props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });
  const subtotal = 5;
  return (
    <React.Fragment>
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <Typography>Items added to Seth&apos;s cart</Typography>
        </Grid>
        <Grid item>
          <List height={800} itemCount={10} itemSize={35} width={'25vw'}>
            {Row}
          </List>
        </Grid>
        <Grid item>
          <ListItem>
            <ListItemText
              primary="Subtotal:"
              secondary={formatter.format(subtotal)}
            ></ListItemText>
          </ListItem>
        </Grid>
        <Grid item>
          <Button>Checkout</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Order;
