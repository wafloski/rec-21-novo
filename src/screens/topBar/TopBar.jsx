import React from 'react';
import Container from '@material-ui/core/Container/Container';

import * as S from './TopBar.styles';

const texts = {
  appName: 'Users app'
};

const TopBar = () => {
  return (
    <S.AppBarWrapper position='static'>
      <Container maxWidth='lg'>
        <S.TopBar>
          <S.AppLogo />
          <S.AppTitle variant='h5'>
              {texts.appName}
          </S.AppTitle>
        </S.TopBar>
      </Container>
    </S.AppBarWrapper>
  );
};

export default TopBar;
