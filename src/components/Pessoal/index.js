import React from 'react';
import { Content, Footer } from './styles';
import Header from '../../components/Header';

export default function Pessoal() {
  return (
    <>
      <Header />
      <Content id="sobre">
        <div class="fundo">
          <img src={require('../../assets/Pessoalpag.png')} alt="1" />
        </div>
        <div class="sessao-1">
          <div class="imagens">
            <div class="imagem1">
              <img src={require('../../assets/1.png')} alt="1" />
            </div>
            <div class="imagem2">
              <img src={require('../../assets/2.png')} alt="2" />
            </div>
          </div>
        </div>

        <section class="sessao-2">
          <div class="conteudo">
            <div class="sessao-conteudo">
              <h1>Conhecendo um pouco mais sobre mim</h1>
              <video
                width="200"
                height="380"
                loop="true"
                autoplay="true"
                controls
              >
                <source
                  src={require('../../assets/video.mp4')}
                  type="video/mp4"
                />
              </video>
            </div>
            <div class="sessao-hobby">
              <h3>Hobby:</h3>
              <p>
                Como hobby gosto de mexer com impressão 3D, jogar basquete,
                viajar com minha família, pescar, ir para academia, me exercitar
                e algumas vezes gosto de jogar CSGO. Além disso gosto de fazer
                coisas práticas, como montar carros usando arduino e mexer com
                alguns projetos de automação residencial, os quais estou
                aprendendo.
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
