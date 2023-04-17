import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.COLORS.PINK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  border: 0;
  padding: 0 16px;
  margin-top: 24px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;

  &:disabled {
    opacity: 0.5;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;