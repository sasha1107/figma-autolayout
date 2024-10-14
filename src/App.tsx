import { twJoin, twMerge } from "tailwind-merge";
import { useAtomValue } from "jotai";
import { autoLayoutAtom } from "@/store/autoLayoutAtom";
import { ThemeProvider } from "@/components/theme-provider";
import DesignPanel from "./components/DesignPanel";
import LayerPanel from "./components/LayerPanel";
import Box from "./components/Box";

function App() {
  const autoLayout = useAtomValue(autoLayoutAtom);
  return (
    <ThemeProvider>
      <div className="w-dvw h-dvh flex justify-center items-center">
        <LayerPanel />
        <DesignPanel />
        <div className={twMerge(twJoin(autoLayout && "flex"))}>
          <Box className="bg-slate-400">A</Box>
          <Box className="bg-slate-500">B</Box>
          <Box className="bg-slate-600">C</Box>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
