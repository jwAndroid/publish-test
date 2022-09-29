import styled from '@emotion/styled';
import React, { memo } from 'react';

const Container = styled.div(() => ({
  width: '100%',
  height: 100,
  backgroundColor: 'gray',
}));

function Header() {
  return <Container />;
}

export default memo(Header);
