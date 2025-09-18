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
    <footer className="bg-blue-50 m-4 mt-[-20px]">
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-slate-500">
        <div>
          <h2 className="text-sky-500 text-3xl font-bold mb-4 ">Viaja Mundo</h2>
          <FooterText>
            Sua agência de viagens online para descobrir os melhores destinos do
            mundo.
          </FooterText>
          <div className="flex gap-4 mt-4  " >
            <a href="#" className="bg-sky-200 text-white h-[40px] w-[40px]  rounded-[9999px] flex items-center justify-center">
              <FacebookIcon />
            </a>
            <a href="#" className="bg-sky-200 text-white h-[40px] w-[40px]  rounded-[9999px] flex items-center justify-center">
              <InstagramIcon />
            </a>
            <a href="#" className="bg-sky-200 text-white h-[40px] w-[40px]  rounded-[9999px] flex items-center justify-center">
              <TwitterIcon />
            </a>
            <a href="#" className="bg-sky-200 text-white h-[40px] w-[40px]  rounded-[9999px] flex items-center justify-center">
              <YouTubeIcon />
            </a>
          </div>
        </div>
        <div className="sm:col-span-1 md:col-span-1 lg:col-span-1">
          <Subtitle className="font-semibold text-black mb-[20px] flex ">Destinos</Subtitle>
          <FooterText>Europa</FooterText>
          <FooterText>Ásia</FooterText>
          <FooterText>América do Sul</FooterText>
          <FooterText>África</FooterText>
          <FooterText>Oceania</FooterText>
        </div>
        <div>
          <Subtitle className="font-semibold text-black mb-[20px] flex ">Serviços</Subtitle>
          <FooterText>Pacotes de Viagem</FooterText>
          <FooterText>Hotéis</FooterText>
          <FooterText>Passagens Aéreas</FooterText>
          <FooterText>Seguro Viagem</FooterText>
          <FooterText>Roteiros Personalizados</FooterText>
        </div>
        <div className="sm:col-span-1 md:col-span-1 lg:col-span-1 text-slate-500">
          <Subtitle className="font-semibold text-black mb-[24px] flex ">Contato</Subtitle>
          <div className="flex gap-2 mb-2">
            <PhoneIcon className="w-4 h-4 text-sky-500" />
            <FooterText>(11) 99999-9999</FooterText>
          </div>
          <div className="flex gap-2">
            <MailIcon className="w-4 h-4 text-sky-500" />
            <FooterText>contato@viajamundo.com</FooterText>
          </div>
          <div className="flex gap-2 mt-2">
            <MapIcon className="w-4 h-4 text-sky-500" />
            <FooterText>São Paulo, SP - Brasil</FooterText>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center text-slate-500 sm:col-span-2 md:col-span-1 lg:col-span-1">
          <FooterText >
            © 2025 Viaja Mundo. Todos os direitos reservados.
          </FooterText>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
