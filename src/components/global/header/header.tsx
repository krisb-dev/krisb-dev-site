"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { Container } from "../layout/container/container";

import logo from "@/assets/logo.svg";
import Link from "next/link";
import { Github, SwatchBook } from "lucide-react";
import clsx from "clsx";

import style from "./header.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={style.header}>
      <Container className="flex items-center">
        <div>
          <Image src={logo} width={100} height={50} alt="KrisB Dev Logo" />
        </div>
        <nav>
          <ul>
            {navItems.map(({ href, label }) => (
              <li>
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    style.navLink,
                    pathname === href && style.isActive
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={style.actions}>
          <Link href="/" target="blank">
            <Github className="" />
          </Link>
          <button>
            <SwatchBook />
          </button>
        </div>
      </Container>
    </header>
  );
};

export { Header };
