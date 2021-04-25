import React from 'react';
import { useSelector } from 'react-redux';

import Box from '@material-ui/core/Box';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import * as S from './UsersList.styles';

const texts = {
  noUsers: 'There are no users.'
};

const UsersList = ({ openAddUserForm }) => {
  const users = useSelector(state => state.users.data);

  return (
    <S.UsersListWrapper>
      {users
        ? users.map(user => (
          <S.UserItem key={`user-${user.id}`} onClick={() => openAddUserForm(user)}>
            <Box>
              <S.UserItemInfo variant='subtitle1'>{`ID: ${user.id}`}</S.UserItemInfo>
              <S.UserItemContent
                primary={<S.UserItemName variant='h5'>{`${user.first_name} ${user.last_name}`}</S.UserItemName>}
                secondary={<S.UserItemInfo component='span'>{user.email}</S.UserItemInfo>}
              />
            </Box>
            <ListItemAvatar>
              <S.UserItemAvatar alt={`avatar-${user.first_name}${user.last_name}`} src={user.avatar}/>
            </ListItemAvatar>
          </S.UserItem>
        ))
        : texts.noUsers
      }
    </S.UsersListWrapper>
  )
};

export default UsersList;
