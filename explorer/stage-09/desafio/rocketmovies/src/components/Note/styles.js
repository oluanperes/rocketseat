import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 222px;
  background: rgba(255, 133, 155, 0.05);

  border: none;
  border-radius: 10px;
  padding: 22px;
  margin-bottom: 16px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }

  .description {
    width: 100%;
    height: 50px;
    overflow: hidden;
    
    margin: 15px 0 ;
    
    p {
      text-align: justify;
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

`;