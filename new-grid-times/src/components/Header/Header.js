import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        {/* Menu layout for laptop and up */}
        <ButtonGroup>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup> 
        </ButtonGroup>
        {/* Logo for laptop and up */}
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        {/* Subscribe for laptop and up */}
        <Button>Subscribe</Button>
      </MainHeader>
    </header>
  );
};

const Button = styled.button`
  padding: 8px 24px;
  font-size: 1rem;
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family-sans-serif);
  text-transform: uppercase;
  color: var(--color-white);
  background: var(--color-primary);
  border-radius: 4px;

  @media ${QUERIES.laptopAndUp} {
    text-align: center;
    justify-content: end; 
    grid-column: 4 / 5;
    align-self: center;
    justify-self: end;
    max-width: 143px;
  }
`;

const ButtonGroup = styled.button`
  padding: 1px 1px;
`;

const LogoWrapper = styled.div`
  grid-column: 2 / 4;
  place-content: center;
`;

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: revert;
    align-items: revert;
  }
`;

export default Header;
