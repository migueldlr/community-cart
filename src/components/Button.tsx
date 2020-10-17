import React from 'react';

import { Button as MuiButton } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { CreateCSSProperties } from '@material-ui/core/styles/withStyles';

import { typographyStyles } from './Typography';

type Props = Omit<React.ComponentProps<typeof MuiButton>, 'size'>;

const useStyles = makeStyles(({ palette }: Theme) =>
  createStyles({
    root: {
      borderRadius: 8,
      boxShadow: 'none',
      textTransform: 'none',
      '&:hover': { boxShadow: 'none' },
    },
    label: {
      ...typographyStyles.body1,
    },
    contained: {
      padding: '8px 19.5px',
    },
  })
);

const Button: React.FC<Props> = (props: Props) => {
  const { children, ...rest } = props;
  const { root, label, contained } = useStyles();

  return (
    <MuiButton classes={{ root, label, contained }} {...rest}>
      {children}
    </MuiButton>
  );
};

export default Button;
