import ThemeProvider from "./context/ThemeProvider";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;