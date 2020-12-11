import styled from 'styled-components';

export const Container = styled.div`
  min-width: 100vw;
  max-width: 960px;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 28px;
  }

  h2 {
    margin-top: 12px;
    font-weight: normal;
    font-size: 18px;

    b {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const NotAuthorized = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: normal;
    font-size: 20px;
    text-align: center;
  }
`;
