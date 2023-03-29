import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  height: 116px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 124px;
  gap: 64px;

  > div {
    margin-bottom: 0;
  }
`;

export const Brand = styled.div`
  > h1 {
    font-size: 24px;
    color: ${({theme}) => theme.COLORS.PINK};
  }
`;

export const ContainerProfile = styled.div`
  width: fit-content;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 8px;

  > div {
    display: flex;
    flex-direction: column;
    text-align: right;
    font-size: 14px;

    strong {
      width: max-content;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    a {
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }
`;

export const Profile = styled(Link)`
  > img {
    width: 65px;
    height: 65px;
    border-radius: 50%;
  }
`;