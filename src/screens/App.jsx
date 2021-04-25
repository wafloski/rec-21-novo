import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TopBar from './topBar';
import Users from './users';
import Footer from './footer';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#EEF0F1',
    minHeight: '100vh',
    position: 'relative'
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TopBar />
      <Users />
      <Footer />
    </div>
  );
};

export default App;
