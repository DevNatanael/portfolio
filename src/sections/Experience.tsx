"use client";
import Link from "next/link";
import React, { useEffect } from "react";
export default function Experience() {
  const [selected, setSelected] = React.useState(0);

  useEffect(()=>{
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline")
      underline!.style.top= `${selected * 2.5}rem`;
    }
    transformSelected();
  },[selected])

  const expereinces = [
    {
      name: "Tijuca Alimentos",
      role: "Desenvolvedor Full Stack",
      url: "https://www.tijucaalimentos.com/",
      start: "Março de 2023",
      end: "o momento",
      shortDescription: [
        "Fui membro de uma equipe de mais de 10 desenvolvedores, o que me proporcionou uma valiosa experiência colaborativa.",
        "Ao longo da minha trajetória, trabalhei com uma variedade de tecnologias para o desenvolvimento, incluindo React, React Native, TypeScript, Node.js, MySQL, MongoDB, entre outras.",
        "Além das atividades de desenvolvimento, também asssumi responsabilidades no suporte e atendimento aos usuários dos sistemas desenvolvidos pela equipe.",
        "Adquiri experiência prática em metodologias ágeis, como o Scrum, participando de reuniões diárias e cumprindo prazos estabelecidos para a conclusão de tarefas.",
      ],
    },
    {
      name: "Tijuca Alimentos",
      role: "Aprendiz de Desenvolvimento",
      url: "https://www.tijucaalimentos.com/",
      start: "Outubro de 2021",
      end: "Março de 2023",
      shortDescription: [
        "Fui para o setor de desenvolvimento da empresa, onde comecei a estudar sobre desenvolvimento web.",
        "No meu aprendizado inicial, estudei as linguagens de programação javascript e php.",
        "Além dos estudos de desenvolvimento, também assumi responsabilidades no suporte e atendimento aos usuários dos sistemas desenvolvidos pela equipe.",
      ],
    },

    {
      name: "Tijuca Alimentos",
      role: "Estagiário de Suporte Técnico",
      url: "https://www.tijucaalimentos.com/",
      start: "Agosto de 2021",
      end: "Outubro de 2023",
      shortDescription: [
        "Ingressei na empresa como estagiário de suporte técnico.",
        "No meu estágio prestei serviço aos setores da empresa, trabalhando com manutenção de computadores, instalação de cameras e dvr, e manutenção da rede local.",
      ],
    },
  ];

  return (
    <div className="experience" id="experience">
      <div className="title">
        <h2>Experiência</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((experience, index) => {
            return (
              <li
                key={index}
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
              >
                <span>{experience.name.split('Alimentos')}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link className="link" href={expereinces[selected].url}>
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
