import React, { useState } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '../components/Typography';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';
import CartSidebar from '../components/CartSidebar';
import Item from '../components/Item';
import logo from '../assets/logo.svg';
import Drawer from '@material-ui/core/Drawer';
import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const Row = (props: ListChildComponentProps) => {
  const { data, index, style } = props;
  // const messageToRender = data[index];

  return (
    <ListItem>
      <Item></Item>
      <ListItemSecondaryAction>
        <Button>Add to Cart</Button>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

interface Props {}
const OrderScreen: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <Drawer anchor="right" variant="permanent">
        <CartSidebar></CartSidebar>
      </Drawer>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography variant="h1">Community Cart</Typography>
        </Grid>
        <Grid item>
          <img src={logo} className="App-logo" alt="logo" />
        </Grid>
        {/* above here is the title and logo. Below are the headers for the table and search bar */}
        <Grid item container>
          <Grid item>
            <Typography>Adding to Seth&apos;s Cart</Typography>
          </Grid>
          <Grid item>
            <SearchBar></SearchBar>
          </Grid>
        </Grid>
        <Grid item>
          <Typography>Items to add:</Typography>
        </Grid>
        {/* The virtual window of items you can add to cart */}
        <Grid item>
          <List height={800} itemCount={10} itemSize={35} width={'70vw'}>
            {Row}
          </List>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default OrderScreen;
