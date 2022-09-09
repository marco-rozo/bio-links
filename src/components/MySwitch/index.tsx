import React, { useContext } from "react";
import { TopRightAlign } from "./styles";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
interface Props {
  toggleTheme(): void;
}

const MySwitch: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  return (
    <TopRightAlign>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={30}
        handleDiameter={20}
        offColor={colors.secondary}
        onColor={colors.secondary}
        onHandleColor={colors.detail}
        offHandleColor={colors.detail}
      />
    </TopRightAlign>
  );
}
export default MySwitch
