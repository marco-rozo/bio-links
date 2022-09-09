import React from "react";
import { ButtonStyle, Center } from "./styles";
import Code from '../../assets/icons/code.svg';
import { VscGithubAlt, VscCode } from "react-icons/vsc";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const icons = [
  VscGithubAlt,
  IoLogoInstagram,
  FaLinkedinIn,
  BsWhatsapp,
  VscCode,
];

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  title: string;
  icon?: React.ReactNode;
  link?: string;
  idx: number;
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  title,
  icon,
  link,
  idx
}) => {
  const Icon = icons[idx];
  return (
    <Center>
      <ButtonStyle
        onClick={onClick}
        href={link}>
        <Icon />
        <span>{title}</span>
      </ButtonStyle>

    </Center>

  );
}

export default Button;