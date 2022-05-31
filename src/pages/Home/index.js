import React from 'react';
import { Content, Container, Footer } from './styles';
import { Helmet } from 'react-helmet';

import Button from '../../components/Button';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Miguel Angelo Carach, 22 anos! Engenharia de Computação - UEPG.
        </title>
      </Helmet>
      <Container id="Home">
        <div class="imagem1">
          <img src={require('../../assets/Pessoal.png')} alt="1" />
        </div>
        <div class="imagem2">
          <img src={require('../../assets/Profissional.png')} alt="2" />
        </div>
        <div class="conteudo">
          <h1 className="titulo">
            Olá, bem vindo ao meu site, nele você irá me conhecer melhor
          </h1>
        </div>
        <Content>
          <div className="banner1">
            <h3 className="title1">Venha conhecer</h3>
            <h4 className="title2">minha Trajetória</h4>
            <h3 className="title1">pessoal</h3>
            <a className="pessoal" href="/pessoal">
              <Button>Saiba sobre</Button>
            </a>
          </div>
          <div className="banner2">
            <h3 className="title1">Venha conhecer </h3>
            <h4 className="title2">minha Trajetória</h4>
            <h3 className="title1">profissional</h3>
            <a className="profissional" href="/profissional">
              <Button>Saiba sobre</Button>
            </a>
          </div>
        </Content>
      </Container>
      <Footer>
        <span>Miguel Angelo Carach ® Engenharia de Computação - UEPG.</span>
      </Footer>
    </>
  );
}
