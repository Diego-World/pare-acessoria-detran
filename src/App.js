import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Footer from "./Footer";
import Video from "./assests/video.mp4"

const App = () => {
  const settings = {
    dots: true, //: Adiciona indicadores de ponto (dots) na parte inferior do carrossel para mostrar o número de slides e a posição atual.
    infinite: true, // Permite que o carrossel role indefinidamente, indo do último slide de volta para o primeiro e vice-versa.
    speed: 500, // Define a velocidade de transição entre slides em milissegundos
    slidesToShow: 1, // Espefciica o número de slides visiveis por vez
    slidesToScroll: 1, //Define quantos slides são rolados de cada vez
    customPaging: function (i) { //Define uma função personalizada para renderizar os pontos (dots). Neste caso, está retornando um botão com a classe 
      return <button className="slick-dot"></button>;
    },
  };

  return (
    <div>
      <div className="content">
        <div className="carousel-container">
          <Slider {...settings}>
            <div>
              <img
                src="https://msvisao.com.br/wp-content/uploads/2022/07/Exame-de-Vista-Do-Detran-1920x1080-1.jpg"
                alt="Slide 1"
                style={{ objectFit: "fill", width: "100%", height: "50vh" }}
              />
            </div>
            <div>
              <img
                src="https://www.sp.sindautoescola.org.br/assets/img/procedimentos-notificacoes-indice-detran.jpg"
                alt="Slide 2"
                style={{ objectFit: "fill", width: "100%", height: "50vh" }}
              />
            </div>
            <div>
              <img
                src="https://jcconcursos.com.br/media/uploads/noticia/teste-de-direcao-detran-1.jpg"
                alt="Slide 3"
                style={{ objectFit: "fill", width: "100%", height: "50vh" }}
              />
            </div>
          </Slider>
        </div>
        <div className="content-container">
          <div className="carousel-text">
            <h1>Paré assessoria de Trânsito</h1>
            <h2>Samuel Paré</h2>
            <p>
              O gato miau é um gato que gosta de miar, ele mia no campo de
              batalha ajudando seus companheiros gatos a lutar na guerra.
              <br></br>Ele tem esse olhar por conta das coisas que viu em suas
              batalhas, o olhar de mil milhas
            </p>
          </div>
          <div className="foto">
            <img
              src="https://uploaddeimagens.com.br/images/004/683/232/original/266420070_152376794123835_6409764820570823668_n.png?1701825124"
              alt="foto"
            />
          </div>
          <div className="video-background">
            <video autoPlay muted loop>
              <source src={Video} type="video/mp4" />
              Seu navegador não suporta o elemento de vídeo.
            </video>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
