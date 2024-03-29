import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <RightHeader>
        <SearchInput />
        <HelpLink href='/help'>Help</HelpLink>
        <UnstyledButton>
          <Icon id='shopping-bag' strokeWidth={1} />
        </UnstyledButton>
      </RightHeader>
    </Wrapper>
  );
};

const RightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20%;
  padding: 10px 35px;
  gap: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  display: flex;
  align-items: center;
  padding-left: 32px;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
