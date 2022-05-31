import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  position: absolute;
  height: calc(100% - 40px);
  display: grid;
  grid-template-columns: 50% 50%;
  .fundo {
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    img {
      opacity: 0.5;
      position: relative;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .sessao-1 {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    .imagens {
      .imagem1 {
        height: 100%;
        margin: 160px auto auto 70px;
      }
      .imagem2 {
        height: 100%;
        margin: 10px auto auto 420px;
      }
    }
  }

  .sessao-2 {
    position: relative;
    z-index: 2;
    height: auto;
    margin: 120px 30px auto auto;
    .conteudo {
      .sessao-conteudo {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .sessao-conteudo h1 {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 2.5rem;
        color: #2e2e2e;
        border-bottom: solid 3px #2e2e2e;
        margin-bottom: 8px;
        color: black;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
      }
      .sessao-conteudo p {
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
        color: #2e2e2e;
        margin-top: 8px;
        padding-left: 1rem;
        justify-content: center;
      }
      .sessao-hobby h3 {
        color: black;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        align-items: center;
        margin-bottom: 8px;
        font-size: 2rem;
        color: #2e2e2e;
        padding-left: 16rem;
        margin: 30px auto auto 10px;
      }
      .sessao-hobby p {
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        justify-content: center;
        font-size: 1.5rem;
        margin-top: 8px;
        color: #2e2e2e;
        padding-left: 1rem;
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
