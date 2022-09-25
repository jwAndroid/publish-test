import { memo } from 'react';
import styled from '@emotion/styled';
import { Text } from './components';

const Container = styled.div(() => ({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}));

function App() {
  return (
    <Container>
      <Text>Hello World</Text>
    </Container>
  );
}

export default memo(App);
