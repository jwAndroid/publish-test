import React, { memo } from 'react';
import styled from '@emotion/styled';

const Text = styled.h1(({ theme }) => ({
  fontSize: 20,
  color: theme.color.black,
}));

interface IStyledText {
  children: React.ReactNode;
}

function StyledText({ children }: IStyledText) {
  return <Text>{children}</Text>;
}

export default memo(StyledText);
