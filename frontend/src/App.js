import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "@/pages/Portfolio";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#121215",
            color: "#F8F8F8",
            border: "1px solid #27272A",
          },
        }}
      />
    </div>
  );
}

export default App;
