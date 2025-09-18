import MailIcon from "../assets/mail.svg?react";
import SendIcon from "../assets/send.svg?react";
import Button from "./Button";
import InputText from "./InputText";

const Subscribe = () => {
  return (
    <section className="flex flex-col items-center text-center gap-6 py-20 px-4 bg-blue-50 m-4 mt-[-20px]">
      <div className="bg-white rounded-[12px] border border-slate-200 p-9 pt-18">
        <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto -mt-8 mb-4">
          <MailIcon />
        </div>
        <h2 className="text-4xl font-bold text-center text-slate-950 mb-4">Fique por Dentro das Novidades</h2>
        <p className="text-center text-slate-500 px-2 max-w-xl mx-auto mb-9">
          Receba ofertas exclusivas, dicas de viagem e destinos incríveis
          diretamente no seu e-mail
        </p>
        <div className="w-full max-w-sm mx-auto flex flex-col gap-4">
          <InputText placeholder="Seu melhor e-mail" className="w-full h-12 rounded-lg border-slate-300" />
          <Button icon={<SendIcon />} className="bg-sky-500 text-white w-full h-12 hover:bg-sky-600 rounded-[10px]">
            Inscrever-se
          </Button>
        </div>
        <p className="text-slate-500 text-sm p-4">Não enviamos spam. Você pode cancelar a qualquer momento.</p>
      </div>
    </section>
  );
};
export default Subscribe;
