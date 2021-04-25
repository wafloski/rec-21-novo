import styled, { css } from 'styled-components';

import { colors } from '../defaultTheme';

import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export const AddUserFormContainer = styled(Paper)`
  margin: 0 auto;
  width: 432px;
  height: 388px;
  background-color: #fff;
  position: relative;
`;

export const BackButton = styled(ChevronLeftIcon)`
  position: absolute;
  top: 24px;
  left: 12px;
  width: 28px;
  height: 28px;
  color: ${colors.textGray};
  cursor: pointer;
`;

export const FormWrapper = styled.div`
  padding: 24px 24px 24px 52px;
`;

export const FormTitle = styled(Typography)`
  line-height: 28px;
  margin-bottom: 28px;
`;

export const FormInput = styled(TextField)`
  margin-bottom: 28px;
  width: 100%;
  
  label {
    span {
      display: none;
    }
  }
`;

export const ButtonsWrapper = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export const SubmitButton = styled(Button)`
  margin-left: 16px;
  ${props => props.enabled
    ? css`
        background-color: ${colors.primary};
        color: ${colors.buttonText};
        &:hover {
          color: ${colors.primary};
        }
      `
    : css`
        cursor: not-allowed;
        color: ${colors.buttonDisabledText};
      `
  }
`;
