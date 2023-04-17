import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  main {
    grid-area: content;
    padding: 38px 124px;
    overflow: hidden;
  }

  .tags {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 16px;
    border-radius: 8px;
  }
`;

export const Form = styled.form`
  width: 100%;
  max-height: 80vh;
  padding-right: 16px;

  > header {
    margin-bottom: 40px;

    a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
      font-size: 24px;
    }
  }

  h1 {
    margin-top: 24px;
    font-size: 36px;
    font-weight: 500;
  }

  .container-title {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 40px;
  }

  .container-buttons {
    display: flex;
    align-items: center;
    gap: 40px;

    > button {
      margin-top: 0;
    }
    
    > button:nth-child(1) {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  /*  SCROLL  */
  overflow-y: auto;
      
      &::-webkit-scrollbar {
        width: 8px;
      }
      &::-webkit-scrollbar-track {
        background: transparent
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
      }
`;