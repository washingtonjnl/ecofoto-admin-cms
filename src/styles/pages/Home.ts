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
  }

  form {
    margin-top: 25px;
    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: 300px;

    label {
      font-size: 16px;
      margin-bottom: 6px;
    }

    input + label {
      margin-top: 14px;
    }

    small {
      margin-top: 10px;
      color: ${props => props.theme.colors.altText};
    }
  }

  input {
    padding: 12px 16px;
    border-radius: 5px;
    border: 1.5px solid ${props => props.theme.colors.inputs};

    color: ${props => props.theme.colors.primary};

    &:focus {
      border: 1.5px solid ${props => props.theme.colors.primary};
      outline: none;
    }
  }

  button {
    margin-top: 30px;
    background: ${props => props.theme.colors.primary};
    border: 0;
    border-radius: 5px;
    padding: 16px 16px;

    color: ${props => props.theme.colors.background};
    font-size: 16px;
    font-weight: bold;

    &:hover {
      opacity: 0.9;
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
