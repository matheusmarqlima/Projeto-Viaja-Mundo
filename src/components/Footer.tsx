import type { PropsWithChildren } from "react";
import FacebookIcon from "../assets/facebook.svg?react";
import InstagramIcon from "../assets/instagram.svg?react";
import TwitterIcon from "../assets/twitter.svg?react";
import YouTubeIcon from "../assets/youtube.svg?react";
import MapIcon from "../assets/mappin.svg?react";
import PhoneIcon from "../assets/phone.svg?react";
import MailIcon from "../assets/mail.svg?react";

const FooterLink = ({ children }: PropsWithChildren) => {
  return (
    <a href="#" className="text-slate-500 hover:text-sky-500 transition-colors">
      {children}
    </a>
  );
};

const SocialLink = ({ children }: PropsWithChildren) => {
  return (
    <a
      href="#"
      className="bg-sky-100 text-sky-500 h-10 w-10 rounded-full flex items-center justify-center hover:bg-sky-200 transition-colors"
    >
      {children}
    </a>
  );
};

const FooterTitle = ({ children }: PropsWithChildren) => {
    return <h3 className="font-semibold text-gray-800 text-lg mb-4">{children}</h3>
}

const Footer = () => {
  return (
    <footer className="bg-sky-50/75 rounded-lg m-4 md:m-8 -mt-5 md:-mt-10 p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          <div className="flex flex-col gap-4">
            <h2 className="text-sky-500 text-3xl font-bold">Viaja Mundo</h2>
            <p className="text-slate-500">
              Sua agência de viagens online para descobrir os melhores destinos do mundo.
            </p>
            <div className="flex gap-3 mt-2">
              <SocialLink><FacebookIcon className="h-5 w-5" /></SocialLink>
              <SocialLink><InstagramIcon className="h-5 w-5" /></SocialLink>
              <SocialLink><TwitterIcon className="h-5 w-5" /></SocialLink>
              <SocialLink><YouTubeIcon className="h-5 w-5" /></SocialLink>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <FooterTitle>Destinos</FooterTitle>
            <FooterLink>Europa</FooterLink>
            <FooterLink>Ásia</FooterLink>
            <FooterLink>América do Sul</FooterLink>
            <FooterLink>África</FooterLink>
            <FooterLink>Oceania</FooterLink>
          </div>
          
          <div className="flex flex-col gap-3">
            <FooterTitle>Serviços</FooterTitle>
            <FooterLink>Pacotes de Viagem</FooterLink>
            <FooterLink>Hotéis</FooterLink>
            <FooterLink>Passagens Aéreas</FooterLink>
            <FooterLink>Seguro Viagem</FooterLink>
            <FooterLink>Roteiros Personalizados</FooterLink>
          </div>
          
          <div className="flex flex-col gap-3">
            <FooterTitle>Contato</FooterTitle>
            <div className="flex items-center gap-3 text-slate-500">
              <PhoneIcon className="w-5 h-5 text-sky-500" />
              <span>(11) 9999-9999</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <MailIcon className="w-5 h-5 text-sky-500" />
              <span>contato@viajamundo.com</span>
            </div>
            <div className="flex items-center gap-3 text-slate-500">
              <MapIcon className="w-5 h-5 text-sky-500" />
              <span>São Paulo, SP - Brasil</span>
            </div>
          </div>
        </div>

        <hr className="my-8 border-slate-200" />
        <div className="text-center text-slate-500">
          <p>© 2024 Viaja Mundo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;