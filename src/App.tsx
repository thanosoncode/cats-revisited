import { ThemeProvider } from "@mui/material/styles";
import { AppProvider } from "./context/context";
import theme from "./theme";
import AppInner from "./AppInner";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <AppInner />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
