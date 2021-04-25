import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUsers } from '../../redux/actions/usersActions';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import * as S from './Users.styles';
import UsersList from './UsersList';

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
      <Box mt={4} mb={8} clone>
        <Paper elevation='2'>
          <S.PageTitleWrapper>
            <Typography variant='h5'>{texts.boxTitle}</Typography>
          </S.PageTitleWrapper>
          <Box>
            <UsersList />
          </Box>
        </Paper>
      </Box>
    </Container>
  )
};

export default Users;
