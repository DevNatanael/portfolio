import Button from "@/components/Button";
import React from "react";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2 className="contact-title">Para saber mais</h2>
      <h2 className="contact-sub-title">Entre em contato</h2>
      <p className="contact-text">
        Estou disponível para realizar novos projetos, para poder entrar em
        contato acesse:
      </p>
      <div className="contact-cta">
        <Button link="mailto:natanaelotavianoguedes@gmail.com" text="Clique Aqui"/>
      </div>
    </div>
  );
}
