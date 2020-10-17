import React from 'react';

import { Typography as MuiTypography } from '@material-ui/core';
import { TypographyStyleOptions } from '@material-ui/core/styles/createTypography';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body1'
  | 'subtitle1'
  | 'subtitle2'
  | 'body2'
  | 'h6';

export const typographyStyles: Readonly<Record<
  Variant,
  TypographyStyleOptions
>> = {
  // Large Title
  h1: {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '34px',
    fontStyle: 'normal',
    lineHeight: '40px',
    letterSpacing: '-0.05em',
  },
  // Title 1
  h2: {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '28px',
    fontStyle: 'normal',
    lineHeight: '40px',
    letterSpacing: '-0.043em',
  },
  // Title 2
  h3: {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '23px',
    fontStyle: 'normal',
    lineHeight: '32px',
    letterSpacing: '-0.028em',
  },
  // Title 3
  h4: {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '19px',
    fontStyle: 'normal',
    lineHeight: '32px',
    letterSpacing: '-0.028em',
  },
  // Headline
  h5: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: '16px',
    fontStyle: 'normal',
    lineHeight: '24px',
    letterSpacing: '-0.028em',
  },
  // Body
  body1: {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '16px',
    fontStyle: 'normal',
    lineHeight: '24px',
    letterSpacing: '-0.006em',
  },
  // Subhead
  subtitle1: {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '14px',
    fontStyle: 'normal',
    lineHeight: '24px',
    letterSpacing: '-0.006em',
  },
  // Footnote
  subtitle2: {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '13px',
    fontStyle: 'normal',
    lineHeight: '24px',
  },
  // Caption 1
  body2: {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '12px',
    fontStyle: 'normal',
    lineHeight: '16px',
  },
  // Caption 2
  h6: {
    fontFamily: 'Inter',
    fontWeight: 'normal',
    fontSize: '11px',
    fontStyle: 'normal',
    lineHeight: '16px',
  },
};

type Props = Omit<React.ComponentProps<typeof MuiTypography>, 'variant'> & {
  variant?: Variant;
};

const Typography: React.FC<Props> = ({ children, variant, ...rest }: Props) => {
  const coreVariant: Variant = variant ?? 'body1';

  return (
    <MuiTypography variant={coreVariant} {...rest}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
