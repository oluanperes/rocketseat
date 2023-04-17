import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  //height: 218px;
  background: rgba(255, 133, 155, 0.05);

  border: none;
  border-radius: 10px;
  padding: 32px;

  > h2 {
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
  }

  .description {
    width: 100%;
    height: 52px;
    margin: 15px 0;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    text-align: justify;
    overflow: hidden;
  }

  .text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }


  > footer {
    width: 100%;
    display: flex;
  }

`;