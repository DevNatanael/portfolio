import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const projectsData = [
    {
      image: "/sistFin.jpeg",
      projectName: "Sistema de Finanças",
      projectLink: "https://sistema-financas-devnatanael.vercel.app/",
      projectDescription:
        "Um dos primeiros projetos que fiz, basicamente o projeto é uma aplicação web feita em react que está apenas no front-end, o sistema consiste em o usuário poder adicionar e listar seus gastos e receitas de cada mês, assim tendo controle de suas finanças.",
      projectTech: ["React", "Styled Components", "Typescript"],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/api.jpg",
      projectName: "Api Rest Typescript",
      projectLink: "https://github.com/DevNatanael/Api-rest-solid",
      projectDescription:
        "Api feita com node e typescript utilizando os principios do solid e repository pattern, a api faz um crud para criação de usuários, e pelo fato de utilizar o padrão repository pattern pode salvar os dados em qualquer banco facilmente, sendo assim um sistema altamente escalável, além de utilizar o multer para o envio de imagens.",
      projectTech: ["NodeJs", "Typescript", "MulterJs", "MongoDB"],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
    {
      image: "/appMovie.jpeg",
      projectName: "The Movie",
      projectLink: "https://github.com/DevNatanael/The-Movie",
      projectDescription:
        "Projeto desenvolvido para um trabalho da faculdade que consiste em um aplicativo que recomenda filmes, basicamente o usuário irá escolher 3 gêneros de filmes e o algorítimo irá recomendar um filme baseado nas escolhas do usuário.",
      projectTech: ["React Native", "Typescript", "OMDB Api", "React Icons"],
      projectExternalLinks: {
        github: "",
        externalLink: "",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <div className="title">
        <h2>Alguns projetos feitos por mim</h2>
      </div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <div className="project" key={projectName}>
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Projeto em destaque</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectLink}
                        target="_blank"
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
