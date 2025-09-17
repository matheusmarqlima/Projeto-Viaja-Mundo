import MailIcon from "../assets/mail.svg?react";
import SendIcon from "../assets/send.svg?react";
import Button from "./Button";
import InputText from "./InputText";

const Subscribe = () => {
  return (
    <section>
      <div>
        <div>
          <MailIcon />
        </div>
        <h2>Fique por Dentro das Novidades</h2>
        <p>
          Receba ofertas exclusivas, dicas de viagem e destinos incríveis
          diretamente no seu e-mail
        </p>
        <div>
          <InputText placeholder="Seu melhor e-mail" />
          <Button icon={<SendIcon />}>Inscrever-se</Button>
        </div>
        <p>Não enviamos spam. Você pode cancelar a qualquer momento.</p>
      </div>
    </section>
  );
};
export default Subscribe;
