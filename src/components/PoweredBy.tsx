import React from 'react';
import { makeStyles } from '@material-ui/core';
import NCRLogo from './icons/NCRLogo';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: '13px',
    lineHeight: '15px',
    color: 'rgba(60, 60, 67, 0.6)',
  },
  logo: {
    marginLeft: 8,
    width: 36,
  },
});

const PoweredBy: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <p className={classes.text}>Powered by</p>
      <NCRLogo className={classes.logo} />
    </div>
  );
};

export default PoweredBy;
