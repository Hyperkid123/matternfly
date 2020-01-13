import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '../src/button';
import theme from '../src/pf-theme';

const Foo = () => (
  <ThemeProvider theme={theme}>
    <Button color="primary" variant="contained" onClick={console.log}>
      Primary
    </Button>
  </ThemeProvider>
);

render(<Foo />, document.getElementById('root'));
