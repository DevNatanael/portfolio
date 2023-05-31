import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

export function Navbar() {
  const sectionLinks = [
    { name: "Sobre", link: "#about" },
    { name: "Experiência", link: "#experience" },
    { name: "Trabalho", link: "#work" },
    { name: "Contato", link: "#contact" },
  ];
  return (
    <nav>
      <div className="wrapper">
        <div className="brand">
          <Link href="https://github.com/DevNatanael">
            <Logo />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }) => (
              <li key={name} className="nav-items-list-item">
                <Link href={link} className="nav-items-list-item-link">{name}</Link>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
}
