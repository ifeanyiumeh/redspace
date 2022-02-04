import styled from 'styled-components';

export const AppHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.lightGrey};
  height: 5.5%;
  width: 100vw;
`;

export const MainContentContainer = styled.div`
  height: 94.5%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainContent = styled.div`
  height: 50rem;
  width: 25rem;
  /* background-color: red; */
`;

export const AppContainer = styled.div`
  background-color: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  font-family:  sans-serif;
`;