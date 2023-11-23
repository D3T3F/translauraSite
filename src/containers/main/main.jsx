import React from "react";
import "./main.css";
import { Navbar } from "../../components/navbar/navbar";
import banner from "../../assets/imagens/banner/vansfrente.jpg";
import transporteEscolar from "../../assets/imagens/icons/transporteescolar.png";
import chave from "../../assets/imagens/icons/chave.png";
import locadoravans from "../../assets/imagens/icons/locadoravans.png";
import facebookLogo from "../../assets/imagens/face.png";
import instagramLogo from "../../assets/imagens/insta.png";

const imagens = require.context("../../assets/imagens/galeria", true);
const imageList = imagens.keys().map((image) => imagens(image));

let servicos_lista = [
  {
    titulo: "Transporte",
    logo: transporteEscolar,
    texto: `As vans utilizadas para transporte são veículos versáteis e
		funcionais, projetados especialmente para o transporte de passageiros
		em diferentes contextos. Elas são amplamente utilizadas em diversas
		áreas, como transporte escolar, transporte de funcionários, transporte
		de turistas e até mesmo para serviços de transporte compartilhado.`,
  },
  {
    titulo: "Locadora de Veiculos",
    logo: locadoravans,
    texto: `A locação de veículos pode ser uma ótima opção para quem está viajando
		a turismo ou a negócios e precisa de mobilidade durante sua estadia em
		uma cidade ou país. Além disso, muitas pessoas também optam por alugar
		um carro quando o seu próprio veiculo está em manutenção ou quando
		desejam experimentar um modelo diferente antes de efetuar a compra.`,
  },
  {
    titulo: "Turismo",
    logo: chave,
    texto: `As vans de turismo são veículos projetados especialmente para atender
		às necessidades de grupos que desejam viajar juntos com conforto e
		praticidade. Elas são uma opção popular para passeios turísticos,
		viagens em família, excursões escolares e eventos corporativos.`,
  },
];

export const Main = () => {
  return (
    <Navbar>
      <img src={banner} className="banner" />
      <div className="container-divisor">
        <div className="divisor">SERVIÇOS</div>
      </div>

      <div className="servicos-detalhes">
        {servicos_lista.map((servico) => {
          {
            return (
              <div className="servico-detalhe">
                <div className="titulo-servico">{servico.titulo}</div>
                <div className="logo-servico-container">
                  <img className="logo-servico" src={servico.logo} />
                </div>
                <div className="texto-servico">{servico.texto}</div>
              </div>
            );
          }
        })}
      </div>

      <div className="container-divisor">
        <div className="divisor">GALERIA</div>
      </div>

      <div className="galeria">
        {imageList.map((image) => {
          return <img src={image} />;
        })}
      </div>

      <div className="footer">
        <a
          href="https://www.facebook.com/translaurarioclaro/?locale=pt_BR"
          target="_blank"
        >
          <img src={facebookLogo} />
          FACEBOOK
        </a>
        <a href="https://www.instagram.com/translauravan/" target="_blank">
          <img src={instagramLogo} />
          INSTAGRAM
        </a>
      </div>
    </Navbar>
  );
};
