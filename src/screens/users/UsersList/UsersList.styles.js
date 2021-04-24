import styled from 'styled-components';
import { colors } from '../../defaultTheme';

import { Typography } from "@material-ui/core";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

export const UserItem = styled(ListItem)`
  border: 1px solid ${colors.borderGray};
  border-radius: 6px;
  cursor: pointer;
  transition: .25s;
  margin-bottom: 20px;
  justify-content: space-between;
  padding: 16px;
  
  &:hover {
    background-color: ${colors.hoverGray};
  }
`;

export const UserItemInfo = styled(Typography)`
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: 20px;
  color: ${colors.textGray};
`;

export const UserItemContent = styled(ListItemText)`
  margin-top: 4px;
`;

export const UserItemName = styled(Typography)`
  margin-bottom: 8px;
`;

export const UserItemAvatar = styled(Avatar)`
  width: 103px;
  height: 84px;
  border-radius: 0;
`;