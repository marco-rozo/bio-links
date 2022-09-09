import React from "react";
import { ButtonStyle, Center } from "./styles";
import Code from '../../assets/icons/code.svg';
import { VscGithubAlt, VscCode } from "react-icons/vsc";
import { IoLogoInstagram } from "react-icons/io5";
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsLinkedin, BsWhatsapp } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons";

export type availableIcons = 'github' | 'instagram' | 'linkedin' | 'whatsapp' | 'vscode'

type IconsProps = {
  [key in availableIcons]: IconType
}

const icons: IconsProps = {
  github: VscGithubAlt,
  instagram: IoLogoInstagram,
  linkedin:FaLinkedinIn,
  whatsapp: BsWhatsapp,
  vscode: VscCode,
}


interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  title: string;
  link?: string;
  icon: keyof typeof icons; 
}

const Button: React.FC<Props> = ({
  children,
  onClick,
  title,
  icon,
  link
}) => {
  const Icon = icons[icon]

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