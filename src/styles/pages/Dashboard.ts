import styled from 'styled-components';

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 34px;
    color: ${props => props.theme.colors.primary};
    text-align: center;
  }

  h2 {
    margin: 12px 0;
    font-size: 18px;
    font-weight: normal;
    line-height: 20px;
    text-align: center;

    b {
      color: ${props => props.theme.colors.primary};
    }
  }

  a {
    margin-top: 20px;
    font-size: 14px;
    color: ${props => props.theme.colors.primary};
    text-align: center;

    &:hover {
      opacity: 0.9;
    }
  }
`;
