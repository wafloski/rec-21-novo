import styled from 'styled-components';

import { colors } from '../defaultTheme';

import Typography from '@material-ui/core/Typography';

export const FooterWrapper = styled.footer`
  background-color: ${colors.footerBg};
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  border-top: 1px solid ${colors.borderGray};
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const FooterContent = styled(Typography)`
  color: ${colors.primary};
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 2px;
  font-weight: 500;
  text-transform: uppercase;
`;
