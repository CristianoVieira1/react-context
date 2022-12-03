import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  max-width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 40px 0;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.section`
  position: relative;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Card = styled.div`
  position: relative;
  width: 21.2rem;
  color: ${({ theme }) => theme.colors.white};
  height: 210px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  margin: 40px 50px;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

export const ImgBox = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(255, 255, 255, 0.1);
  width: calc(100% - 20px);
  height: calc(100% - 20px);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.1);
  transition: 0.5s ease-in-out;
  backdrop-filter: blur(20px);

  &:hover {
    width: 150px;
    height: 150px;
    left: -75px;
    top: calc(50% - 75px);
    transition: 0.5s ease-in-out;
  }
`;

export const Content = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  padding: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 15px;
  margin-bottom: 5px;
  font-weight: 500;
`;
