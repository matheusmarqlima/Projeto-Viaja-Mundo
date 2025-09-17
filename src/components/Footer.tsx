import FacebookIcon from "../assets/facebook.svg?react";
import InstagramIcon from "../assets/instagram.svg?react";
import TwitterIcon from "../assets/twitter.svg?react";
import YouTubeIcon from "../assets/youtube.svg?react";
import MapIcon from "../assets/mappin.svg?react";
import PhoneIcon from "../assets/phone.svg?react";
import MailIcon from "../assets/mail.svg?react";
import Subtitle from "./Subtitle";
import type { PropsWithChildren } from "react";

const FooterText = ({ children }: PropsWithChildren) => {
  return <p>{children}</p>;
};

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <h2>Viaja Mundo</h2>
          <FooterText>
            Sua agência de viagens online para descobrir os melhores destinos do
            mundo.
          </FooterText>
          <div>
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#">
              <YouTubeIcon />
            </a>
          </div>
        </div>
        <div>
          <Subtitle>Destinos</Subtitle>
          <FooterText>Europa</FooterText>
          <FooterText>Ásia</FooterText>
          <FooterText>América do Sul</FooterText>
          <FooterText>África</FooterText>
          <FooterText>Oceania</FooterText>
        </div>
        <div>
          <Subtitle>Serviços</Subtitle>
          <FooterText>Pacotes de Viagem</FooterText>
          <FooterText>Hotéis</FooterText>
          <FooterText>Passagens Aéreas</FooterText>
          <FooterText>Seguro Viagem</FooterText>
          <FooterText>Roteiros Personalizados</FooterText>
        </div>
        <div>
          <Subtitle>Contato</Subtitle>
          <div>
            <PhoneIcon className="w-4 h-4 text-sky-500" />
            <FooterText>(11) 99999-9999</FooterText>
          </div>
          <div className="flex gap-2">
            <MailIcon className="w-4 h-4 text-sky-500" />
            <FooterText>contato@viajamundo.com</FooterText>
          </div>
          <div>
            <MapIcon className="w-4 h-4 text-sky-500" />
            <FooterText>São Paulo, SP - Brasil</FooterText>
          </div>
        </div>
        <div>
          <FooterText>
            © 2025 Viaja Mundo. Todos os direitos reservados.
          </FooterText>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
