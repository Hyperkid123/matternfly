import React from 'react';
import { render } from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Button from '../src/button';
import theme from '../src/pf-theme';

const Foo = () => (
  <ThemeProvider theme={theme}>
    <Button variant="primary" onClick={console.log}>
      Primary
    </Button>
    &nbsp;
    <Button variant="secondary" onClick={console.log}>
      Secondary
    </Button>
    &nbsp;
    <Button variant="tertiary" onClick={console.log}>
      Tertiary
    </Button>
    &nbsp;
    <Button variant="danger" onClick={console.log}>
      Danger
    </Button>
    &nbsp;
    <Button variant="control" onClick={console.log}>
      Control
    </Button>
    &nbsp;
    <Button variant="link" onClick={console.log}>
      Link button
    </Button>
  </ThemeProvider>
);

render(<Foo />, document.getElementById('root'));
