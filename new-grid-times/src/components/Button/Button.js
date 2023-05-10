import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

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
  }
`;

export default Button;