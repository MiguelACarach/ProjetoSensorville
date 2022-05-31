import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  width: 100%;
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: center;
  .conteudo {
    margin-top: 150px;
    position: relative;
    z-index: 2;
    border-bottom: solid 3px #2e2e2e;
    margin-bottom: 8px;
    .titulo {
      margin-top: 0;
      text-align: center;
    }
  }
  .imagem1 {
    top: 0;
    position: absolute;
    width: 50%;
    height: calc(100% - 40px);
    left: 0;
    img {
      opacity: 0.5;
      position: relative;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .imagem2 {
    top: 0;
    position: absolute;
    width: 50%;
    height: calc(100% - 40px);
    right: 0;
    img {
      opacity: 0.5;
      position: relative;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  justify-content: center;
  position: relative;
  display: grid;
  grid-template-columns: 30% 30%;
  grid-row-gap: 50px;
  margin-top: 180px;
  .banner1 {
    position: relative;
    margin: auto;
    .title1 {
      text-align: center;
      font-size: 2.7rem;
      font-weight: 200;
      line-height: 3rem;
      margin-bottom: 0rem;
      animation: moveBanner 1s 0.5s forwards;
    }
    .title2 {
      color: #c02f11;
      text-align: center;
      font-size: 2.7rem;
      font-weight: 200;
      line-height: 3rem;
      margin-bottom: 0rem;
      animation: moveBanner 1s 0.5s forwards;
    }
    .pessoal {
      display: flex;
      justify-content: center;
      width: 200px;
      margin: 30px auto auto auto;
      transition: transform 0.2s;
      :hover {
        transform: scale(1.1);
      }
    }
  }
  .banner2 {
    .title1 {
      text-align: center;
      font-size: 2.7rem;
      font-weight: 200;
      line-height: 3rem;
      margin-bottom: 0rem;
      animation: moveBanner 1s 0.5s forwards;
    }
    .title2 {
      color: #c02f11;
      text-align: center;
      font-size: 2.7rem;
      font-weight: 200;
      line-height: 3rem;
      margin-bottom: 0rem;
      animation: moveBanner 1s 0.5s forwards;
    }
    .profissional {
      display: flex;
      justify-content: center;
      width: 200px;
      margin: 30px auto auto auto;
      transition: transform 0.2s;
      :hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 40px;
  display: flex;
  bottom: 0;
  justify-content: center;
  position: absolute;
  span {
    margin: auto;
  }
`;
