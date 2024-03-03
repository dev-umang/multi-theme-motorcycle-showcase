import { useContext, useEffect, useState } from "react";
import { THEMES } from "../../themes/themes";
import s from "./_pages.module.scss";
import { ThemeContext } from "../../themes/theme.provider";
import styled, { DefaultTheme } from "styled-components";
import { getImage } from "../../helpers/image.helper";

const HomePage = () => {
  const { setTheme, theme } = useContext(ThemeContext);
  const [themeData, setThemeData] = useState<DefaultTheme>({});

  useEffect(() => {
    const _themeData = THEMES[theme];
    setThemeData(_themeData);
  }, [theme]);

  return (
    <div className={s.homePageGrid}>
      <div>
        <h1 className={s.title}>Motorcycle Showcase</h1>
        <div className={s.bikeImage}>{getImage(themeData.info?.bikeImage)}</div>
      </div>
      <div className={s.themeChanger}>
        {Object.values(THEMES).map((t) => {
          return (
            <ThemeBtn
              onClick={() => setTheme && setTheme(t.info?.key ?? "auroraGreen")}
              key={t.info?.key}
              className={theme === t.info?.key ? "active" : ""}
            >
              <div className={s.tankImage}>{getImage(t.info?.tankImage)}</div>
              <div>{t.info?.label}</div>
            </ThemeBtn>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;

const ThemeBtn = styled.button`
  background: transparent;
  color: ${(p) => p.theme.colors?.fgBody};
  border: none;
  border-radius: 10px;
  &.active {
    background: ${(p) => p.theme.colors?.bgPrimary};
    color: ${(p) => p.theme.colors?.textPrimary};
    box-shadow: 0px 0px 6px 3px ${(p) => p.theme.colors?.bgPrimary + "66"};
  }
  &:not(&.active) {
    &:hover {
      background: #ffffff55;
    }
  }
`;
