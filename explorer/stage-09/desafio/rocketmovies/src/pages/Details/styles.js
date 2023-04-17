import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: hidden;
    padding: 40px 124px;
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding-right: 16px;
    
  /*  SCROLL  */
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

  > button:first-child {
    align-self: end;
  }

  .highlight {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 24px 0;

    > h1 {
      font-size: 36px;
      font-weight: 500;
    }
  
  }
  .info {
    margin-bottom: 40px;

    img {
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.COLORS.GRAY_900};
    }
  }
  .info, .user-info, .note-info {
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    svg {
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }  

  > p {
    font-size: 16px;
    text-align: justify;
    margin-top: 40px;
  }

`;