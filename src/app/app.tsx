import { FC } from "react";
import s from "./app.module.scss";
import styled from "styled-components";
import { ThemesProvider } from "../themes/theme.provider";
import HomePage from "./pages/home.page";

const App: FC = () => {
  return (
    <ThemesProvider>
      <AppWrapper className={s.appWrapper}>
        <HomePage />
      </AppWrapper>
    </ThemesProvider>
  );
};

export default App;

const AppWrapper = styled.div`
  background-color: ${(p) => p.theme.colors?.bgBody};
  color: ${(p) => p.theme.colors?.fgBody};
`;
