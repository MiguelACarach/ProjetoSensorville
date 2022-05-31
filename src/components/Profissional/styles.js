import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;
  height: calc(100% - 40px);
  display: grid;
  grid-template-columns: 50% 50%;
  .fundo {
    top: 0;
    position: absolute;
    width: 100%;
    height: calc(100% - 40px);
    left: 0;
    img {
      opacity: 0.22;
      position: relative;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  .sessao-1 {
    position: relative;
    z-index: 2;
    height: calc(100% - 40px);
    .imagens {
      .imagem1 {
        height: 100%;
        margin: 140px auto auto 70px;
        img {
          width: auto;
          height: 320px;
          border-radius: 15px;
          object-fit: contain;
        }
      }
      .imagem2 {
        height: 100%;
        margin: 30px auto auto 420px;
        img {
          width: 79%;
          height: 300px;
        }
      }
    }
  }

  .sessao-2 {
    position: relative;
    z-index: 2;
    height: calc(100% - 40px);
    margin: 50px 30px auto auto;
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
        color: black;
        text-shadow: 2px 2px 4px #000000;
      }
      .sessao-estagio h3 {
        font-family: 'Rubik', sans-serif;
        font-weight: 200;
        align-items: center;
        margin-bottom: 8px;
        font-size: 2rem;
        color: #2e2e2e;
        padding-left: 16rem;
        margin: 60px auto auto 10px;
        color: black;
        text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
      }
      .sessao-estagio p {
        font-family: 'Rubik', sans-serif;
        font-weight: 400;
        justify-content: center;
        font-size: 1.5rem;
        margin-top: 8px;
        color: #2e2e2e;
        padding-left: 1rem;
        color: black;
        text-shadow: 2px 2px 4px #000000;
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
