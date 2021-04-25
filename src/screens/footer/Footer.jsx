import React from 'react';
import Container from '@material-ui/core/Container/Container';

import * as S from './Footer.styles';

const texts = {
  appName: '© Users app'
};

const Footer = () => (
  <S.FooterWrapper>
    <Container maxWidth='lg'>
      <S.FooterContent variant='h5'>
        {texts.appName}
      </S.FooterContent>
    </Container>
  </S.FooterWrapper>
);

export default Footer;
