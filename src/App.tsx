import React, { memo } from 'react';
import styled from '@emotion/styled';

import { Header, StyledText } from './components';

const Container = styled.div(() => ({
  flex: 1,
}));

function App() {
  return (
    <Container>
      <Header />

      <StyledText>Hello jw</StyledText>
    </Container>
  );
}

export default memo(App);
