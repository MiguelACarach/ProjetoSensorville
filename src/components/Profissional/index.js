import React from 'react';
import { Content, Footer } from './styles';
import Header from '../../components/Header';

export default function Profissional() {
  return (
    <>
      <Header />
      <Content id="sobre">
        <div class="fundo">
          <img src={require('../../assets/Profissionalpag.png')} alt="1" />
        </div>
        <section class="sessao-1">
          <div class="imagens">
            <div class="imagem1">
              <img src={require('../../assets/3.jpeg')} alt="1" />
            </div>
            <div class="imagem2">
              <img src={require('../../assets/4.png')} alt="2" />
            </div>
          </div>
        </section>

        <section class="sessao-2">
          <div class="conteudo">
            <div class="sessao-conteudo">
              <h1>Minha trajetória acadêmica e profissional</h1>
              <p>
                Durante minha graduação, estava em busca de algo relacionado a
                robótica, para fazer uma iniciação científica, no meu segundo
                ano achei outro tema que me interessou era relacionado a
                hardware a proposta da iniciação era medir o consumo de um
                cluster de raspberry, durante 1 ano fiz me envolvi nesse
                projeto, o qual apresentei no eaic. Como não consegui algo
                especificamente com robótica e automação dentro da faculdade
                realizei um curso de arduino, onde construí e programei inúmeros
                projetos de automação um deles foi a criação de um carrinho
                autônomo e também controlado por Bluetooth. Além disso no ano de
                2022 apresentei meu TCC, o qual era voltado a acessebilidade,foi
                uma experiência incrível e de muito aprendizado, uma vez que
                conheci a tecnologia assistiva e notei que muitas das linguagens
                não dão o devido suporte para as pessoas com deficiência visual
                ( grupo focado no TCC).
              </p>
            </div>
            <div class="sessao-estagio">
              <h3>Estágio e a MDecor3D:</h3>
              <p>
                Já trabalhei como professor de robótica no Clube da Robótica/
                Colégio SEPAM em Ponta Grossa-PR, juntamente com o Clube
                desenvolvi alguns projetos com a CARGILL, TratorNew e algumas
                outras empresas na área de automação e programação, alguns deles
                saíram do papel outros não. Além disso, durante esse período fui
                técnico de algumas equipes que participaram da OBR- Olimpíada
                Brasileira de Robótica, com uma delas nos classificamos em
                primeiro lugar no paraná e com isso avançamos para a etapa
                nacional. Também neste estágio tive algumas experiência com
                impressão em 3D a qual gostei muito, devido a isso iniciei um
                projeto de uma loja voltada a artigos de decoração em impressões
                3D, a loja se chama MDecor3D e está a 4 meses em fucionamento.
              </p>
            </div>
          </div>
        </section>
      </Content>
      <Footer>
        <span>Miguel Angelo Carach ® Engenharia de Computação - UEPG.</span>
      </Footer>
    </>
  );
}
