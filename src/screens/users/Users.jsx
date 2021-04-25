import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loadUsers } from '../../redux/actions/usersActions';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import * as S from './Users.styles';
import UsersList from './UsersList';
import AddUserForm from '../addUserForm';

const texts = {
  boxTitle: 'Users',
  addUser: '+ Add user'
};

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const [isAddUserFormOpen, setAddUserFormOpen] = useState(false);

  const openAddUserForm = () => setAddUserFormOpen(true);
  const closeAddUserForm = () => setAddUserFormOpen(false);

  const renderPageContent = () => !isAddUserFormOpen
    ? <Box mt={6}>
        <AddUserForm closeAddUserForm={closeAddUserForm}/>
      </Box>
    : <Box mt={4} mb={8} clone>
        <Paper elevation={2}>
          <S.PageTitleWrapper>
            <Typography variant='h5'>{texts.boxTitle}</Typography>
            <S.AddUserButton
              onClick={openAddUserForm}
              variant='contained'
              size='large'
            >
              {texts.addUser}
            </S.AddUserButton>
          </S.PageTitleWrapper>
          <Box>
            <UsersList />
          </Box>
        </Paper>
      </Box>
  ;

  return (
    <Container maxWidth='lg'>
      {renderPageContent()}
    </Container>
  );
};

export default Users;
