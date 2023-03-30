import React from "react";
import { ButtonEmail } from "./styled";

interface Props {
  email: string;
}

const EmailButton: React.FC<Props> = ({ email }) => {
  return (
    <ButtonEmail>
      <a href={`mailto:${email}`}>
        <button>Enviar Email</button>
      </a>
    </ButtonEmail>
  );
};

export default EmailButton;
