import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import { firestore } from '../firebase/firebase';
import { Cart } from '../types';
import { makeStyles, Grid } from '@material-ui/core';
import CartCard from '../components/CartCard';
import PoweredBy from '../components/PoweredBy';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const SelectCartScreen: React.FC = () => {
  const classes = useStyles();
  const [carts, setCarts] = useState<Cart[]>([]);

  useEffect(() => {
    firestore.collection('carts').onSnapshot(doc => {
      setCarts(
        doc.docs.map(
          cartDoc =>
            ({
              ...cartDoc.data(),
              _id: cartDoc.id,
              orderTime: cartDoc.data().orderTime.toDate(),
              deliverTime: cartDoc.data().deliverTime.toDate(),
            } as Cart)
        )
      );
    });
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h1">Community Cart</Typography>
      <PoweredBy />
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {carts.map(cart => (
          <Grid key={cart._id} item>
            <CartCard cart={cart} />
          </Grid>
        ))}
      </Grid>

      <Button variant="contained" color="primary">
        Start a New Cart
      </Button>
    </div>
  );
};

export default SelectCartScreen;
