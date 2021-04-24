import React from 'react';
import { useSelector } from 'react-redux';

import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import * as S from './UsersList.styles';

const UsersList = () => {
  const users = useSelector(state => state.users.data);

  return (
    <List>
      {users.map(user => (
        <S.UserItem key={`user-${user.id}`}>
          <Box>
            <S.UserItemInfo variant='subtitle1'>{`ID: ${user.id}`}</S.UserItemInfo>
            <S.UserItemContent
              primary={<S.UserItemName variant='h5'>{`${user.first_name} ${user.last_name}`}</S.UserItemName>}
              secondary={<S.UserItemInfo variant='subtitle1'>{user.email}</S.UserItemInfo>}
            />
          </Box>
          <ListItemAvatar>
            <S.UserItemAvatar alt={`avatar-${user.first_name}${user.last_name}`} src={user.avatar} />
          </ListItemAvatar>
        </S.UserItem>
      ))}
    </List>
  )
};

export default UsersList;
