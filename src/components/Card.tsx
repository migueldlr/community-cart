import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card as MuiCard } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from './Button';
import Typography from './Typography';

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      boxSizing: 'border-box',
      border: `1px solid ${palette.border.main}`,
      minWidth: 275,
      padding: 16,
    },
    content: {
      padding: 0,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  })
);

const Card: React.FC = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <MuiCard className={classes.root} variant="outlined">
      <CardContent className={classes.content}>
        <Typography variant="h3" gutterBottom>
          Word of the Day
        </Typography>
        <Typography>Delivery from Publix</Typography>
      </CardContent>
      <CardActions>
        <Button>Learn More</Button>
      </CardActions>
    </MuiCard>
  );
};
export default Card;
