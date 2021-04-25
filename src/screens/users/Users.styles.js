import styled from 'styled-components';

import { colors } from '../defaultTheme';

import Box from '@material-ui/core/Box';
import Button from "@material-ui/core/Button";

export const PageTitleWrapper = styled(Box)`
  padding: 20px 24px;
  display: flex;
  justify-content: space-between;
`;

export const AddUserButton = styled(Button)`
  background-color: ${colors.primary};
  color: ${colors.buttonText};
  
  &:hover {
    color: ${colors.primary};
  }
`;
