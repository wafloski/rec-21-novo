import styled from 'styled-components';

import { colors } from '../defaultTheme';

import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

export const AppBarWrapper = styled(AppBar)`
  background-color: ${colors.primary};
  box-shadow: none;
`;

export const TopBar = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

export const AppTitle = styled(Typography)`
  line-height: 28px;
`;

export const AppLogo = styled(PeopleOutlineIcon)`
  width: auto;
  height: 48px;
  margin-right: 15px;
`;
