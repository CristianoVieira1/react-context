import styled from "styled-components";

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.darkGray};
`;

export const Card = styled.div`
  width: 60rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacings.small};
  align-items: center;
  box-shadow: 0 0.8rem 1.6rem rgba(255, 255, 255, 0.4);
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.border.radius};
`;

export const List = styled.ul`
  margin-top: ${({ theme }) => theme.spacings.medium};
`;

export const ListItem = styled.li`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.darkPlaceholder};
  font-weight: bold;
  line-height: 1.3rem;
  margin: ${({ theme }) => theme.spacings.xxsmall} 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  margin-bottom: ${({ theme }) => theme.spacings.small};
`;
