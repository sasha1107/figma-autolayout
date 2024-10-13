import { ThemeProvider } from "@/components/theme-provider";
import DesignPanel from "./components/DesignPanel";

function App() {
  return (
    <ThemeProvider>
      <div className="w-dvw h-dvh">
        <DesignPanel />
      </div>
    </ThemeProvider>
  );
}

export default App;
