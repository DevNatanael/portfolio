"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="about"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>Sobre mim</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Meu nome é Natanael, sou apaixonado por tecnologia e resolução de
            problemas. Meu interesse por programação começou em fevereiro de
            2022 quando ingressei na universidade no curso de ciência da
            computação na universidade de fortaleza.
          </p>

          <p className="about-grid-info-text">
            Sou um profissional especializado na criação de sistemas web de alta
            qualidade, utilizando as mais recentes bibliotecas do ReactJS. Além
            disso, possuo experiência no desenvolvimento de aplicativos móveis
            para iOS e Android, utilizando o React Native.
          </p>

          <p className="about-grid-info-text">
            Atualmente trabalho como desenvolvedor junior na Tijuca Alimentos.
          </p>

          <p className="about-grid-info-text">
            Aqui estão algumas tecnologias que tenho trabalhado recentemente:
          </p>

          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">NodeJS</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">NextJS</li>
          </ul>
        </div>

        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/natan7.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
