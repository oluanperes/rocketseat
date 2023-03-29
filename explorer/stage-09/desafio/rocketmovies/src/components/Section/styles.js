import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;

    > h2 {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      font-size: 32px;
      font-weight: 400;
    }

    > button {
      width: 207px;
      height: 48px;
    }
  }


`;