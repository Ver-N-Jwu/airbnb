import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import DARK_MODE_ICON from "@assets/dark-mode-icon.png";
import Icon from "@components/common/Icon";
import CalendarProvider from "@contexts/CalendarProvider";
import InputGuestProvider from "@contexts/InputGuestProvider";
import PriceProvider from "@contexts/PriceProvider";
import SearchModalProvider from "@contexts/SearchModalProvider";
import SearchResultProvider from "@contexts/SearchResultProvider";
import { useDarkMode } from "@hooks/useDarkMode";
import Main from "@pages/Main";
import NotFound from "@pages/NotFound";
import SearchResult from "@pages/SearchResult";
import GlobalStyles from "@styles/GlobalStyles";
import { lightTheme, darkTheme } from "@styles/theme";
import { compose } from "@utils/compose";

const Provider = compose([
  SearchResultProvider,
  CalendarProvider,
  PriceProvider,
  InputGuestProvider,
  SearchModalProvider,
]);

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <Provider>
      <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <ToggleThemeButton iconName={DARK_MODE_ICON} iconSize="large" onClick={toggleTheme} />
          <Routes>
            <Route index exact path="/" element={<Main toggleTheme={toggleTheme} />} />
            <Route path="/searchResult" element={<SearchResult toggleTheme={toggleTheme} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

const ToggleThemeButton = styled(Icon)`
  position: absolute;
  margin: 10px 0 0 10px;
`;

export default App;
