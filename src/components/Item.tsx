import React, { useState } from 'react';
import { connect } from 'react-redux';
import Typography from './Typography';
import Grid from '@material-ui/core/Grid';
import banana from '../assets/banana.png';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
interface Props {}
const Item: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <ListItemAvatar>
        <Avatar>
          <img src={banana} alt="banana" />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="banana" secondary="$10.00" />
    </React.Fragment>
  );
};

export default Item;
