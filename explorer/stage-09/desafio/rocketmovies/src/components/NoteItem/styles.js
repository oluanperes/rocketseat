import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  border: ${({theme, isNew}) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
    color: ${({theme}) => theme.COLORS.PINK};

    svg {
      width: 22px;
      height: 24px;
    }
  }

  > input {
    height: 56px;
    max-width: 180px;

    padding: 16px;
    color: ${({theme}) => theme.COLORS.WHITE};
    background: transparent;
    border: none;
    outline: none;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
`;