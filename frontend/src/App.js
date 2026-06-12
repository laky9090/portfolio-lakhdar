import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "@/pages/Portfolio";
import { Toaster } from "@/components/ui/sonner";
import { I18nProvider } from "@/data/i18n";

function App() {
  return (
    <div className="App">
      <I18nProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </BrowserRouter>
      </I18nProvider>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#FFFFFF",
            color: "#0B0D10",
            border: "1px solid #E4E7EB",
          },
        }}
      />
    </div>
  );
}

export default App;
