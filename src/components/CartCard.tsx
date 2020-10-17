import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card as MuiCard } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from './Button';
import Typography from './Typography';
import { Cart } from '../types';
import { format } from 'date-fns';
import PeopleIcon from './icons/PeopleIcon';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      boxSizing: 'border-box',
      border: `1px solid ${palette.border.main}`,
      minWidth: 275,
      padding: 16,
    },
    content: {
      padding: '0!important',
    },
    peopleRow: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      color: palette.text.secondary,
    },
    peopleIcon: {
      height: '16px',
    },
  })
);

interface Props {
  cart: Cart;
}

const CartCard: React.FC<Props> = ({ cart }: Props) => {
  const classes = useStyles();

  return (
    <MuiCard className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography variant="h4" gutterBottom>
          {cart.ownerId}&apos;s cart
        </Typography>
        <Typography>
          {cart.type === 'delivery' ? 'Delivery' : 'Pickup'} from {cart.storeId}
        </Typography>
        <Typography>Order by {format(cart.orderTime, 'p')}</Typography>
        <Typography>Delivered by {format(cart.deliverTime, 'p')}</Typography>
        <Typography>
          {cart.itemLimit} item{cart.itemLimit === 1 ? '' : 's'} max
        </Typography>
        <div className={classes.peopleRow}>
          <PeopleIcon className={classes.peopleIcon} />
          <Typography>
            {cart.numPeople}/{cart.maxPeople}
          </Typography>
        </div>
      </CardContent>
    </MuiCard>
  );
};
export default CartCard;
