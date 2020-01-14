import React from 'react';
import MuiButton from '@material-ui/core/Button';

const buttonPropsMapper = {
  primary: {
    color: 'primary',
    variant: 'contained'
  },
  secondary: {
    variant: 'outlined',
    color: 'primary'
  },
  tertiary: {
    variant: 'outlined',
    color: 'secondary'
  },
  danger: {
    color: 'secondary',
    variant: 'contained'
  },
  control: {
    variant: 'outlined'
  },
  link: {}
};

const Button = ({ variant, ...props }) => (
  <MuiButton {...props} {...buttonPropsMapper[variant]} disableRipple />
);

export default Button;
