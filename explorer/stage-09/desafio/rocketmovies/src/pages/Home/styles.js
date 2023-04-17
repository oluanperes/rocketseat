import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
  
  > main {
    grid-area: content;
    overflow-y: hidden;
    padding: 0 124px;
  }
`;

export const Content = styled.main`
  
  .notes {
    height: 68vh;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-right: 8px;
    overflow-y: auto;
    
    /*  SCROLL  */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.PINK};
      border-radius: 8px;
    }
  }
`;

export const Section = styled.section`
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  > h1 {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 32px;
    font-weight: 400;
    line-height: 42.2px;
  }

  > button {
    width: 207px;
    height: 48px;
    margin-top: 0;
  }
`;