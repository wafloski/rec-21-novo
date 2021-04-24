import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import UsersList from './UsersList'
import { loadUsers } from '../../redux/actions/usersActions';

const texts = {
  boxTitle: 'Users'
};

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Box mt={4} clone>
        <Paper elevation='2'>
          <Typography variant='h5'>{texts.boxTitle}</Typography>
          <Box p={3}>
            <UsersList />
          </Box>
        </Paper>
      </Box>
    </Container>
  )
};

export default Users;
