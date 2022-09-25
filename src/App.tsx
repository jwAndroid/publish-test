import { memo } from 'react';
import styled from '@emotion/styled';

const Container = styled.div(() => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledText = styled.h1(() => ({
  fontSize: 20,
  color: 'oreange',
}));

function App() {
  return (
    <Container>
      <StyledText>Hello World</StyledText>
    </Container>
  );
}

export default memo(App);
