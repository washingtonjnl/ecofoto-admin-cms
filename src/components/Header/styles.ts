import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.header`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 20px;
    color: ${props => props.theme.colors.primary};
  }

  div {
    display: flex;
    align-items: center;
  }

  button {
    display: flex;
    align-items: center;

    border: 0;
    border-radius: 5px;
    padding: 12px 14px;

    font-weight: bold;

    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.background};

    &:last-child {
      background: none;
      color: ${props => props.theme.colors.primary};

      &:hover {
        background: ${props => lighten(0.35, props.theme.colors.primary)};
      }
    }

    & + button {
      margin-left: 20px;
    }

    &:hover {
      opacity: 0.9;
    }

    svg {
      margin-right: 5px;
    }
  }
`;
