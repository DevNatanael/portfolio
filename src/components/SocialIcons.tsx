"use client"
import Link from "next/link";
import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";
import { motion } from "framer-motion";

export default function SocialIcons() {
  const socialLinks = [
    {
      name: "Github",
      icon: <FiGithub />,
      link: "https://github.com/DevNatanael",
    },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      link: "https://www.linkedin.com/in/natanael-otaviano-guedes-b29032235",
    },
    {
      name: "Instagram",
      icon: <FiInstagram />,
      link: "https://instagram.com/natan.ot?igshid=MmIzYWVlNDQ5Yg==",
    },
  ];

  return (
    <motion.div
    className="social-icons"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 0.3,
      ease: "easeInOut",
      delay: 1.95,
    }}
  >
    <ul className="social-icons-list">
      {socialLinks.map(({ name, icon, link }) => (
        <li key={name} title={name} className="social-icons-list-item">
          <Link
            href={link}
            className="social-icons-list-item-link"
            target="_blank"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
  );
}
